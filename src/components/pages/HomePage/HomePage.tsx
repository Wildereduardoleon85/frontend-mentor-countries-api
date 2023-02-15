import { CountriesContainer, Filter, Search } from '../..'
import styles from './HomePage.module.css'

function HomePage() {
  return (
    <>
      <section className={styles.searchContainer}>
        <Search />
        <Filter />
      </section>
      <section>
        <CountriesContainer />
      </section>
    </>
  )
}

export default HomePage
