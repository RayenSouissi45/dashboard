import React from 'react';
import product1Image from '../pictures/products/product1.png';
import product2Image from '../pictures/products/product2.png';
import product3Image from '../pictures/products/product3.png';

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 1110.99,
      description: 'This is the description for product 1',
      image: product1Image,
      availability: true,
      quantity: 5
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99,
      description: 'This is the description for product 2',
      image: product2Image,
      availability: false,
      quantity: 0
    },
    {
      id: 3,
      name: 'Product 3',
      price: 7.99,
      description: 'This is the description for product 3',
      image: product3Image,
      availability: true,
      quantity: 10
    }
  ];

  return (
    <div className="product-page">
      <div className="flex flex-row space-x-10 bg-gray-200 my-2 p-2">
        <div className="w-[100px]">
          <p className="font-bold">Product Image</p>
        </div>
        <div className="w-[160px]">
          <p className="font-bold">Product Name</p>
        </div>
        <div className="w-[65px]">
          <p className="font-bold">Price</p>
        </div>
        <div className="w-[290px]">
          <p className="font-bold">Description</p>
        </div>
        <div className="w-[100px]">
          <p className="font-bold">Availability</p>
        </div>
        <div className="w-[50px]">
          <p className="font-bold">Quantity</p>
        </div>
      </div>
      {products.map((product) => (
        <div key={product.id} className="flex flex-row space-x-10 bg-gray-100 my-2 p-2">
          <div className="w-[100px]">
            <img src={product.image} alt={product.name} className="w-[100px]" />
          </div>
          <div className="w-[160px] flex items-center">
            <p className="text-center">{product.name}</p>
          </div>
          <div className="w-[65px] flex items-center">
            <p className="text-center">${product.price}</p>
          </div>
          <div className="w-[290px] flex items-center">
            <p className="text-center">{product.description}</p>
          </div>
          <div className="w-[100px] flex items-center">
            <p className="text-center">
              {product.availability ? 'In Stock' : 'Out of Stock'}
            </p>
          </div>
          <div className="w-[50px] flex items-center">
            <p className="text-center">{product.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
