import React from 'react'
import Image from 'next/image'

import Dimensions from '@features/Packing/components/result/Dimensions'
import Info from '@features/Packing/components/result/Info'
import NotPackedItems from '@features/Packing/components/result/NotPackedItems'
import Visualization from '@features/Packing/components/result/Visualization'

import { ResponseData } from '@types/ResponseData'

type Props = {
  bin: ResponseData,
  index: number,
}

const PackedBin = ({ bin, index }: Props) => {
  const {image_complete: imgSrc, bin_data: container, items, not_packed_items} = bin

  const packedItems = items.length - not_packed_items.length

  return (
    <div>
      <h3 className={'text-xl text-yellow mb-4'}>Container #{index + 1}</h3>
      <div className={'flex space-x-12'}>
        <div>
          <h4 className={'text-lg font-semibold'}>Container ID: {container.id}</h4>
          <Image src={imgSrc} width={200} height={150}/>
        </div>
        <Dimensions container={container}/>
        <Info container={container} packedItems={packedItems} />
      </div>
      {not_packed_items.length > 0 && <NotPackedItems items={not_packed_items} />}
      <Visualization items={items} />
    </div>
  )
}

export default PackedBin