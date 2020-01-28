import React, { Component } from 'react';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {ProductContext} from '../Context';
import StyledHero from '../components/StyledHero';
import Loader from '../components/Loading';

export default class SingleProduct extends Component {

static contextType = ProductContext;

componentDidMount() {
const { getProduct  } = this.context;
const { id } = this.props.match.params;
getProduct(id)
}

render() {
    const { product, loading  } = this.context;

    if(loading){
        return <Loader />
    }

    if(!product) {
      return (
      <div className="error">
      <h3>product not found....</h3>
      <Link to="/" className="btn-primary">
        back to home
      </Link>
      </div>
      )
    }
    const {name,description,imageUrl,price,color} = product;
   
    return (
      <>
      <StyledHero img={imageUrl}>
        <Banner title={name}>
          <Link to='/' className="btn-primary">
            back to home
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-product">
        <div className="single-product-images">
           <img  src={imageUrl} alt={name} />
        </div>
        <div className="single-product-info">
          <article className="desc">
            <h3>Description</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: ${price}</h6>
            <h6>color: {color}</h6>
          </article>
        </div>
      </section>
      </>
    )
  }
}
