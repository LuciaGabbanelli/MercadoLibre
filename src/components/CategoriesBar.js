import React, { useContext } from 'react'
// helpers
import renderCategories from '../helpers/searchResultHelper'
// contexts
import ItemsContext from '../context/Items/ItemsContext'

const CategoriesBar = () => {
  const { items } = useContext(ItemsContext)
  return <div className="categories_container">{renderCategories(items)}</div>
}

export default CategoriesBar
