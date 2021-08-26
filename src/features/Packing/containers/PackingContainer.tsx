import React from 'react'
import { useMutation } from 'react-query'

import pack from '@features/Packing/queries/pack'

import ResultContainer from '@features/Packing/components/result/ResultContainer'
import PackingForm from '@features/Packing/containers/PackingForm'

const PackingContainer = () => {
  const mutation = useMutation(pack)

  return (
    <div>
      <PackingForm mutation={mutation} />
      <ResultContainer mutation={mutation} />
    </div>
  )
}

export default PackingContainer