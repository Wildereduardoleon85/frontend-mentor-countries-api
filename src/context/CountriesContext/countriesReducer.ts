import { CountriesState, Country, RegionSelected } from '../../types'

type CountriesAction =
  | { type: 'setCountries'; payload: Country[] }
  | { type: 'setLoading'; payload: boolean }
  | { type: 'setError'; payload: string }
  | { type: 'setSearchKeywords'; payload: string }
  | { type: 'setRegionSelected'; payload: RegionSelected }
  | { type: 'setCurrentPage'; payload: number }

function countriesReducer(
  state: CountriesState,
  action: CountriesAction
): CountriesState {
  switch (action.type) {
    case 'setCountries':
      return {
        ...state,
        countries: action.payload,
      }

    case 'setLoading':
      return {
        ...state,
        isLoading: action.payload,
      }

    case 'setError':
      return {
        ...state,
        error: action.payload,
      }

    case 'setSearchKeywords':
      return {
        ...state,
        searchKeywords: action.payload,
      }

    case 'setRegionSelected':
      return {
        ...state,
        regionSelected: action.payload,
      }

    case 'setCurrentPage':
      return {
        ...state,
        currentPage: action.payload,
      }

    default:
      return state
  }
}

export default countriesReducer
