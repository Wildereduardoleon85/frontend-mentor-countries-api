import { useState } from 'react'
import { useTheme } from '../../hooks'
import { ChevronDown } from '../Icons'
import { Button, ClickAwayWrapper } from '../Ui'
import styles from './Filter.module.css'

function Filter() {
  const { elementColor } = useTheme()
  const [isActive, setIsActive] = useState<boolean>(false)
  const [regionSelected, setRegionSelected] = useState<string>('')

  const regions = ['America', 'Africa', 'Europa', 'Asia', 'Ocenia']

  function onSelectedRegion(region: string): void {
    setIsActive(false)
    setRegionSelected(region)
  }

  return (
    <ClickAwayWrapper onClickAway={() => setIsActive(false)}>
      <Button
        className={styles.filterButton}
        onClick={() => setIsActive(!isActive)}
      >
        <span>{regionSelected || 'Filter By Region...'}</span>
        <ChevronDown
          className={`${styles.chevronIcon} ${isActive ? styles.spin : ''}`}
        />
      </Button>
      {isActive && (
        <ul
          style={{ backgroundColor: elementColor }}
          className={styles.dropdown}
        >
          {regions.map((region: string) => (
            <li key={region}>
              <Button
                className={styles.buttonItem}
                onClick={() => onSelectedRegion(region)}
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
