import { ProfileProvider } from "@/context/ProfileContext";
import client from "@/lib/apollo";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ProfileProvider>
         <Toaster />
        <Component {...pageProps} />
        </ProfileProvider>
    </ApolloProvider>
  );
}
