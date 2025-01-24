import HomePage from './pages/HomePage'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
function App() {
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </>
  )
}

export default App
