import React, { useReducer } from 'react'
import ItemsReducer from './ItemsReducer'
import ItemsContext from './ItemsContext'
import { getItem, getList } from '../../services/items'

const ItemsState = (props) => {
  const initialState = {
    items: [],
    selectedItem: null,
  }

  const [state, dispatch] = useReducer(ItemsReducer, initialState)

  const getItemsList = async (query) => {
    try {
      const response = await getList(query)
      dispatch({
        type: 'GET_ITEMSLIST',
        payload: response,
      })
    } catch (error) {
      throw error
    }
  }

  const getItemDetails = async (id) => {
    try {
      const response = await getItem(id)
      dispatch({
        type: 'GET_ITEMDETAILS',
        payload: response,
      })
    } catch (error) {
      throw error
    }
  }

  // crear un contexto que provea el estado y las funciones a los componentes que estén envueltos
  return (
    <ItemsContext.Provider
      value={{
        items: state.items,
        selectedItem: state.selectedItem,
        getItemsList,
        getItemDetails,
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  )
}

export default ItemsState
