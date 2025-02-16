import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Featues from './components/Featues'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className='max-w-7xl mx-auto pt-20 px-6'>
      <Hero/>
      </div>
      <Featues/>
      <Workflow/>
      <Pricing/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App
