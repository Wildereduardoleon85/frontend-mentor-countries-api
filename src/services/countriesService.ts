import {
  getCountryNamesByCode,
  parseCountriesData,
  parseCountryDetailsData,
} from '../helpers'
import localData from '../data/countries.json'
import { Country, CountryDetails } from '../types'

const baseUrl = import.meta.env.VITE_COUNTRIES_BASE_URL

type CountriesData = {
  parsedCountries: Country[]
  countryNamesByCode: { [key: string]: string }
}

async function fecthAllCountries(): Promise<CountriesData> {
  try {
    const response = await fetch(`${baseUrl}/all`)
    const data = await response.json()
    const parsedCountries = parseCountriesData(data)
    const countryNamesByCode = getCountryNamesByCode(data)
    return {
      parsedCountries,
      countryNamesByCode,
    }
  } catch (error) {
    const parsedCountries = parseCountriesData(localData)
    const countryNamesByCode = getCountryNamesByCode(localData)
    return { parsedCountries, countryNamesByCode }
  }
}

async function fetchCountryByCode(
  countryPath: string
): Promise<CountryDetails> {
  try {
    const response = await fetch(`${baseUrl}/alpha${countryPath}`)
    const data = await response.json()
    return parseCountryDetailsData(data)
  } catch (error) {
    const foundCountry = [
      localData.find(
        (country) => country.cca3 === countryPath.replace('/', '')
      ),
    ]
    return parseCountryDetailsData(foundCountry)
  }
}

export { fecthAllCountries, fetchCountryByCode }
