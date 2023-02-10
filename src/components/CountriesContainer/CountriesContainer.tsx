import countries from '../../data/countries.json'
import { useTheme } from '../../hooks'
import styles from './CountriesContainer.module.css'

function CountriesContainer() {
  const { elementColor } = useTheme()

  function getCountriesData(countriesData: Array<any>) {
    return countriesData.map((countryData) => ({
      name: countryData.name,
      nativeName: countryData.nativeName,
      population: countryData.population,
      region: countryData.region,
      subregion: countryData.subregion,
      capital: countryData.capital,
      topLevelDomain: countryData.topLevelDomain,
      currencies: countryData.currencies,
      languages: countryData.languages,
      borders: countryData.borders,
      flagImage: countryData.flags.png,
    }))
  }

  //   const arr: any = []

  //   getCountriesData(countries).forEach((country) => {
  //     if (country.name.toLowerCase().includes('bra')) {
  //       arr.push(country)
  //     }
  //   })

  //   const itemsPerPage = 8
  //   const length = 250

  //   function getBegNadEnd(page: number, len: number) {
  //     const totalOfPages = Math.floor(length / itemsPerPage)

  //     if (page > totalOfPages + 1) {
  //       return null
  //     }

  //     if (page === 1) {
  //       return {
  //         beg: 0,
  //         end: itemsPerPage * page,
  //       }
  //     }

  //     return {
  //       beg: itemsPerPage * (page - 1),
  //       end: page > totalOfPages ? len : itemsPerPage * page,
  //     }
  //   }

  //   w 240
  //   h 147

  console.log(getCountriesData(countries))

  return (
    <div className={styles.container}>
      {getCountriesData(countries)
        .slice(100, 108)
        .map((country) => (
          <div
            key={country.name}
            style={{ backgroundColor: elementColor }}
            className={styles.countryCard}
          >
            <img
              className={styles.flag}
              src={country.flagImage}
              alt={`${country.name} flag`}
              width={290}
              height={178}
            />
            <div className={styles.details}>
              <p className={styles.countryName}>{country.name}</p>
              <p className={styles.key}>
                Population:{' '}
                <span className={styles.value}>{country.population}</span>
              </p>
              <p className={styles.key}>
                Region: <span className={styles.value}>{country.region}</span>
              </p>
              <p className={styles.key}>
                Capital: <span className={styles.value}>{country.capital}</span>
              </p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default CountriesContainer
