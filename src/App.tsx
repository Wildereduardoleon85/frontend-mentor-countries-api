import { useEffect } from 'react'
import { Layout } from './components'

function App() {
  useEffect(() => {
    document
      .querySelector('body')
      ?.setAttribute(
        'class',
        'bg-veryLightGray dark:bg-veryDarkBlue text-veryDarkBlue dark:text-white'
      )
  }, [])

  return <Layout />
}

export default App
