import { useMutation } from "@apollo/client";
import useTokenStore from "@/store/useTokenStore";
import { REFRESH_TOKEN_MUTATION } from "@/graphql/refresh";

const useRefreshToken = () => {
  const setTokens = useTokenStore((state) => state.setTokens);
  const [refreshToken] = useMutation(REFRESH_TOKEN_MUTATION);

  const refresh = async () => {
    const refresh_token = useTokenStore.getState().refresh_token;
    try {
      const response = await refreshToken({
        variables: { refreshToken: refresh_token },
      });

      if (response.data?.refreshToken) {
        const { access_token, refresh_token } = response.data.refreshToken;
        setTokens(access_token, refresh_token);
        return true;
      }
    } catch (error) {
      console.error("Ошибка", error);

      return false;
    }
  };

  return refresh;
};

export default useRefreshToken;
