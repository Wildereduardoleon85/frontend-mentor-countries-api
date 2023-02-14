import { useTheme } from '../../hooks'
import { Country } from '../../types'
import styles from './CountryCard.module.css'

type CountryCardProps = {
  country: Country
}

function CountryCard({ country }: CountryCardProps) {
  const { elementColor } = useTheme()

  return (
    <div
      style={{ backgroundColor: elementColor }}
      className={styles.countryCard}
    >
      <div className={styles.flagContainer}>
        <img
          src={country.flagImage}
          alt={`${country.name} flag`}
          width='100%'
          height='100%'
        />
      </div>

      <div className={styles.details}>
        <p className={styles.countryName}>{country.name}</p>
        <p className={styles.key}>
          Population: <span className={styles.value}>{country.population}</span>
        </p>
        <p className={styles.key}>
          Region: <span className={styles.value}>{country.region}</span>
        </p>
        <p className={styles.key}>
          Capital: <span className={styles.value}>{country.capital}</span>
        </p>
      </div>
    </div>
  )
}

export default CountryCard
