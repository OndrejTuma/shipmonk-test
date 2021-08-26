import React from 'react'

import Skeleton from '@components/Skeleton'

const Loader = () => {
  return (
    <div className={'my-10'}>
      <Skeleton className={'mb-4'} style={{height: 36, width: '30%'}} />
      <Skeleton className={'mb-2'} style={{height: 20, width: '15%'}} />
      <Skeleton style={{width: 200, height: 150}} />
    </div>
  )
}

export default Loader