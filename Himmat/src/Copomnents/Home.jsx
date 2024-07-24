import React from 'react';

function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Website</h1>
        <p className="text-lg text-gray-600">
          We are excited to have you here! Our website offers a variety of services and information tailored to your needs.
        </p>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Explore Our Features</h2>
        <p className="text-gray-500 mb-6">
          Discover the best features and benefits we offer. Whether you're looking for something specific or just browsing, we're here to help you find what you need.
        </p>
        <a
          href="#features"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Home;
