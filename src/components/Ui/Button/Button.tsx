import { MouseEvent, ReactNode } from 'react'
import { useTheme } from '../../../hooks'
import styles from './Button.module.css'

type BaseButtonProps = {
  style?: Object
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  className?: string
  disabled?: boolean
  ['aria-label']?: string
}

interface ButtonElementProps extends BaseButtonProps {
  type: 'button'
}

interface ButtonComponentProps extends BaseButtonProps {
  children?: ReactNode
  ariaLabel?: string
}

function Button({
  onClick,
  className,
  children,
  style,
  disabled,
  ariaLabel,
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

  if (ariaLabel) {
    props['aria-label'] = ariaLabel
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading, react/button-has-type
    <button {...props}>{children}</button>
  )
}

export default Button
