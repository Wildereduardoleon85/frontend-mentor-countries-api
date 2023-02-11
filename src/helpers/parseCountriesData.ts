/* eslint-disable arrow-body-style */
import { Country } from '../types'

function getNativeName(country: any) {
  if (country.name.nativeName) {
    const nativeName = country.name.nativeName as Object
    return Object.values(nativeName)[0].common
  }
  return country.name.common
}

function parseCountriesData(countriesData: any[]): Country[] {
  return countriesData.map((country) => ({
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
  }))
}

export default parseCountriesData
