import { useContext, useEffect, useState } from 'react'
import { CountriesContext } from '../context'
import { getCountriesByKeywords, getCountriesByRegion } from '../helpers'
import { fecthAllCountries } from '../services/countriesService'
import { Country } from '../types'

function useCountries() {
  const {
    state: {
      isLoading,
      countries,
      error,
      regionSelected,
      searchKeywords,
      countryNamesByCode,
    },
    setCountries,
    setLoading,
    setError,
    setCountryNamesByCode,
  } = useContext(CountriesContext)

  const [localStateCountries, setLocalStateCountries] = useState<Country[]>([])

  async function setAllCountries() {
    setLoading(true)
    const { ok, data, error: apiError } = await fecthAllCountries()
    setLoading(false)
    if (ok && data) {
      setCountries(data.parsedCountries)
      setLocalStateCountries(data.parsedCountries)
      setCountryNamesByCode(data.countryNamesByCode)
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
  }, [regionSelected, localStateCountries])

  useEffect(() => {
    if (searchKeywords) {
      setCountries(getCountriesByKeywords(localStateCountries, searchKeywords))
    } else if (!searchKeywords && regionSelected) {
      setCountries(getCountriesByRegion(localStateCountries, regionSelected))
    } else {
      setCountries(localStateCountries)
    }
  }, [searchKeywords, regionSelected, localStateCountries])

  return { isLoading, countries, countryNamesByCode, error }
}

export default useCountries
