import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { DetailsContainer } from '../..'
import { getCountryByCode, getCountryNamesByCode } from '../../../helpers'
import { CountryDetailsState } from '../../../types'
import fecthAllCountries from '../../../services/countriesService'

const initialState: CountryDetailsState = {
  country: {
    name: '',
    countryCode: '',
    population: 0,
    region: '',
    capital: '',
    flagImage: '',
    nativeName: '',
    subregion: '',
    topLevelDomain: [''],
    currencies: {
      '': {
        name: '',
        code: '',
        symbol: '',
      },
    },
    languages: {
      '': '',
    },
    borders: [],
  },
  countryNamesByCode: {
    '': '',
  },
  isLoading: false,
}

function DetailsPage() {
  const { pathname } = useLocation()
  const [state, setState] = useState(initialState)

  async function setCountryDetails() {
    setState({ ...state, isLoading: true })
    const countries = await fecthAllCountries()
    const country = getCountryByCode(countries, pathname.replace('/', ''))
    const countryNamesByCode = getCountryNamesByCode(countries)
    setState({ ...state, isLoading: false, country, countryNamesByCode })
  }

  useEffect(() => {
    setCountryDetails()
  }, [pathname])

  return <DetailsContainer state={state} />
}

export default DetailsPage
