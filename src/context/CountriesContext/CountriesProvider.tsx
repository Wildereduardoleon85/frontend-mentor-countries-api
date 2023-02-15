import { useMemo, useReducer } from 'react'
import { CountriesState, Country, RegionSelected } from '../../types'
import CountriesContext from './CountriesContext'
import countriesReducer from './countriesReducer'

type CountriesProviderProps = {
  children: JSX.Element | JSX.Element[]
}

const initialState: CountriesState = {
  countries: [],
  countryNamesByCode: {},
  currentPage: 1,
  searchKeywords: '',
  isLoading: false,
  error: '',
  regionSelected: '',
}

function CountriesProvider({ children }: CountriesProviderProps) {
  const [state, dispatch] = useReducer(countriesReducer, initialState)

  function setCountries(countries: Country[]) {
    dispatch({
      type: 'setCountries',
      payload: countries,
    })
  }

  function setLoading(isLoading: boolean) {
    dispatch({
      type: 'setLoading',
      payload: isLoading,
    })
  }

  function setError(error: string) {
    dispatch({
      type: 'setError',
      payload: error,
    })
  }

  function setSearchKeywords(searchKeywords: string) {
    dispatch({
      type: 'setSearchKeywords',
      payload: searchKeywords,
    })
  }

  function setCurrentPage(currentPage: number) {
    dispatch({
      type: 'setCurrentPage',
      payload: currentPage,
    })
  }

  function setRegionSelected(regionSelected: RegionSelected) {
    dispatch({
      type: 'setRegionSelected',
      payload: regionSelected,
    })
  }

  function setCountryNamesByCode(countryNamesByCode: {
    [key: string]: string
  }) {
    dispatch({
      type: 'setCountryNamesByCode',
      payload: countryNamesByCode,
    })
  }

  const memoizedState = useMemo(
    () => ({
      state,
      setCountries,
      setLoading,
      setError,
      setSearchKeywords,
      setRegionSelected,
      setCurrentPage,
      setCountryNamesByCode,
    }),
    [state, dispatch]
  )

  return (
    <CountriesContext.Provider value={memoizedState}>
      {children}
    </CountriesContext.Provider>
  )
}

export default CountriesProvider
