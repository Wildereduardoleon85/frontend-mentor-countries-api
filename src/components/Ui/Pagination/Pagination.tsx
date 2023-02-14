import { useCallback, useEffect, useState } from 'react'
import { Button } from '..'
import { usePagination, useTheme } from '../../../hooks'
import useMediaQuery from '../../../hooks/useMediaQuery'
import { ArrowLeft, ArrowRight } from '../../Icons'
import styles from './Pagination.module.css'

function Pagination() {
  const {
    currentPage,
    setCurrentPage,
    firstItem,
    lastItem,
    limit,
    totalOfPages,
  } = usePagination()
  const { activeButton } = useTheme()
  const { isSmallScreen, isExtraSmallScreen } = useMediaQuery()

  const pagesToShow = isSmallScreen ? 3 : 5
  const [{ from, to }, setOffset] = useState({
    from: 0,
    to: pagesToShow,
  })

  const numberOfPages = [...Array(totalOfPages).keys()]
    .slice(from, to)
    .map((number) => number + 1)

  const onNextPageClick = useCallback(() => {
    setCurrentPage(currentPage + 1)
    if (currentPage >= to) {
      setOffset({
        from: from + pagesToShow,
        to: to + pagesToShow,
      })
    }
  }, [currentPage, pagesToShow])

  const onPrevPageClick = useCallback(() => {
    setCurrentPage(currentPage - 1)
    if (currentPage <= from + 1) {
      setOffset({
        from: from - pagesToShow,
        to: to - pagesToShow,
      })
    }
  }, [currentPage, pagesToShow])

  useEffect(() => {
    setOffset({ from: 0, to: pagesToShow })
  }, [totalOfPages, pagesToShow])

  return (
    <div className={styles.container}>
      <Button
        className={`${styles.button} ${styles.prevButton}`}
        disabled={firstItem === 0}
        onClick={onPrevPageClick}
      >
        <ArrowLeft className={styles.icon} />
        &nbsp; Prev
      </Button>
      {!isExtraSmallScreen &&
        numberOfPages.map((page) => (
          <Button
            key={page}
            style={{
              backgroundColor: currentPage === page ? activeButton : '',
            }}
            className={styles.button}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </Button>
        ))}

      <Button
        className={`${styles.button} ${styles.nextButton}`}
        disabled={lastItem === limit}
        onClick={onNextPageClick}
      >
        Next &nbsp;
        <ArrowRight className={styles.icon} />
      </Button>
    </div>
  )
}

export default Pagination
