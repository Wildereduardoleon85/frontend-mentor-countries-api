import {
  getCountryNamesByCode,
  parseCountriesData,
  parseCountryDetailsData,
} from '../helpers'
import { ApiResponse, Country, CountryDetails } from '../types'

const baseUrl = import.meta.env.VITE_COUNTRIES_BASE_URL

type CountriesData = {
  parsedCountries: Country[]
  countryNamesByCode: { [key: string]: string }
}

async function fecthAllCountries(): Promise<ApiResponse<CountriesData>> {
  try {
    const response = await fetch(`${baseUrl}/all`)
    const data = await response.json()
    const parsedCountries = parseCountriesData(data)
    const countryNamesByCode = getCountryNamesByCode(data)
    return {
      ok: true,
      data: { parsedCountries, countryNamesByCode },
    }
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : 'Server error',
    }
  }
}

async function fetchCountryByCode(
  countryPath: string
): Promise<ApiResponse<CountryDetails>> {
  try {
    const response = await fetch(`${baseUrl}/alpha${countryPath}`)
    const data = await response.json()
    const parsedCountry = parseCountryDetailsData(data)
    return {
      ok: true,
      data: parsedCountry,
    }
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : 'Server error',
    }
  }
}

export { fecthAllCountries, fetchCountryByCode }
