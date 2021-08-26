import React from 'react'

import { NotPackedItem } from '@types/NotPackedItem'

type Props = {
  items: NotPackedItem[],
}

const NotPackedItems = ({ items }: Props) => {
  return (
    <div className={'p-3 bg-warning'}>
      <strong>Items that have not been packed</strong>
      <ul>
        {items.map(({ id, q }) => (
          <li key={id}>
            <strong>ID:</strong> {id} <strong>Quantity:</strong> {q}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NotPackedItems