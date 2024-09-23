import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LOGIN_MUTATION } from "@/graphql/login";
import useTokenStore from "@/store/useTokenStore";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setTokens = useTokenStore((state) => state.setTokens);
  const [login, { loading }] = useMutation(LOGIN_MUTATION);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await login({
        variables: { email, password },
      });

      if (response.data?.login) {
        const { access_token, refresh_token } = response.data.login;

        setTokens(access_token, refresh_token);
        toast.success('Logged in successfully!');


        router.push("/my-info/time-off");
      }
    } catch (err) {
      console.error("Login failed", err);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Авторизация</CardTitle>
          <CardDescription>Введите адрес электронной почты и пароль.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Электронная почта</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit" disabled={loading}>
              {loading ? "Вход..." : "Войти"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
