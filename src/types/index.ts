export type IconProps = {
  className?: string
  style?: Object
}

export type ThemeState = {
  isDarkMode: boolean
}

export type Country = {
  name: string
  nativeName: string
  population: number
  region: string
  subregion: string
  capital: string
  topLevelDomain: string[]
  currencies: {
    code: string
    name: string
    symbol: string
  }[]
  languages: {
    iso639_1: string
    iso639_2: string
    name: string
    nativeName: string
  }[]
  borders: string[]
  flagImage: string
}

export type CountriesState = {
  countries: Country[]
  isLoading: boolean
  error: string
}

export type ApiResponse<T> = {
  ok: boolean
  data?: T
  error?: string
}

export type PaginationItems = {
  firstItem: number
  lastItem: number
}
