export type IconProps = {
  className?: string
  style?: Object
}

export type ThemeState = {
  isDarkMode: boolean
}

export type Country = {
  name: string
  population: number
  region: string
  capital: string
  flagImage: string
  countryCode: string
}

export interface CountryDetails extends Country {
  nativeName: string
  subregion: string
  topLevelDomain: string[]
  currencies: {
    [key: string]: {
      code: string
      name: string
      symbol: string
    }
  }
  languages: {
    [key: string]: string
  }
  borders: string[]
}

export type CountryDetailsState = {
  country: CountryDetails
  countryNamesByCode: {
    [key: string]: string
  }
  isLoading: boolean
}

export type Region = 'Americas' | 'Africa' | 'Asia' | 'Oceania' | 'Europe'

export type RegionSelected = Region | ''

export type CountriesState = {
  countries: Country[]
  isLoading: boolean
  regionSelected: RegionSelected
  searchKeywords: string
  currentPage: number
}

export type PaginationItems = {
  firstItem: number
  lastItem: number
}
