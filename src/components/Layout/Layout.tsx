import { useLayoutEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from '..'
import { useTheme } from '../../hooks'
import { DetailsPage, HomePage } from '../pages'
import styles from './Layout.module.css'

function Layout() {
  const { isDarkMode } = useTheme()

  useLayoutEffect(() => {
    const body = document.querySelector('body')
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
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:countryId' element={<DetailsPage />} />
        </Routes>
      </main>
    </>
  )
}

export default Layout
