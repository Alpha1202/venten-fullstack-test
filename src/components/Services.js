import React, { Component } from 'react';
import {FaAmericanSignLanguageInterpreting, FaAddressCard, FaShuttleVan, FaShoppingCart} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
  state = {
    services: 
    [
      {
      icon: <FaAmericanSignLanguageInterpreting />,
      title: "Sweetest Discounts",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ipsa."
    },
      {
      icon: <FaAddressCard />,
      title: "Fastest Payment",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ipsa."
    },
      {
      icon: <FaShuttleVan />,
      title: "Free Delivery",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ipsa."
    },
      {
      icon: <FaShoppingCart />,
      title: "Smooth Shopping",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ipsa."
    }
  ]
  }
  render() {
    return (
      <section className="services">
       <Title title='services' />
       <div className="services-center">
        {this.state.services.map((item, index) => {
      return (
      <article key={index} className="service">
      <span>{item.icon}</span>
      <h6>{item.title}</h6>
      <p>{item.info}</p>
      </article> 
);
        })}
       </div>
      </section>
    )
  }
}
 