import { useContext, useState } from 'react'
import regions from '../../constants/regions'
import { CountriesContext } from '../../context'
import { useTheme } from '../../hooks'
import { Region, RegionSelected } from '../../types'
import { ChevronDown } from '../Icons'
import { Button, ClickAwayWrapper } from '../Ui'
import styles from './Filter.module.css'

function Filter() {
  const {
    state: { regionSelected, searchKeywords },
    setRegionSelected,
    setSearchKeywords,
    setCurrentPage,
  } = useContext(CountriesContext)
  const { elementColor } = useTheme()
  const [isActive, setIsActive] = useState<boolean>(false)

  function onSelectedRegion(region: RegionSelected): void {
    setIsActive(false)

    if (regionSelected !== region) {
      setCurrentPage(1)
    }

    if (searchKeywords) {
      setSearchKeywords('')
    }

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
          <li>
            <Button
              className={styles.buttonItem}
              onClick={() => onSelectedRegion('')}
            >
              All
            </Button>
          </li>
          {regions.map((region: Region) => (
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
