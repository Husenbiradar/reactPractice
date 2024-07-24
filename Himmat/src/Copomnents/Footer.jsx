import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <div>
            <h4 className="text-lg font-bold mb-2">Navigation</h4>
            <ul>
              <li><Link to="" className="hover:text-white">Home</Link></li>
              <li><Link to="about" className="hover:text-white">About</Link></li>
              <li><Link to="services" className="hover:text-white">Services</Link></li>
              <li><Link to="contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2">Contact</h4>
            <p>Email: <a href="mailto:example@example.com" className="hover:text-white">example@example.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="hover:text-white">+123 456 7890</a></p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-white" aria-label="Facebook">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2h-2a6 6 0 00-6 6v2H7v4h3v10h4V12h3l1-4h-4V8a2 2 0 012-2h2v2z"></path>
                </svg>
              </a>
              <a href="https://twitter.com" className="hover:text-white" aria-label="Twitter">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 4.01a10.05 10.05 0 01-2.828.775 4.992 4.992 0 002.168-2.752 9.94 9.94 0 01-3.175 1.215A4.975 4.975 0 0015.5 3a5.07 5.07 0 00-5.075 5.074c0 .398.046.787.12 1.164A14.308 14.308 0 013 4.716a5.07 5.07 0 001.574 6.73A4.974 4.974 0 012 10.7v.06a5.074 5.074 0 004.075 4.968 4.977 4.977 0 01-2.268.086 5.078 5.078 0 004.742 3.513A10.048 10.048 0 012 21a14.202 14.202 0 007.665 2.25c9.3 0 14.411-7.748 14.411-14.451 0-.22-.004-.438-.013-.656A10.35 10.35 0 0022 4.01z"></path>
                </svg>
              </a>
              <a href="https://instagram.com" className="hover:text-white" aria-label="Instagram">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a2 2 0 100-4 2 2 0 000 4zm-4.714-1.714a5.5 5.5 0 11-7.072 7.072A5.5 5.5 0 017.286 6.286zm8.927 2.57a2 2 0 11-2.828 2.828 2 2 0 012.828-2.828zM12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2zm0 18a8 8 0 01-8-8 8 8 0 018-8 8 8 0 018 8 8 8 0 01-8 8z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
