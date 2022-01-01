import 'src/styles/global-styles.css';

import { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@store/store';
import Layout from '@components/layout';

export const _app = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.StrictMode>
    </Provider>
  );
};

export default _app;
