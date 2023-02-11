import { parseCountriesData } from '../helpers'
import { ApiResponse, Country } from '../types'

const baseUrl = import.meta.env.VITE_COUNTRIES_BASE_URL

async function fecthAllCountries(): Promise<ApiResponse<Country[]>> {
  try {
    const response = await fetch(`${baseUrl}/all`)
    const data = await response.json()
    const parsedCountries = parseCountriesData(data)
    return {
      ok: true,
      data: parsedCountries,
    }
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : 'Server error',
    }
  }
}

export default fecthAllCountries
