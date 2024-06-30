import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Discover the Delight of Dosa
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Experience the authentic taste of South India with our variety of dosas, perfectly crafted to satisfy your taste buds.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-green-500 inline-flex"></div>
          </div>
        </motion.div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <motion.div 
            className="p-4 md:w-1/3 flex flex-col text-center items-center"
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
            <img src="https://png.pngtree.com/png-vector/20230921/ourmid/pngtree-masala-dosa-with-sambhar-illustration-south-india-favorite-food-png-image_10143263.png" alt=""  className='h-10 w-10'/>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Crispy Masala Dosa</h2>
              <p className="leading-relaxed text-base">A delightful combination of crispy dosa and spicy masala filling, perfect for any meal.</p>
              <a className="mt-3 text-green-500 inline-flex items-center">
                Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="p-4 md:w-1/3 flex flex-col text-center items-center"
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
            <img src="https://png.pngtree.com/png-vector/20240131/ourmid/pngtree-masala-dosa-unique-served-illustration-indian-traditional-food-with-sambhar-png-image_11522720.png" alt=""  className='h-8 w-10'/>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Classic Plain Dosa</h2>
              <p className="leading-relaxed text-base">Savor the simplicity of a classic plain dosa, served with fresh coconut chutney and sambar.</p>
              <a className="mt-3 text-green-500 inline-flex items-center">
                Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="p-4 md:w-1/3 flex flex-col text-center items-center"
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ6CMjKMJnZfhxNL8_wWEVr5Mm6YLtFRVZmQ&s" alt=""  className='h-8 w-10'/>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Cheese Dosa</h2>
              <p className="leading-relaxed text-base">A fusion of South Indian dosa with a cheesy twist, perfect for cheese lovers.</p>
              <a className="mt-3 text-green-500 inline-flex items-center">
                Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
        <motion.button 
          className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Order Now
        </motion.button>
      </div>
    </section>
  );
};

export default FeatureCard;
