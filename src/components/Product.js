import React from 'react';
import {Link} from 'react-router-dom';


export default function Product({product}) {
  const {id, name, price, imageUrl} = product;

  return (
    <article className="product">
    <div className="img-container">
    <img src={imageUrl}
     alt="single product" />
     <div className="price-top">
       <h6>${price}</h6>
     </div>
     <Link to={`/product/${id}`}
      className="btn-primary product-link">
        Details
    </Link>
    </div>
    <p className="product-info">{name}</p>
    </article>
  )
}

