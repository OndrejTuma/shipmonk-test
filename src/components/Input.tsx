import React from 'react'
import { ErrorMessage, Field } from 'formik'

export type Props = {
  label?: string,
  name: string,
  type?: string,
  inputProps?: {},
}

const Input = ({ label, name, type = 'text', inputProps }: Props) => {
  return (
    <div>
      <label htmlFor={name} className={'block mb-2'}>{label}</label>
      <Field type={type} id={name} name={name} className={'border border-gray rounded-sm p-2'} {...inputProps} />
      <ErrorMessage name={name} component="div" className={'text-error'} />
    </div>
  )
}

export default Input