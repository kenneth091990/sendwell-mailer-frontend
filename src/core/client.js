import { split, HttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from "@apollo/client/link/ws";
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { SESSION_TOKEN, signToken } from './constants';
import { createUploadLink } from "apollo-upload-client";

const httpLink = createUploadLink({
    uri: `${import.meta.env.VITE_SERVER_HOST}/graphql`,
});

const authLink = setContext(operation => signToken(
    localStorage.getItem(SESSION_TOKEN),
    localStorage.getItem(SESSION_TOKEN) ? localStorage.getItem(SESSION_TOKEN).split(".")[1] : ""
).then(data => {
    return {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem(SESSION_TOKEN),
            "request-x-token": data
        }
    }
}));

const finalLink = authLink.concat(httpLink);

const wsLink = new WebSocketLink(
    new SubscriptionClient(`${import.meta.env.VITE_SERVER_WS}/graphql`,)
);

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    finalLink,
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
})


export default client;
