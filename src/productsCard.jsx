import React from 'react'
import { Link } from 'react-router-dom'
const ProductsCard = ({product}) => {
  
  return (
    <div className='one-product'>
      <img src={product.image} alt="" />
      <div className="details">
        <h6><Link to={`/products/${product.id}`} >Title: {product.title}</Link></h6>
        <h6>Category: {product.category}</h6>
        <span>Price: Ksh.{product.price}</span>
      </div>
    </div>
  )
}

export default ProductsCard