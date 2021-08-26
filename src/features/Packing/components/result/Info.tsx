import React from 'react'

import { ResponseBin } from '@types/ResponseBin'

type Props = {
  container: ResponseBin,
  packedItems: number
}

const Info = ({container, packedItems}: Props) => {
  return (
    <div>
      <table>
        <tbody>
        <tr className={'border-b'}>
          <th>Packed items:</th>
          <td>{Math.max(0, packedItems)}</td>
        </tr>
        <tr className={'border-b'}>
          <th>Space taken:</th>
          <td>{container.used_space}%</td>
        </tr>
        <tr className={'border-b'}>
          <th>Weight taken:</th>
          <td>{container.used_weight}%</td>
        </tr>
        <tr className={'border-b'}>
          <th>Packing time:</th>
          <td></td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Info