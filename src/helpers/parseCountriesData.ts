import { Country, Region, CountryDetails } from '../types'

function getNativeName(country: any): string {
  if (country.name.nativeName) {
    const nativeName = country.name.nativeName as Object
    return Object.values(nativeName)[0].common
  }
  return country.name.common
}

function parseCountriesData(countriesData: any[]): Country[] {
  return countriesData.map((country) => ({
    name: country.name.common,
    population: country.population,
    region: country.region,
    capital: country.capital,
    flagImage: country.flags.png,
    countryCode: country.cca3,
  }))
}

function parseCountryDetailsData(countriesData: any[]): CountryDetails {
  const country = countriesData[0]
  return {
    name: country.name.common,
    nativeName: getNativeName(country),
    population: country.population,
    region: country.region,
    subregion: country.subregion,
    capital: country.capital,
    topLevelDomain: country.tld,
    currencies: country.currencies,
    languages: country.languages,
    borders: country.borders || [],
    flagImage: country.flags.png,
    countryCode: country.cca3,
  }
}

function getCountriesByRegion(countries: Country[], region: Region): Country[] {
  return countries.filter((country) => country.region === region)
}

function getCountriesByKeywords(
  countries: Country[],
  keywords: string
): Country[] {
  const filteredCountries: Country[] = []

  countries.forEach((country: Country) => {
    if (country.name.toLowerCase().includes(keywords.toLowerCase())) {
      filteredCountries.push(country)
    }
  })

  return filteredCountries
}

function getLanguages(languages: { [key: string]: string }): string {
  return Object.values(languages)
    .map((lang) => lang)
    .join(', ')
}

function getCurrencies(currencies: {
  [key: string]: { name: string; symbol: string }
}): string {
  return Object.values(currencies)
    .map((currency) => currency.name)
    .join(', ')
}

function getCountryNamesByCode(countries: any[]) {
  const index: { [key: string]: string } = {}

  countries.forEach((country) => {
    index[country.cca3] = country.name.common
  })

  return index
}

export {
  parseCountriesData,
  getCountriesByRegion,
  getCountriesByKeywords,
  parseCountryDetailsData,
  getLanguages,
  getCurrencies,
  getCountryNamesByCode,
}
