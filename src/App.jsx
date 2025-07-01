import { useEffect, useState } from 'react'
import { Navbar, Hero, Products, TopProducts, Banner, Subscribe, Testimonials, Footer, Popup } from './components'
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className='min-h-screen overflow-hidden'>
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