import { useNavigate } from 'react-router-dom'
import { Button } from '../Ui'
import styles from './CountryBorders.module.css'

type CountryBordersProps = {
  borders: string[]
  countryNamesByCode: {
    [key: string]: string
  }
}

function CountryBorders({ borders, countryNamesByCode }: CountryBordersProps) {
  const navigate = useNavigate()

  return borders.length ? (
    <div className={styles.borders}>
      <p>Border Countries: </p>
      <div className={styles.buttons}>
        {borders.map((code) => (
          <Button key={code} onClick={() => navigate(`/${code}`)}>
            {countryNamesByCode[code]}
          </Button>
        ))}
      </div>
    </div>
  ) : null
}

export default CountryBorders
