import { useTheme } from '../../hooks'
import { MoonIcon } from '../Icons'
import styles from './Navbar.module.css'

const { header, navbar, switchButton, icon } = styles

function Navbar() {
  const { textColor, elementColor, toggleDarkMode } = useTheme()

  return (
    <header style={{ backgroundColor: elementColor }} className={header}>
      <nav className={navbar}>
        <h1>Where in the world?</h1>
        <div>
          <button
            style={{ color: textColor }}
            className={switchButton}
            type='button'
            onClick={toggleDarkMode}
          >
            <MoonIcon style={{ stroke: textColor }} className={icon} />
            <p>Dark Mode</p>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
