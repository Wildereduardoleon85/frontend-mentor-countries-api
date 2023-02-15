import { useNavigate } from 'react-router-dom'
import { CountryBorders } from '..'
import { getCurrencies, getLanguages } from '../../helpers'
import { CountryDetailsState } from '../../types'
import formatNumber from '../../utils/formatNumber'
import { ArrowLeft } from '../Icons'
import { Button } from '../Ui'
import styles from './DetailsContainer.module.css'

type DetailsContainerProps = {
  state: CountryDetailsState
}

function DetailsContainer({ state }: DetailsContainerProps) {
  const navigate = useNavigate()
  const { country } = state

  return (
    <div>
      <Button className={styles.backButton} onClick={() => navigate('/')}>
        <ArrowLeft className={styles.icon} /> &nbsp; Back
      </Button>
      <div className={styles.details}>
        <img
          src={country.flagImage}
          width={509}
          height={363}
          alt={`${country.name}-flag`}
        />
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
          <CountryBorders borders={country.borders} />
        </div>
      </div>
    </div>
  )
}

export default DetailsContainer
