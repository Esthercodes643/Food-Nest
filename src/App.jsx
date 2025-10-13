import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import AppStore from './components/AppStore/AppStore'
import Testimonial from './components/Testimonial/Testimonial'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero /> 
      <Services />  
      <Banner />     
      <AppStore />
      <Testimonial />
    </div>
  )
}

export default App