import { Navbar, Hero, Products } from './components'
import TopProducts from './components/TopProducts/TopProducts'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero />
      <Products />
      <TopProducts />
    </div>
  )
}

export default App