import { Layout } from './components'
import { CountriesProvider, ThemeProvider } from './context'

function App() {
  return (
    <ThemeProvider>
      <CountriesProvider>
        <Layout />
      </CountriesProvider>
    </ThemeProvider>
  )
}

export default App
