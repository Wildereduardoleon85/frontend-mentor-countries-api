import { MouseEvent, ReactNode } from 'react'
import { useTheme } from '../../../hooks'
import styles from './Button.module.css'

type BaseButtonProps = {
  style?: Object
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  className?: string
  disabled?: boolean
}

interface ButtonElementProps extends BaseButtonProps {
  type: 'button'
}

interface ButtonComponentProps extends BaseButtonProps {
  children?: ReactNode
}

function Button({
  onClick,
  className,
  children,
  style,
  disabled,
}: ButtonComponentProps) {
  const { isDarkMode } = useTheme()

  const suppliedClass = className || ''
  const darkModeClass = isDarkMode ? styles.dark : ''

  const props: ButtonElementProps = {
    type: 'button',
    className: [styles.button, darkModeClass, suppliedClass].join(' ').trim(),
  }

  if (onClick) {
    props.onClick = onClick
  }

  if (style) {
    props.style = style
  }

  if (disabled) {
    props.disabled = disabled
  }

  // eslint-disable-next-line react/jsx-props-no-spreading, react/button-has-type
  return <button {...props}>{children}</button>
}

export default Button
