// eslint-disable-next-line import/no-extraneous-dependencies
import { FiChevronDown } from 'react-icons/fi'

function Filter() {
  return (
    <button
      type='button'
      className='ml-auto bg-white dark:bg-darkBlue rounded shadow flex items-center p-4'
    >
      <span>Filter By Region...</span>
      <FiChevronDown />
    </button>
  )
}

export default Filter
