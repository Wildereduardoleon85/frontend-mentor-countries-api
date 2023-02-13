import { ChangeEvent, useContext, useState } from 'react'
import { CountriesContext } from '../../context'
import { useTheme } from '../../hooks'
import { SearchIcon } from '../Icons'
import styles from './Search.module.css'

function Search() {
  const { isDarkMode, elementColor, textColor } = useTheme()
  const {
    state: { searchKeywords },
    setSearchKeywords,
  } = useContext(CountriesContext)
  const [active, setActive] = useState(false)

  function onTypeSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearchKeywords(e.target.value)
  }

  return (
    <div
      style={{
        backgroundColor: elementColor,
        boxShadow: active
          ? `0px 0px 2px 1px ${textColor}`
          : '0px 2px 4px 2px rgba(0, 0, 0, 0.08)',
      }}
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
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        value={searchKeywords}
        onChange={onTypeSearch}
      />
    </div>
  )
}

export default Search
