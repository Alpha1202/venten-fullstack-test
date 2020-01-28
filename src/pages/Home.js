import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import Products from '../components/Products';

export default function Home() {
  return (
    <>
    <Hero>
      <Banner 
      title="Venten Shop" 
      subtitle="High Quality Products at the cheapest rate">
      </Banner>
    </Hero>
    <Services />
    <Products />
</>
  )
}
