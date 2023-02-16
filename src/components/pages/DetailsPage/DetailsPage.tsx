import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { DetailsContainer } from '../..'
import { fetchCountryByCode } from '../../../services/countriesService'
import { CountryDetailsState } from '../../../types'

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
  isLoading: false,
}

function DetailsPage() {
  const { pathname } = useLocation()
  const [state, setState] = useState(initialState)

  async function setCountryDetails() {
    setState({ ...state, isLoading: true })
    const data = await fetchCountryByCode(pathname)
    setState({ ...state, isLoading: false })
    setState({ ...state, country: data })
  }

  useEffect(() => {
    setCountryDetails()
  }, [pathname])

  return <DetailsContainer state={state} />
}

export default DetailsPage
