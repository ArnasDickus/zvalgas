import React from 'react';
import Head from 'next/head';

import { fontsInterLinks } from './font-links';

const AppHead = () => {
  return (
    <Head>
      {fontsInterLinks?.map(font => {
        return (
          <link   key={font?.from}
            rel="preload"
            href={font?.from}
            as="font"
            crossOrigin="">
                    
          </link>
        )
      })}
      <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
    </Head>
  
  )
};

export default AppHead;
