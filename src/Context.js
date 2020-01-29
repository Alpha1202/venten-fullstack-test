import React, { Component } from 'react';
import { fetchAll, fetchOne, addProduct } from './api/axios';

const ProductContext = React.createContext();

 class ProductProvider extends Component {
  state = {
  products: [],
  product: {},
  redirect: false,
  sortedProducts: [],
  loading: true,
  type: 'all',
  category: 1,
  price: 0,
  minPrice: 0,
  };

  async componentDidMount() {
    const products = await fetchAll();
    this.setState({
      products,
      loading: false
    })
  }
 
  getProduct = async(id) => {
    const product = await fetchOne(id);
    this.setState({product, loading: false})
  }

  addProduct = async(productData) => {
    this.setState({loading: true})
    const product = await addProduct(productData);
    this.setState({ product, loading: false, redirect: true})
  }

  render() {
    return (
      <ProductContext.Provider value={{...this.state, addProduct: this.addProduct, getProduct:this.getProduct}}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}


const ProductConsumer = ProductContext.Consumer;

// higher order component
export function withProductConsumer(Component){
  return function ConsumerWrapper(props) {
    return <ProductConsumer>
      {value => <Component {...props} context={value} />}
    </ProductConsumer>
  }
}

export{ ProductProvider, ProductConsumer, ProductContext };