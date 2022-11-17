import React from 'react'
import Item from './Item'

const ItemsList = ({ data }) => {
  const renderItem = () =>
    data.items?.map((e, key) => <Item data={e} key={key} />)

  return <div>{renderItem()}</div>
}

export default ItemsList
