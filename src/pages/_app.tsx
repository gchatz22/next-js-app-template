import '@/styles.css'
import 'tailwindcss/tailwind.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from '@/common/Notification'
import type { AppProps } from 'next/app'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: false,
    },
  },
})

const App = ({
  Component,
  pageProps,
}: AppProps & {
  cluster: string
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <ToastContainer />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </>
    </QueryClientProvider>
  )
}

export default App
