import { Layout } from './components'
import ThemeProvider from './context/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  )
}

export default App
