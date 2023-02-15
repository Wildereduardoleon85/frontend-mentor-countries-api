import { useNavigate } from 'react-router-dom'
import { useCountries } from '../../hooks'
import { Button } from '../Ui'
import styles from './CountryBorders.module.css'

type CountryBordersProps = {
  borders: string[]
}

function CountryBorders({ borders }: CountryBordersProps) {
  const { isLoading, countryNamesByCode } = useCountries()
  const navigate = useNavigate()

  return (
    <div className={styles.borders}>
      <p>Border Countries: </p>
      <div className={styles.buttons}>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          borders.map((code) => (
            <Button key={code} onClick={() => navigate(`/${code}`)}>
              {countryNamesByCode[code]}
            </Button>
          ))
        )}
      </div>
    </div>
  )
}

export default CountryBorders
