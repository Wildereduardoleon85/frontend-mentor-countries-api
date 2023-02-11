import { useContext, useEffect } from 'react'
import { CountriesContext } from '../context'
import fecthAllCountries from '../services/countriesService'

function useCountries() {
  const {
    state: { isLoading, countries, error },
    setCountries,
    setLoading,
    setError,
  } = useContext(CountriesContext)

  async function setAllCountries() {
    setLoading(true)
    const { ok, data, error: apiError } = await fecthAllCountries()
    setLoading(false)
    if (ok && data) {
      setCountries(data)
    } else {
      setError(apiError as string)
    }
  }

  useEffect(() => {
    setAllCountries()
  }, [])

  return { isLoading, countries, error }
}

export default useCountries
