import { Navbar, Hero, Products, TopProducts, Banner, Subscribe, Testimonials, Footer } from './components'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App