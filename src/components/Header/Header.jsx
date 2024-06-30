import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <div><header className="text-gray-600 body-font shadow-2xl">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       <img src="https://cdn-icons-png.flaticon.com/512/1491/1491819.png" alt="" className='h-8' />
        <span className="ml-3 text-xl">TRIDENT</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-gray-900">Home</a>
        <a className="mr-5 hover:text-gray-900">About Us</a>
        {/* <a className="mr-5 hover:text-gray-900"></a>
        <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
      </nav>
      <button className="inline-flex items-center bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-900 text-white rounded-lg text-base mt-4 md:mt-0">Cart: <span className='font-bold text-red-600'> {cart.length}</span>
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header></div>
  )
}

export default Header