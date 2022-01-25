import 'src/styles/global-styles.css';

import { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@store/store';
import Layout from '@components/layout';
import AppHead from '@components/layout/components/app-head/app-head';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { themeColors,  } from '@styles/colors';

export const _app = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={{ colors: themeColors}}>
        <React.StrictMode>
          <AppHead />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </React.StrictMode>
      </ThemeProvider>
    </Provider>
  );
};

export default _app;
