import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';

import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { makeServer } from '../services/mirage';
import { theme } from '../styles/theme';

import { ReactQueryDevtools } from 'react-query/devtools'
import { queryClient } from '../services/queryClient';
import { AuthProvider } from '../contexts/AuthContext';

// variável de ambiente setada automaticamente pelo next
// if (process.env.NODE_ENV === 'development') {
//   makeServer();
// }

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
