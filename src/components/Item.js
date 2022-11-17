import React from 'react'
// react router (v6)
import { Link } from 'react-router-dom'
// img
import img from '../assets/ic_shipping.png'
// helpers
import formatNumber from '../helpers/formatNumberHelper'


const Item = ({ data }) => {
  return (
    <div className="item_container">
      <div className="item_col1">
        <div className="item_imgContainer">
          <Link to={`/items/${data?.id}`} className="item_link">
            <img
              className="item_productImg"
              src={data?.picture}
              alt="Imagen del producto"
            />
          </Link>
        </div>
      </div>
      <div className="item_col2">
        <div className="item_row">
          <p className="item_price">{formatNumber(data)}</p>
          {data?.free_shipping ? (
            <img alt="ícono envío gratis" src={img} className="item_img" />
          ) : null}
        </div>
        <p className="item_title">{data?.title}</p>
      </div>
      <div className="item_col3">
        <p className="item_location">{data?.address}</p>
      </div>
    </div>
  )
}

export default Item
