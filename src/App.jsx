import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header'
import Home from './modules/Home/Home'
import Footer from './components/Footer/Footer'
import Menu from './components/Menu/Menu'
import Locations from './components/Menu/Locations'
import Product from './modules/Product/Product'
// import  CartProvider from './CartContext'
import { CartProvider } from './CartContext';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <CartProvider> */}
     <CartProvider>
      <Header />
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
      <Footer />
      </CartProvider>
      {/* </CartProvider> */}
    </>
  )
}

export default App
