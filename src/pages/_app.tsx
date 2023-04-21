import axios from 'axios';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import * as React from 'react';
import { SWRConfig } from 'swr';

import '@/styles/globals.css';
import '@/styles/mdx.css';
import '@/styles/dracula.css';
import '@/styles/nprogress.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='light' enableSystem={false}>
      <SWRConfig
        value={{
          fetcher: (url) => axios.get(url).then((res) => res.data),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </ThemeProvider>
  );
}

export default MyApp;
