import React from 'react'

import Card from '../../components/Card/Card'
import products from '../../data/products'

import './Product.css'

const Product = () => {
  return (
    <div className="product">
      {products.map((items, index) => (
        <div
          className="card-contain"
          key={index}
        >
          <Card
            to={items.to}
            text={items.type}
          />
        </div>
      ))}
    </div>
  )
}

export default Product
