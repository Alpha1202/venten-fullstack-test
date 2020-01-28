import React, { Component } from 'react';
import { ProductContext } from '../Context';
import Loading from './Loading';
import Product from './Product';
import Title from './Title'


export default class Products extends Component {
  static contextType = ProductContext
  render() {
     let { loading, products} = this.context;
    products = products.map(product => {
      return <Product key={product.id} product={product} />
    })  
    return (
      <section className="featured-products">
        <Title title="Our Products" />
      <div className="featured-products-center">
        {loading ? <Loading /> : products}
      </div>
  
       
      </section>
    )
  }
}
