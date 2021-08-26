import React from 'react'
import Image from 'next/image'

import { ResponseItem } from '@types/ResponseItem'

type Props = {
  items: ResponseItem[],
}

const Visualization = ({ items }: Props) => {
  return (
    <div>
      <h3 className={'text-xl'}>Packing visualization</h3>
      <p className={'text-lg'}><strong>Images showing single items in container</strong></p>
      <div className={'grid-cols-6 gap-4 my-4'}>
        {items.map(({id, image_separated: src}) => (
          <Image src={src} key={id} width={200} height={150} className={'p-3'} />
        ))}
      </div>
    </div>
  )
}

export default Visualization