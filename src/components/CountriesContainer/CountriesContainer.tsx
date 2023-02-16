import styles from './CountriesContainer.module.css'
import { CountryCard } from '..'
import { useCountries, usePagination } from '../../hooks'
import { Loader, Pagination } from '../Ui'

function CountriesContainer() {
  const { isLoading, countries } = useCountries()
  const { firstItem, lastItem } = usePagination()

  if (isLoading) {
    return (
      <div className={styles.loaderContainer}>
        <Loader />
      </div>
    )
  }

  return (
    <>
      <div className={styles.container}>
        {!!countries.length &&
          countries
            .slice(firstItem, lastItem)
            .map((country) => (
              <CountryCard key={country.name} country={country} />
            ))}
      </div>
      <Pagination />
    </>
  )
}

export default CountriesContainer
