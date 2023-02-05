// eslint-disable-next-line import/no-extraneous-dependencies
import { FiChevronDown } from 'react-icons/fi'

function Filter() {
  return (
    <div className='ml-auto pl-8 bg-red-400 rounded shadow relative overflow-hidden'>
      <button
        type='button'
        className='absolute top-0 right-0 pointer-events-none h-full bg-purple-400'
      >
        <FiChevronDown />
      </button>
      <select
        name='select'
        className='text-veryDarkBlue font-semibold bg-blue-400 min-w-[100px] appearance-none h-full cursor-pointer pr-8'
      >
        <option value='value1' selected>
          Filter by Region
        </option>
        <option value='value2'>Value 2</option>
        <option value='value3'>Value 3</option>
      </select>
    </div>
  )
}

export default Filter
