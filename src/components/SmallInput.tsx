import Input from '@components/Input'
import React from 'react'

import type { Props } from '@components/Input'

const SmallInput = ({ name, inputProps, ...rest }: Props) => {
  return (
    <Input name={name} {...rest} inputProps={{
      ...inputProps,
      style: {
        width: 80,
      },
    }} />
  )
}

export default SmallInput