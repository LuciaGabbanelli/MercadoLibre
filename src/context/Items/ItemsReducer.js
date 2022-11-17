import { GET_ITEMSLIST, GET_ITEMDETAILS } from '../types'

const ItemsReducer = (state, action) => {
  const { payload, type } = action

  switch (type) {
    case GET_ITEMSLIST:
      return {
        ...state,
        items: payload,
      }
    case GET_ITEMDETAILS:
      return {
        ...state,
        selectedItem: payload,
      }
    default:
      return state
  }
}

export default ItemsReducer
