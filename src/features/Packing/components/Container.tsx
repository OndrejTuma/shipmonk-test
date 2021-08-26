import React from 'react'
import { FieldArray } from 'formik'

import Button from '@components/Button'
import SmallInput from '@components/SmallInput'

import type {Bin} from 'types/Bin'

type Props = {
  bins: Bin[],
}

const Container = ({bins}: Props) => {
  return (
    <div>
      <h2 className={'font-semibold text-xl'}>Container</h2>
      <div>
        <FieldArray name={'bins'}>
          {({remove, push}) => (
            <div>
              {bins.map((bin, index) => (
                <div key={index} className={'flex space-x-4 mb-3'}>
                  <SmallInput name={`bins.${index}.id`} label={'Id'} />
                  <SmallInput name={`bins.${index}.w`} type={'number'} label={'Wdt'} />
                  <SmallInput name={`bins.${index}.h`} type={'number'} label={'Hgt'} />
                  <SmallInput name={`bins.${index}.d`} type={'number'} label={'Dpt'}/>
                  <SmallInput name={`bins.${index}.max_wg`} type={'number'} label={'Max. wgt.'} />
                  <Button className={'self-end'} onClick={() => remove(index)}>X</Button>
                </div>
              ))}
              <Button onClick={() => push({id: `Cont ${bins.length + 1}`})}>Add Container</Button>
            </div>
          )}
        </FieldArray>
      </div>
    </div>
  )
}

export default Container