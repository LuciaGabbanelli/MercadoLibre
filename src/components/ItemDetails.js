import React from 'react'
// img
import img from '../assets/ic_shipping.png'
// helpers
import formatNumber from '../helpers/formatNumberHelper'

const ItemDetails = ({ data }) => {
  return (
    <div className="itemDetails_container">

      <div className="itemDetails_col1">

        <div className="itemDetails_row1">
          <img
            className="itemDetails_img"
            alt="Imagen del producto"
            src={data?.picture}
          />
        </div>

        <div className="itemDetails_row2">
          <p className="itemDetails_title">Descripción del Producto</p>
          <p className="itemDetails_description">{data?.description}</p>
        </div>

      </div>

      <div className="itemDetails_col2">

        <p className="itemDetails_condition">{`${data?.condition} - ${data?.sold_quantity} vendidos`}</p>
        <p className="itemDetails_title">{data?.title}</p>
        <div className="itemDetails_price">
          <p>{data && formatNumber(data)}</p>
          {data?.free_shipping ? (
            <img alt="ícono envío gratis" src={img} className="itemDetails_logo" />
          ) : null}
        </div>
        <button className="button_buy">Comprar</button>

      </div>

    </div>
  )
}

export default ItemDetails
