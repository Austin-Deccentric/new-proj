
import Layout from "@/layout/layout";
import { useState } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient ({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5
      }
    }
  }))
  return (
  <QueryClientProvider client={queryClient}>
    <Layout>
    <Component {...pageProps} />
    <ReactQueryDevtools initialIsOpen={false} position="bottom" />
    </Layout>
  </QueryClientProvider>
  
    
  )
}
