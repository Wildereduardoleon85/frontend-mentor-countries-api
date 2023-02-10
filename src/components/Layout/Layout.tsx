import { useLayoutEffect } from 'react'
import { CountriesContainer, Filter, Navbar, Search } from '..'
import { useTheme } from '../../hooks'
import styles from './Layout.module.css'

function Layout() {
  const { isDarkMode } = useTheme()

  const body = document.querySelector('body')

  useLayoutEffect(() => {
    if (isDarkMode) {
      body?.classList.add('darkMode')
    } else {
      body?.classList.remove('darkMode')
    }
  }, [isDarkMode])

  return (
    <>
      <Navbar />
      <main className={styles.mainContainer}>
        <section className={styles.searchContainer}>
          <Search />
          <Filter />
        </section>
        <section>
          <CountriesContainer />
        </section>
      </main>
    </>
  )
}

export default Layout
