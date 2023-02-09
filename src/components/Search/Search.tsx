import { useTheme } from '../../hooks'
import { SearchIcon } from '../Icons'
import styles from './Search.module.css'

function Search() {
  const { isDarkMode, elementColor, textColor } = useTheme()

  return (
    <div
      style={{ backgroundColor: elementColor }}
      className={styles.searchContainer}
    >
      <SearchIcon
        style={{ color: !isDarkMode && 'hsl(0, 0%, 52%)' }}
        className={styles.searchIcon}
      />
      <input
        style={{ color: textColor }}
        type='text'
        placeholder='Search for a country...'
      />
    </div>
  )
}

export default Search
