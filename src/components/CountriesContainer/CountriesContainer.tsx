import { useEffect, useState } from 'react'
import styles from './CountriesContainer.module.css'
import { CountryCard } from '..'
import { PaginationItems } from '../../types'
import { useCountries } from '../../hooks'

function getPaginationItems(
  itemsPerPage: number,
  page: number,
  limit: number
): PaginationItems | null {
  const totalOfPages = Math.floor(limit / itemsPerPage)

  if (page < 1 || page > totalOfPages + 1) return null

  return {
    firstItem: itemsPerPage * (page - 1),
    lastItem: page > totalOfPages ? limit : itemsPerPage * page,
  }
}

function CountriesContainer() {
  const { isLoading, countries, error } = useCountries()
  const [page, setPage] = useState<number>(1)
  const [{ firstItem, lastItem }, setPagination] = useState<PaginationItems>({
    firstItem: 0,
    lastItem: 8,
  })

  useEffect(() => {
    if (countries.length) {
      const pagination = getPaginationItems(8, page, countries.length)
      setPagination(pagination as PaginationItems)
    }
  }, [countries, page])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>Not Found</h2>
  }

  return (
    <div style={{ paddingBottom: '5rem' }} className={styles.container}>
      {!!countries.length &&
        countries
          .slice(firstItem, lastItem)
          .map((country) => (
            <CountryCard key={country.name} country={country} />
          ))}

      <button
        type='button'
        disabled={firstItem === 0}
        onClick={() => setPage(page - 1)}
      >
        prev
      </button>
      <button
        type='button'
        onClick={() => setPage(page + 1)}
        disabled={lastItem === countries.length}
      >
        next
      </button>
    </div>
  )
}

export default CountriesContainer
