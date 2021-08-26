import { FieldArray } from 'formik'
import React from 'react'

import Button from '@components/Button'
import Input from '@components/Input'
import SmallInput from '@components/SmallInput'

import formItemDefaults from '../consts/formItemDefaults'

import type {Item} from '@types/Item'

type Props = {
  items: Item[],
}

const Items = ({items}: Props) => {
  return (
    <div>
      <h2 className={'font-semibold text-xl'}>Items</h2>
      <FieldArray name={'items'}>
        {({remove, push}) => (
          <div>
            {items.map((item, index) => (
              <div key={index} className={'flex space-x-4 mb-3'}>
                <SmallInput name={`items.${index}.id`} label={'Id'} inputProps={{ required: true }} />
                <SmallInput name={`items.${index}.w`} type={'number'} label={'Wdt'} inputProps={{ min: 0 }} />
                <SmallInput name={`items.${index}.h`} type={'number'} label={'Hgt'} inputProps={{ min: 0 }} />
                <SmallInput name={`items.${index}.d`} type={'number'} label={'Dpt'} inputProps={{ min: 0 }} />
                <SmallInput name={`items.${index}.wg`} type={'number'} label={'Wgt'} inputProps={{ min: 0 }} />
                <SmallInput name={`items.${index}.q`} type={'number'} label={'Qty'} inputProps={{ min: 0 }} />
                <Input name={`items.${index}.vr`} type={'checkbox'} label={'VR'} />
                <Button className={'self-end'} onClick={() => remove(index)}>X</Button>
              </div>
            ))}
            <Button onClick={() => push({
              ...formItemDefaults,
              id: `Item ${items.length + 1}`,
            })}>Add Item</Button>
          </div>
        )}
      </FieldArray>
    </div>
  )
}

export default Items