import { useEffect, useState } from 'react'

function useMediaQuery() {
  const [windowSize, setWindowSize] = useState([window.innerWidth])
  const isMediumScreen = windowSize[0] <= 768
  const isSmallScreen = windowSize[0] <= 640
  const isExtraSmallScreen = windowSize[0] <= 480

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth])
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })

  return {
    isMediumScreen,
    isSmallScreen,
    isExtraSmallScreen,
  }
}

export default useMediaQuery
