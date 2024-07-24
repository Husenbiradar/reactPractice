import React from 'react';

function About() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            We are a team of passionate individuals committed to delivering high-quality solutions and exceptional service. Our mission is to provide innovative and effective solutions tailored to meet the unique needs of our clients.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="https://via.placeholder.com/500"
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600">
              Founded in 2020, we have been dedicated to transforming ideas into reality through our expertise in design, development, and project management. Our team of professionals works tirelessly to ensure the success of every project we undertake.
            </p>
            <p className="text-gray-600 mt-4">
              We value integrity, creativity, and excellence. Our client-centric approach ensures that we deliver results that exceed expectations. Join us on this journey, and let's create something extraordinary together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
