import React from 'react';

function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <header className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <nav className="flex justify-between items-center mb-4">
          <a href="#" className="text-lg font-bold text-gray-800">Logo</a>
          <ul className="flex justify-between items-center">
            <li className="mr-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <section className="bg-white rounded shadow-md p-4 mb-4">
          <h1 className="text-3xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
        </section>

        <section className="bg-white rounded shadow-md p-4 mb-4">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-none mb-4">
            <li className="flex items-center mb-4">
              <i className="fas fa-lock text-gray-600 mr-4"></i>
              <span className="text-gray-600">Secure</span>
            </li>
            <li className="flex items-center mb-4">
              <i className="fas fa-rocket text-gray-600 mr-4"></i>
              <span className="text-gray-600">Fast</span>
            </li>
            <li className="flex items-center mb-4">
              <i className="fas fa-cog text-gray-600 mr-4"></i>
              <span className="text-gray-600">Customizable</span>
            </li>
          </ul>
        </section>
      </main>

      <footer className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <p className="text-gray-600 mb-4">Copyright 2023 Our Website</p>
      </footer>
    </div>
  );
}

export default Home;