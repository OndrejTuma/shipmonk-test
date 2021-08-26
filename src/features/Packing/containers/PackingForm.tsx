import React from 'react'
import { Formik, Form } from 'formik'
import { UseMutationResult } from 'react-query/types/react/types'

import Button from '@components/Button'

import formInitialValues from '../consts/formInitialValues'
import validationSchema from '../consts/validationSchema'

import Container from '../components/Container'
import Items from '../components/Items'

import { FormValues } from '@types/FormValues'

type Props = {
  mutation: UseMutationResult
}

const PackingForm = ({ mutation }: Props) => {
  const handleSubmit = (values: FormValues) => mutation.mutate(values)

  return (
    <Formik initialValues={formInitialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({values}) => (
        <Form>
          <div className={'grid grid-cols-2 mb-8'}>
            <Container bins={values.bins}/>
            <Items items={values.items}/>
          </div>
          <Button type={'submit'} disabled={mutation.isLoading}>Pack</Button>
        </Form>
      )}
    </Formik>
  )
}

export default PackingForm