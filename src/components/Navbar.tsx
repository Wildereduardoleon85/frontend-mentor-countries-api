import { MoonIcon } from './Icons'

function Navbar() {
  function toggleDarkMode() {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className='bg-white h-20 shadow dark:bg-darkBlue'>
      <nav className='max-w-screen-lg mx-auto h-full flex items-center px-4 lg:px-0'>
        <h1 className='font-extrabold text-2xl'>Where in the world?</h1>
        <div className='ml-auto flex items-center'>
          <button
            className='flex items-center'
            type='button'
            onClick={toggleDarkMode}
          >
            <MoonIcon className='text-lg fill-white stroke-black stroke-1 dark:stroke-0' />
            <p className='ml-1.5 font-semibold'>Dark Mode</p>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
