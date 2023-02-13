import { useContext, useEffect, useState } from 'react'
import { CountriesContext } from '../context'
import { getCountriesByKeywords, getCountriesByRegion } from '../helpers'
import fecthAllCountries from '../services/countriesService'
import { Country } from '../types'

function useCountries() {
  const {
    state: { isLoading, countries, error, regionSelected, searchKeywords },
    setCountries,
    setLoading,
    setError,
  } = useContext(CountriesContext)

  const [localStateCountries, setLocalStateCountries] = useState<Country[]>([])

  async function setAllCountries() {
    setLoading(true)
    const { ok, data, error: apiError } = await fecthAllCountries()
    setLoading(false)
    if (ok && data) {
      setCountries(data)
      setLocalStateCountries(data)
    } else {
      setError(apiError as string)
    }
  }

  useEffect(() => {
    setAllCountries()
  }, [])

  useEffect(() => {
    if (regionSelected) {
      setCountries(getCountriesByRegion(localStateCountries, regionSelected))
    } else {
      setCountries(localStateCountries)
    }
  }, [regionSelected])

  useEffect(() => {
    if (searchKeywords) {
      setCountries(getCountriesByKeywords(localStateCountries, searchKeywords))
    } else {
      setCountries(localStateCountries)
    }
  }, [searchKeywords])

  return { isLoading, countries, error }
}

export default useCountries
