import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { useTheme } from '../../hooks'
import { Button, ClickAwayWrapper } from '../Ui'
import styles from './Filter.module.css'

function Filter() {
  const { elementColor } = useTheme()
  const [isActive, setIsActive] = useState<boolean>(false)

  const regions = ['America', 'Africa', 'Europa', 'Asia', 'Ocenia']

  return (
    <ClickAwayWrapper onClickAway={() => setIsActive(false)}>
      <Button
        className={styles.filterButton}
        onClick={() => setIsActive(!isActive)}
      >
        <span>Filter By Region...</span>
        <FiChevronDown />
      </Button>
      {isActive && (
        <ul
          style={{ backgroundColor: elementColor }}
          className={styles.dropdown}
        >
          {regions.map((region) => (
            <li key={region}>
              <Button
                className={styles.buttonItem}
                onClick={() => setIsActive(false)}
              >
                {region}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </ClickAwayWrapper>
  )
}

export default Filter
