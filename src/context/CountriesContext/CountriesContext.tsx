import { createContext } from 'react'
import { CountriesState, Country, RegionSelected } from '../../types'

type CountriesContextProps = {
  state: CountriesState
  setCountries: (countries: Country[]) => void
  setLoading: (isLoading: boolean) => void
  setSearchKeywords: (searchKeywords: string) => void
  setRegionSelected: (regionSelected: RegionSelected) => void
  setCurrentPage: (currentPage: number) => void
}

const CountriesContext = createContext({} as CountriesContextProps)

export default CountriesContext
