import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from 'react-icons/hi'
import { Button } from '..'
import styles from './Pagination.module.css'

function Pagination() {
  return (
    <div className={styles.container}>
      <Button className={`${styles.button} ${styles.prevButton}`}>
        <HiOutlineArrowNarrowLeft className={styles.icon} />
        &nbsp; Prev
      </Button>
      <Button className={styles.button}>1</Button>
      <Button className={styles.button}>2</Button>
      <Button className={styles.button}>3</Button>
      <Button className={styles.button}>4</Button>
      <Button className={styles.button}>5</Button>
      <Button className={`${styles.button} ${styles.nextButton}`}>
        Next &nbsp;
        <HiOutlineArrowNarrowRight className={styles.icon} />
      </Button>
    </div>
  )
}

export default Pagination
