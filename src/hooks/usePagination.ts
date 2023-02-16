import { useState, useEffect, useContext } from 'react'
import { CountriesContext } from '../context'
import { PaginationItems } from '../types'
import useMediaQuery from './useMediaQuery'

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

function buildPagination(
  totalOfPages: number,
  offset: number,
  currentPage: number
): number[] | undefined {
  const pagesMatrix: number[][] = []
  let section: number[] | undefined

  for (let index = 0; index < totalOfPages; index += offset) {
    pagesMatrix.push(
      [...Array(totalOfPages).keys()]
        .map((page) => page + 1)
        .slice(index, index + offset)
    )
  }

  pagesMatrix.forEach((matrix) => {
    if (matrix.includes(currentPage)) {
      section = matrix
    }
  })

  return section
}

function usePagination() {
  const {
    state: { countries, currentPage },
    setCurrentPage,
  } = useContext(CountriesContext)
  const { isSmallScreen } = useMediaQuery()

  const pagesToShow = isSmallScreen ? 3 : 5

  const [{ firstItem, lastItem }, setPagination] =
    useState<PaginationItems>(defaultPagination)
  const [{ from, to }, setOffset] = useState({
    from: 0,
    to: pagesToShow,
  })

  const limit = countries.length
  const itemsPerPage = 8
  const totalOfPages = Math.ceil(limit / itemsPerPage)

  useEffect(() => {
    if (countries.length) {
      const pagination = getPaginationItems(itemsPerPage, currentPage, limit)
      setPagination(pagination as PaginationItems)
    }
  }, [countries, currentPage])

  useEffect(() => {
    const pagination = buildPagination(totalOfPages, pagesToShow, currentPage)

    if (pagination) {
      setOffset({
        from: pagination[0] - 1,
        to: pagination[pagination.length - 1],
      })
    }
  }, [totalOfPages, pagesToShow, currentPage])

  const numberOfPages = [...Array(totalOfPages).keys()]
    .slice(from, to)
    .map((key) => key + 1)

  return {
    firstItem,
    lastItem,
    currentPage,
    limit,
    itemsPerPage,
    totalOfPages,
    numberOfPages,
    setCurrentPage,
  }
}

export default usePagination
