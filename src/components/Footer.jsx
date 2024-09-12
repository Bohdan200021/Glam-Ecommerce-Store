import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="bg-tertiary py-12">
      <div className="max-padd-container mx-auto text-white rounded-xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link to={'/'} className="bold-24 mb-4">
              <h3>
                Glam <span className="text-secondary">Store</span>
              </h3>
            </Link>
            <p className="text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              repellat nisi facere rem quo culpa ex! Odio voluptatibus
              praesentium veniam.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="bold-20 mb-4">Quick Links</h4>
            <ul className="space-y-2 reqular-15 text-gray-30">
              <li>
                <Link to={'/'} className="hover:text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link to={'/categories'} className="hover:text-secondary">
                  Categories
                </Link>
              </li>
              <li>
                <Link to={'/shop'} className="hover:text-secondary">
                  Shop
                </Link>
              </li>
              <li>
                <Link to={'/contact'} className="hover:text-secondary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="bold-20 mb-4">E-commerce</h4>
            <ul className="space-y-2 reqular-15 text-gray-30">
              <li>
                <Link to={'/terms'} className="hover:text-secondary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to={'/privacy'} className="hover:text-secondary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to={'/shopping'} className="hover:text-secondary">
                  Shopping Policy
                </Link>
              </li>
              <li>
                <Link to={'/returns'} className="hover:text-secondary">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="bold-20 mb-4">Contact Us</h4>
            <p>
              Email: {''}
              <a
                href="mailto:bogdan.bigun2000@gmail.com"
                className="hover:text-secondary"
              >
                bogdan.bigun2000@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
