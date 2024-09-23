import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import useTokenStore from "@/store/useTokenStore";

const httpLink = createHttpLink({
    uri: "https://api.escuelajs.co/graphql",
});

const authLink = setContext((_, { headers }) => {
    const { access_token } = useTokenStore.getState();
    return {
        headers: {
            ...headers,
            authorization: access_token ? `Bearer ${access_token}` : "",
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;
