import React from 'react'

import { ResponseBin } from '@types/ResponseBin'

type Props = {
  container: ResponseBin,
}

const Dimensions = ({ container }: Props) => {
  return (
    <div>
      <h4 className={'text-lg font-semibold'}>Dimensions:</h4>
      <table>
        <tbody>
        <tr>
          <td>Width:</td>
          <td>{container.w}</td>
        </tr>
        <tr>
          <td>Height:</td>
          <td>{container.h}</td>
        </tr>
        <tr>
          <td>Depth:</td>
          <td>{container.d}</td>
        </tr>
        <tr>
          <td>Max. wgt.:</td>
          <td>{container.weight}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Dimensions