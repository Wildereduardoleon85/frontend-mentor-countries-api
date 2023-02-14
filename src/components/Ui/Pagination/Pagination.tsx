import { useCallback, useEffect, useState } from 'react'
import { Button } from '..'
import { usePagination, useTheme } from '../../../hooks'
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

  const pagesToShow = 5
  const defaultOffset = { from: 0, to: pagesToShow }
  const [{ from, to }, setOffset] = useState(defaultOffset)

  const onNextPageClick = useCallback(() => {
    setCurrentPage(currentPage + 1)
    if (currentPage >= to) {
      setOffset({
        from: from + pagesToShow,
        to: to + pagesToShow,
      })
    }
  }, [currentPage])

  const onPrevPageClick = useCallback(() => {
    setCurrentPage(currentPage - 1)
    if (currentPage <= from + 1) {
      setOffset({
        from: from - pagesToShow,
        to: to - pagesToShow,
      })
    }
  }, [currentPage])

  useEffect(() => {
    setOffset(defaultOffset)
  }, [totalOfPages])

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
      {[...Array(totalOfPages).keys()].slice(from, to).map((page) => (
        <Button
          key={page + 1}
          style={{
            backgroundColor: currentPage === page + 1 ? activeButton : '',
          }}
          className={styles.button}
          onClick={() => setCurrentPage(page + 1)}
        >
          {page + 1}
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
