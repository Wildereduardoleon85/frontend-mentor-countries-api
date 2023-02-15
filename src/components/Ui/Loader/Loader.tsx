import { useTheme } from '../../../hooks'
import styles from './Loader.module.css'

function Loader() {
  const { textColor } = useTheme()

  return (
    <div className={styles.ldsRipple}>
      <div style={{ border: `4px solid ${textColor}` }} />
      <div style={{ border: `4px solid ${textColor}` }} />
    </div>
  )
}

export default Loader
