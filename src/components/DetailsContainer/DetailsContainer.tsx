import { useNavigate } from 'react-router-dom'
import { CountryBorders } from '..'
import { getCurrencies, getLanguages } from '../../helpers'
import { CountryDetailsState } from '../../types'
import formatNumber from '../../utils/formatNumber'
import { ArrowLeft } from '../Icons'
import { Button, Loader } from '../Ui'
import styles from './DetailsContainer.module.css'

type DetailsContainerProps = {
  state: CountryDetailsState
}

function DetailsContainer({ state }: DetailsContainerProps) {
  const navigate = useNavigate()
  const { country, countryNamesByCode, isLoading } = state

  if (isLoading) {
    return (
      <div className={styles.loaderContainer}>
        <Loader />
      </div>
    )
  }

  return (
    <div>
      <Button className={styles.backButton} onClick={() => navigate('/')}>
        <ArrowLeft className={styles.icon} /> &nbsp; Back
      </Button>
      <div className={styles.details}>
        <div className={styles.flagContainer}>
          <img
            className={styles.flagImage}
            src={country.flagImage}
            alt={`${country.name}-flag`}
          />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <h1>{country.name}</h1>
            <div className={styles.labelsContainer}>
              <div className={styles.labels}>
                <p>
                  Native Name: <span>{country.nativeName}</span>
                </p>
                <p>
                  Population: <span>{formatNumber(country.population)}</span>
                </p>
                <p>
                  Region: <span>{country.region}</span>
                </p>
                <p>
                  Sub Region: <span>{country.subregion}</span>
                </p>
                <p>
                  Capital: <span>{country.capital}</span>
                </p>
              </div>
              <div className={styles.labels}>
                <p>
                  Top Level Domain: <span>{country.topLevelDomain}</span>
                </p>
                <p>
                  Currencies: <span>{getCurrencies(country.currencies)}</span>
                </p>
                <p>
                  Languages: <span>{getLanguages(country.languages)}</span>
                </p>
              </div>
            </div>
          </div>
          <CountryBorders
            borders={country.borders}
            countryNamesByCode={countryNamesByCode}
          />
        </div>
      </div>
    </div>
  )
}

export default DetailsContainer
