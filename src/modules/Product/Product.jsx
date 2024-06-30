import React, { useState, useContext } from 'react';
import { CartContext } from '../../CartContext';

const Product = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const { addToCart } = useContext(CartContext);

  const product = {
    id: 1,
    title: 'Masala Dhosa',
    price: 10.00,
    description: 'Delicious South Indian dhosa with traditional masala filling, served hot with chutney and sambar.',
    image: 'https://www.shutterstock.com/image-photo/butter-dosa-sambar-chutney-food-600nw-2363660807.jpg',
    category: 'South Indian Cuisine',
    toppings: 'Potato Masala, Onion, Tomato',
    beverages: 'Filter Coffee, Masala Chai',
    masala: 'Spiced potato filling with traditional spices',
  };

  const handleFavoriteToggle = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
          <div className="lg:w-1/2 w-full lg:h-auto h-64 rounded-lg overflow-hidden relative">
            <img
              alt="dhosa"
              className="object-cover object-center h-full w-full rounded-3xl"
              src={product.image}
            />
            <button
              onClick={handleFavoriteToggle}
              className={`absolute top-4 right-4 p-2 rounded-full bg-white shadow-md ${isFavorited ? 'text-red-500' : 'text-gray-400'}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isFavorited ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.909 19.444l1.939-11.59L12 4.15l4.152 3.704 1.939 11.59H5.909z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4l-1.363 2.727M9.818 10.909L12 8l2.182 2.909M6.545 15.818L12 20l5.455-4.182"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4 animate__animated animate__fadeIn">
              {product.title}
            </h1>
            <p className="leading-relaxed mb-4 animate__animated animate__fadeInUp">
              {product.description}
            </p>
            <div className="flex items-center mb-6 animate__animated animate__fadeInUp">
              <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
              <button
                onClick={() => addToCart(product)}
                className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded transition duration-300"
              >
                Add to Cart
              </button>
            </div>
            <div className="flex flex-col animate__animated animate__fadeInUp">
              <div className="flex items-center mb-3">
                <span className="text-gray-500 font-medium mr-2">Toppings:</span>
                <span>{product.toppings}</span>
              </div>
              <div className="flex items-center mb-3">
                <span className="text-gray-500 font-medium mr-2">Additional Beverages:</span>
                <span>{product.beverages}</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 font-medium mr-2">Masala:</span>
                <span>{product.masala}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
