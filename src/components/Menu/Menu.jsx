import React from 'react';

const Menu = () => {
  const dosaItems = [
    {
      id: 1,
      title: 'Plain Dosa',
      category: 'Classic',
      price: '$8.99',
      image: 'https://dummyimage.com/600x400',
    },
    {
      id: 2,
      title: 'Masala Dosa',
      category: 'Specialty',
      price: '$10.99',
      image: 'https://dummyimage.com/601x401',
    },
    {
      id: 3,
      title: 'Onion Rava Dosa',
      category: 'Chef\'s Special',
      price: '$12.99',
      image: 'https://dummyimage.com/602x402',
    },
    {
      id: 4,
      title: 'Mysore Masala Dosa',
      category: 'Spicy',
      price: '$11.99',
      image: 'https://dummyimage.com/603x403',
    },
    {
      id: 5,
      title: 'Paneer Dosa',
      category: 'Vegetarian',
      price: '$13.99',
      image: 'https://dummyimage.com/604x404',
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {dosaItems.map((item) => (
            <div key={item.id} className="lg:w-1/3 md:w-1/2 p-4">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-3xl overflow-hidden text-center relative shadow-md hover:shadow-xl transition duration-300">
                <img
                  alt="dosa"
                  className="w-full h-40 object-cover object-center mb-6 rounded-2xl"
                  src={item.image}
                />
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{item.category}</h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{item.title}</h1>
                <p className="leading-relaxed mb-3">Price: {item.price}</p>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
