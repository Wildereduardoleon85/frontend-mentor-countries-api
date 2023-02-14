import { useState, useEffect, useContext } from 'react'
import { CountriesContext } from '../context'
import { PaginationItems } from '../types'

const defaultPagination = {
  firstItem: 0,
  lastItem: 8,
}

function getPaginationItems(
  itemsPerPage: number,
  page: number,
  limit: number
): PaginationItems | null {
  const totalOfPages = Math.floor(limit / itemsPerPage)
  if (page < 1 || page > totalOfPages + 1) {
    return defaultPagination
  }

  return {
    firstItem: itemsPerPage * (page - 1),
    lastItem: page > totalOfPages ? limit : itemsPerPage * page,
  }
}

function usePagination() {
  const {
    state: { countries, currentPage },
    setCurrentPage,
  } = useContext(CountriesContext)
  const [{ firstItem, lastItem }, setPagination] =
    useState<PaginationItems>(defaultPagination)

  const limit = countries.length
  const itemsPerPage = 8
  const totalOfPages = Math.ceil(limit / itemsPerPage)

  useEffect(() => {
    if (countries.length) {
      const pagination = getPaginationItems(itemsPerPage, currentPage, limit)
      setPagination(pagination as PaginationItems)
    }
  }, [countries, currentPage])

  return {
    firstItem,
    lastItem,
    currentPage,
    limit,
    itemsPerPage,
    totalOfPages,
    setCurrentPage,
  }
}

export default usePagination
