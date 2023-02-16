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
      regionSelected,
      searchKeywords,
      countryNamesByCode,
    },
    setCountries,
    setLoading,
    setCountryNamesByCode,
  } = useContext(CountriesContext)

  const [localStateCountries, setLocalStateCountries] = useState<Country[]>([])

  async function setAllCountries() {
    setLoading(true)
    const data = await fecthAllCountries()
    setLoading(false)
    setCountries(data.parsedCountries)
    setLocalStateCountries(data.parsedCountries)
    setCountryNamesByCode(data.countryNamesByCode)
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

  return { isLoading, countries, countryNamesByCode }
}

export default useCountries
