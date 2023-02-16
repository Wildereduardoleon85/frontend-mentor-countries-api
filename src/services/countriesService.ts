import localData from '../data/countries.json'

const baseUrl = import.meta.env.VITE_COUNTRIES_BASE_URL

async function fecthAllCountries(): Promise<any> {
  try {
    const response = await fetch(`${baseUrl}/all`)
    const data = await response.json()
    return data
  } catch (error) {
    return localData
  }
}

export default fecthAllCountries
