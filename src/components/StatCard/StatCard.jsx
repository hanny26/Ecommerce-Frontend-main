import React from 'react';

const StatCard = () => {
  return (
    <div>
      <section className="text-gray-600 body-font shadow-2xl">
        <div className="container px-5 py-24 mx-auto hover:shadow-2xl">
          <div className="flex flex-col text-center w-full mb-20 rounded-3xl hover:shadow-2xl">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Dosa Delight: Taste the Tradition</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Indulge in the authentic flavors of South India with our wide variety of delicious dosas, each crafted to perfection and served with love.</p>
          </div>
          <div className="flex flex-wrap -m-4 text-center hover:shadow-2xl">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-3xl">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-green-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M4 12h16M4 12c0 1.38.56 2.63 1.46 3.54A5 5 0 0012 19c2.76 0 5-2.24 5-5s-2.24-5-5-5a5 5 0 00-4.54 2.54A5.001 5.001 0 004 12zm0 0a5.001 5.001 0 01-.95-2.95 5 5 0 011.91-3.91 5 5 0 013.64-1.14A5 5 0 0112 7"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">5K</h2>
                <p className="leading-relaxed">Dosas Served</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full rounded-3xl">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-3xl">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-green-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8 8 3.58 8 8zm-1.5 0a6.5 6.5 0 01-13 0 6.5 6.5 0 0113 0zm-2.5 0a4.5 4.5 0 01-9 0 4.5 4.5 0 019 0z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">2K</h2>
                <p className="leading-relaxed">Happy Customers</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-3xl">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-green-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M3 7h18M3 12h18M3 17h18M3 7a3 3 0 000 5.82M3 7a3 3 0 100 5.82M21 7a3 3 0 010 5.82M21 7a3 3 0 110 5.82M3 7a3 3 0 011-2.5M3 12a3 3 0 100 2.5M21 7a3 3 0 01-1-2.5M21 12a3 3 0 110 2.5"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">150</h2>
                <p className="leading-relaxed">Varieties of Dosa</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-3xl">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-green-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M9 21V3a1 1 0 011.5-.87L19.29 9a1 1 0 01.71.87v12a1 1 0 01-1.5.87L10.5 15.13A1 1 0 019 14.26V21a1 1 0 01-1.5.87l-5.5-3.33a1 1 0 01-.5-.87V9a1 1 0 01.5-.87l5.5-3.33A1 1 0 019 5.74v6.26a1 1 0 01-.5.87L3 14.26V19l6 3.64V21z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">25</h2>
                <p className="leading-relaxed">Locations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StatCard;
