import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams(); // Get product id from URL
  const { products } = useContext(ProductContext); // Get products from context
  const { addToCart } = useContext(CartContext); // Get addToCart from context

  // Find product by id
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details max-w-4xl mx-auto py-10 px-4 mt-20">
      <Link to="/shop" className="btn btn-back mb-4">
        Back to Shop
      </Link>

      <div className="product-details-grid grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="product-image">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="product-info">
          <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
          <p className="text-lg text-gray-600 mb-2">
            Category: {product.category}
          </p>
          <p className="text-2xl font-semibold text-green-600 mb-6">
            ${product.price}
          </p>
          <p className="text-md text-gray-700 mb-4">{product.description}</p>

          <button
            className="bg-primary text-white py-2 px-4 rounded-lg shadow-md hover:bg-primary-dark transition-colors duration-300"
            onClick={() => addToCart(product)} // Add to cart functionality
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
