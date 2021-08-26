import React from 'react'
import { UseMutationResult } from 'react-query/types/react/types'

import Errors from '@features/Packing/components/result/Errors'
import Loader from '@features/Packing/components/result/Loader'
import PackedBin from '@features/Packing/components/result/PackedBin'

type Props = {
  mutation: UseMutationResult,
}

const ResultContainer = ({ mutation }: Props) => {
  if (mutation.isLoading) {
    return <Loader/>
  }

  if (!mutation.data || !mutation.data.data) {
    return null
  }

  const {data: {data: {bins_packed, errors}}} = mutation

  return (
    <div className={'my-10'}>
      <Errors errors={errors} />
      {bins_packed.map((bin, index) => (
        <PackedBin key={bin.id} bin={bin} index={index} />
      ))}
    </div>
  )
}

export default ResultContainer