import { useTheme } from '../../hooks'
import styles from './Navbar.module.css'
import { MoonIcon, SunIcon } from '../Icons'
import { Button } from '../Ui'

function Navbar() {
  const {
    isDarkMode,
    elementColor: backgroundColor,
    toggleDarkMode,
  } = useTheme()

  return (
    <header style={{ backgroundColor }} className={styles.header}>
      <nav className={styles.navbar}>
        <h1>Where in the world?</h1>
        <div className={styles.switchButton}>
          <Button onClick={toggleDarkMode}>
            {isDarkMode ? (
              <SunIcon className={styles.icon} />
            ) : (
              <MoonIcon className={styles.icon} />
            )}
            <p className={styles.themeLabel}>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </p>
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
