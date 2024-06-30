import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './ProductCard.css';
import { CartContext } from '../../CartContext';

const dosaImages = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2L1SV_-lgANjcLhXujNSFYf_tsZpp3Gkc9Q&s', // Replace with actual dosa image URLs
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzWz175gJ1EsxlB6SWm2XDwT6gYltcZVNiQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIDXfhi8_PsFFdHG3US15s13FW_-BorE3hAQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5BEV91QzGsbN70YnoaehHAfIkk05LVRDsA&s',
  'https://static.toiimg.com/photo/65164556.cms?imgsize=123210',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs6RN0DLN-0AeJFgsi34219hL3rmk-TZRZzA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkisFay9W14sY9l7Bc6KXdP4xZPFphL-dTfg&s',
  'https://b.zmtcdn.com/data/pictures/chains/7/18683377/dde58e78e6aad0f86ad69419fdd0576b.jpg',
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const fetchedProducts = response.data.slice(0, dosaImages.length).map((product, index) => ({
          ...product,
          image: dosaImages[index],
        }));
        setProducts(fetchedProducts);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading products</p>;

  return (
    <section className="text-gray-600 body-font pt-10  ">
    <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-60 bg-yellow-300 p-4 rounded-2xl'>
  <h1 className='text-4xl flex justify-center font-bold font-serif text-green-600 hover:text-orange-500 transition-colors duration-300 transform hover:scale-105'>
    Ek Dosa To Banta Hai Boss!
  </h1>
</div>

      <div className="container px-5 py-14 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="block relative h-48 rounded-2xl overflow-hidden product-card transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={product.image}
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                <p className="mt-1">${product.price}</p>
                <button 
                  className="mt-2  text-black ring-2 ring-lime-700 px-4 py-2 rounded-3xl hover:shadow-2xl hover:bg-green-400"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}hi
        </div>
      </div>
    </section>
  );
};

export default Products;
