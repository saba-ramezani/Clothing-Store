import { useState } from 'react'
import { Navbar, Hero, Products, TopProducts, Banner, Subscribe, Testimonials, Footer, Popup } from './components'

const App = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className=''>
      <Navbar setIsVisible={setIsVisible}/>
      <Hero setIsVisible={setIsVisible} />
      <Products />
      <TopProducts setIsVisible={setIsVisible} />
      <Banner />
      <Testimonials />
      <Subscribe />
      <Footer />
      <Popup isVisible={isVisible} setIsVisible={setIsVisible} />
    </div>
  )
}

export default App