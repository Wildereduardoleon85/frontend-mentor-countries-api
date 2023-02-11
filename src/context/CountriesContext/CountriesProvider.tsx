import { useMemo, useReducer } from 'react'
import { CountriesState, Country } from '../../types'
import CountriesContext from './CountriesContext'
import countriesReducer from './countriesReducer'

type CountriesProviderProps = {
  children: JSX.Element | JSX.Element[]
}

const initialState: CountriesState = {
  countries: [],
  isLoading: false,
  error: '',
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

  const memoizedState = useMemo(
    () => ({
      state,
      setCountries,
      setLoading,
      setError,
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
