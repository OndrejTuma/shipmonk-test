import React from 'react'
import cn from 'classnames'

import { ResponseError } from '@types/ResponseError'

type Props = {
  errors: ResponseError[]
}

const Errors = ({ errors }: Props) => {
  if (errors.length === 0) {
    return null
  }

  return (
    <div className={'bg-error p-4'}>
      <h2 className={'text-xl mb-3'}>Your request contains errors</h2>
      {errors.map(({level, message}, index) => (
        <p key={index} className={cn('p-3 rounded', {
          'bg-warning': level === 'warning',
          'bg-critical': level === 'critical'
        })}>{message}</p>
      ))}
    </div>
  )
}

export default Errors