import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks'
import { Country } from '../../types'
import formatNumber from '../../utils/formatNumber'
import styles from './CountryCard.module.css'

type CountryCardProps = {
  country: Country
}

function CountryCard({ country }: CountryCardProps) {
  const { elementColor, textColor } = useTheme()

  return (
    <Link
      style={{ backgroundColor: elementColor, color: textColor }}
      className={styles.countryCard}
      to={`/${country.countryCode}`}
    >
      <div className={styles.flagContainer}>
        <img
          className={styles.flag}
          src={country.flagImage}
          alt={`${country.name} flag`}
        />
      </div>

      <div className={styles.details}>
        <p className={styles.countryName}>{country.name}</p>
        <p className={styles.key}>
          Population:{' '}
          <span className={styles.value}>
            {formatNumber(country.population)}
          </span>
        </p>
        <p className={styles.key}>
          Region: <span className={styles.value}>{country.region}</span>
        </p>
        <p className={styles.key}>
          Capital: <span className={styles.value}>{country.capital}</span>
        </p>
      </div>
    </Link>
  )
}

export default CountryCard
