import { Navigation } from './routes/Navigation'
import { Provider } from 'react-redux'
//import { store } from './store/rootReducer'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SnackbarProvider } from 'notistack';

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Provider store={store}> */}
      <SnackbarProvider maxSnack={3}>
        <Navigation />
        </SnackbarProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      {/* </Provider> */}
    </QueryClientProvider>
  )
}

export default App
