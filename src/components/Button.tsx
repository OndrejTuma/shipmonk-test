import React, { MouseEventHandler, ReactChildren } from 'react'
import cn from 'classnames'

type Props = {
  children: ReactChildren | string,
  className?: string,
  disabled?: boolean,
  type?: 'button' | 'submit' | 'reset',
  onClick?: MouseEventHandler,
}

const Button = ({ children, className, disabled = false, type = 'button', onClick }: Props) => {
  return (
    <button onClick={onClick} type={type} disabled={disabled} className={cn(className, 'uppercase text-white font-semibold rounded', {
      'px-4 py-2 bg-gray': type !== 'submit',
      'px-6 py-4 bg-yellow': type === 'submit',
    })}>{children}</button>
  )
}

export default Button