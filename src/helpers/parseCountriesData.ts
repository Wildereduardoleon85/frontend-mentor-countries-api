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
    flagImage: country.flags.svg,
    countryCode: country.cca3,
  }))
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
  if (languages) {
    return Object.values(languages)
      .map((lang) => lang)
      .join(', ')
  }

  return ''
}

function getCurrencies(currencies: {
  [key: string]: { name: string; symbol: string }
}): string {
  if (currencies) {
    return Object.values(currencies)
      .map((currency) => currency.name)
      .join(', ')
  }

  return ''
}

function getCountryNamesByCode(countries: any[]) {
  const index: { [key: string]: string } = {}

  countries.forEach((country) => {
    index[country.cca3] = country.name.common
  })

  return index
}

function getCountryByCode(countries: any[], code: string): CountryDetails {
  const foundCountry = countries.find((country) => country.cca3 === code)
  return {
    name: foundCountry.name.common,
    nativeName: getNativeName(foundCountry),
    population: foundCountry.population,
    region: foundCountry.region,
    subregion: foundCountry.subregion,
    capital: foundCountry.capital,
    topLevelDomain: foundCountry.tld,
    currencies: foundCountry.currencies,
    languages: foundCountry.languages,
    borders: foundCountry.borders || [],
    flagImage: foundCountry.flags.svg,
    countryCode: foundCountry.cca3,
  }
}

export {
  parseCountriesData,
  getCountriesByRegion,
  getCountriesByKeywords,
  getLanguages,
  getCurrencies,
  getCountryNamesByCode,
  getCountryByCode,
}
