import React from 'react';

function Services() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600">
            We offer a range of high-quality services to meet your needs. Explore what we have to offer below.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Service One</h2>
            <p className="text-gray-600">
              Description of the first service. Explain the benefits and features of this service.
            </p>
          </div>
          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Service Two</h2>
            <p className="text-gray-600">
              Description of the second service. Explain what makes this service unique and valuable.
            </p>
          </div>
          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:w-1/3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Service Three</h2>
            <p className="text-gray-600">
              Description of the third service. Highlight the key features and benefits of this offering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
