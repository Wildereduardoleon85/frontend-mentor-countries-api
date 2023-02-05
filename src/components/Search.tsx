import { SearchIcon } from './Icons'

function Search() {
  return (
    <div className='flex items-center bg-white dark:bg-darkBlue py-4 pr-4 rounded w-[450px] shadow'>
      <SearchIcon className='mx-5 text-xl text-darkGray' />
      <input
        className='w-full text-veryDarkBlue bg-transparent dark:text-white outline-none font-semibold'
        type='text'
        placeholder='Search for a country...'
      />
    </div>
  )
}

export default Search
