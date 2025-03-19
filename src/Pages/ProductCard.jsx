import React, { useState, useEffect } from "react";

const ProductCard = ({ product, cart, addToCart, removeFromCart }) => {
  return (
    <div className="border rounded-2xl bg-white shadow-lg p-4 w-64 text-center relative">
      {product.onSale && (
        <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
          SALE
        </span>
      )}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-red-500 font-bold">${product.price}</p>
      <p className="text-gray-500 text-sm italic">{product.description}</p>
      {cart[product.id] ? (
        <div className="flex items-center justify-center mt-2">
          <button
            className="bg-gray-500 text-white px-4 py-2 mt-2 rounded-lg hover:bg-green-800"
            onClick={() => removeFromCart(product.id)}
          >
            Added to Cart
          </button>
        </div>
      ) : (
        <button
          className="bg-green-500 text-white px-4 py-2 mt-2 rounded-lg hover:bg-green-600"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

const ProductList = ({ products, cart, addToCart, removeFromCart }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
