import { IconProps } from '../../types'

function ArrowLeft({ className = '', style = {} }: IconProps) {
  return (
    <svg
      className={className}
      style={style}
      stroke='currentColor'
      fill='none'
      strokeWidth='0'
      viewBox='0 0 24 24'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M7 16l-4-4m0 0l4-4m-4 4h18'
      />
    </svg>
  )
}

export default ArrowLeft
