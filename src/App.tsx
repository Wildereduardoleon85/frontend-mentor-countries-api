import { Layout } from './components'
import { CountriesProvider, ThemeProvider } from './context'
// import { getCountriesByKeywords } from './helpers'
// import countries from './data/countries.json'
// import { Country } from './types'

function App() {
  // const parsedCountries: any = JSON.parse(countries as string)
  // console.log(getCountriesByKeywords(parsedCountries, 'bra'))
  // console.log(parsedCountries)

  return (
    <ThemeProvider>
      <CountriesProvider>
        <Layout />
      </CountriesProvider>
    </ThemeProvider>
  )
}

export default App
