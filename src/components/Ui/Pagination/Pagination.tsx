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
    numberOfPages,
  } = usePagination()
  const { activeButton } = useTheme()
  const { isExtraSmallScreen } = useMediaQuery()

  return (
    <div className={styles.container}>
      <Button
        className={`${styles.button} ${styles.prevButton}`}
        disabled={firstItem === 0}
        onClick={() => setCurrentPage(currentPage - 1)}
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
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next &nbsp;
        <ArrowRight className={styles.icon} />
      </Button>
    </div>
  )
}

export default Pagination
