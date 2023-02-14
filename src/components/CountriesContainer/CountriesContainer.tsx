import styles from './CountriesContainer.module.css'
import { CountryCard } from '..'
import { useCountries, usePagination } from '../../hooks'
import { Pagination } from '../Ui'

function CountriesContainer() {
  const { isLoading, countries, error } = useCountries()
  const { firstItem, lastItem } = usePagination()

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>Not Found</h2>
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
