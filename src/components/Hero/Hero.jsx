import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <motion.img
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="object-cover object-center rounded-3xl"
            alt="hero"
            src="https://i.pinimg.com/736x/36/26/46/362646d1dd581b63ab954e3580c9df7a.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              Discover the Art of Dosa
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="mb-8 leading-relaxed"
          >
            Indulge in the authentic flavors of South India with our wide variety of delicious dosas, each crafted to perfection and served with love.
          </motion.p>
          <div className="flex justify-center">
            <Link
              to="/menu"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg mr-4"
            >
              View Menu
            </Link>
            <Link
              to="/locations"
              className="inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
            >
              Our Locations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
