import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {
      name: '',
      email: '',
      message: '',
    };

    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    if (!formData.message) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Message was successfully sent!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We would love to hear from you! Please fill out the form below to get in touch.
          </p>
        </div>
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your Name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your Email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your Message"
                rows="4"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
