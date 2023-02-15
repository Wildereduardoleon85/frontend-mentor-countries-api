/* eslint-disable @typescript-eslint/indent */
/* eslint-disable react/jsx-indent */
import { useNavigate } from 'react-router-dom'
import { useCountries, useTheme } from '../../hooks'
import { Button } from '../Ui'
import styles from './CountryBorders.module.css'

type CountryBordersProps = {
  borders: string[]
}

function CountryBorders({ borders }: CountryBordersProps) {
  const { isDarkMode } = useTheme()
  const { countryNamesByCode, isLoading } = useCountries()
  const navigate = useNavigate()

  return borders.length ? (
    <div className={styles.borders}>
      <p>Border Countries: </p>
      <div className={styles.buttons}>
        {isLoading
          ? [1, 2, 3].map((item) => (
              <Button
                key={item}
                className={`${styles.skeletonButton} ${
                  isDarkMode ? styles.dark : ''
                }`}
              />
            ))
          : borders.map((code) => (
              <Button key={code} onClick={() => navigate(`/${code}`)}>
                {countryNamesByCode[code]}
              </Button>
            ))}
      </div>
    </div>
  ) : null
}

export default CountryBorders
