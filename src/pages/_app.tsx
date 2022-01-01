import '@styles/global-styles.css';

import { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@store/store';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://petbook-back-dev.herokuapp.com/graphql',
  cache: new InMemoryCache(),
})

export const _app = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <React.StrictMode>
          <Component {...pageProps} />
        </React.StrictMode>
      </ApolloProvider>
    </Provider>
  );
};

export default _app;
