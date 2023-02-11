import { createContext } from 'react'
import { CountriesState, Country } from '../../types'

type CountriesContextProps = {
  state: CountriesState
  setCountries: (countries: Country[]) => void
  setLoading: (isLoading: boolean) => void
  setError: (error: string) => void
}

const CountriesContext = createContext({} as CountriesContextProps)

export default CountriesContext
