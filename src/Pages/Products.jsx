import React, { useState, useEffect } from "react";
import ProductList from "./productcards";

export const Products = () => {
  const [cart, setCart] = useState({});
  console.log(cart);
  useEffect(() => {
    const fetchCart = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || {};
      setCart(storedCart);
    };

    fetchCart();
  }, []);

  const addToCart = (product) => {
    const updatedCart = { ...cart };
    if (updatedCart[product.id]) {
      updatedCart[product.id].quantity += 1;
    } else {
      updatedCart[product.id] = { ...product, quantity: 1 };
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId) => {
    const updatedCart = { ...cart };

    if (updatedCart[productId]) {
      // Ensure product exists before modifying
      if (updatedCart[productId].quantity > 1) {
        updatedCart[productId].quantity -= 1;
      } else {
        delete updatedCart[productId];
      }
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const products = [
    {
      id: 1,
      name: "Snake Plant",
      price: 15,
      description: "Removes toxins and produces oxygen at night.",
      image:
        "https://images.squarespace-cdn.com/content/v1/54fbb611e4b0d7c1e151d22a/1607997169020-HUYXENEIG9YVWUUQT7UN/Snake+Plant.jpg",
      onSale: true,
    },
    {
      id: 2,
      name: "Aloe Vera",
      price: 12,
      description: "Filters air pollutants and has medicinal properties.",
      image:
        "https://zarat.kp.gov.pk/assets/uploads/panel/18e6508b80e57af04a291dc0254838a9.jpg",
      onSale: false,
    },
    {
      id: 3,
      name: "Peace Lily",
      price: 18,
      description: "Absorbs harmful VOCs and improves air quality.",
      image:
        "https://cdn11.bigcommerce.com/s-fr32feerow/product_images/uploaded_images/peace-lily-01.jpg",
      onSale: true,
    },
    {
      id: 4,
      name: "Spider Plant",
      price: 10,
      description: "Effective in removing carbon monoxide and toxins.",
      image:
        "https://www.thespruce.com/thmb/50OWCj6xCUgqY6mQJ5PujTAGiw4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/spider-plants-chlorophytum-definition-1902773-01b-b3f60dce30a64c399d52b5538417cc7d.jpg",
      onSale: false,
    },
    {
      id: 5,
      name: "Areca Palm",
      price: 20,
      description: "Adds humidity and purifies indoor air.",
      image:
        "https://zarat.kp.gov.pk/assets/uploads/panel/18e6508b80e57af04a291dc0254838a9.jpg",
      onSale: true,
    },
    {
      id: 6,
      name: "Boston Fern",
      price: 14,
      description: "Removes toxins and increases humidity levels.",
      image:
        "https://zarat.kp.gov.pk/assets/uploads/panel/18e6508b80e57af04a291dc0254838a9.jpg",
      onSale: false,
    },
  ];
  const aromatic = [
    {
      id: 1,
      name: "Lavender",
      price: 18,
      description:
        "Known for its calming fragrance and essential oil properties.",
      image: "https://m.media-amazon.com/images/I/81Dx-N9e5WL._AC_SL1500_.jpg",
      onSale: true,
    },
    {
      id: 2,
      name: "Jasmine",
      price: 22,
      description:
        "Produces a sweet, rich fragrance, especially in the evening.",
      image: "https://m.media-amazon.com/images/I/71ofHLORuHL._AC_SL1500_.jpg",
      onSale: false,
    },
    {
      id: 3,
      name: "Rosemary",
      price: 15,
      description: "Has a strong herbal aroma and is widely used in cooking.",
      image: "https://m.media-amazon.com/images/I/71t9A4ExL+L._AC_SL1500_.jpg",
      onSale: true,
    },
    {
      id: 4,
      name: "Gardenia",
      price: 25,
      description:
        "Produces creamy white flowers with an intense floral scent.",
      image: "https://m.media-amazon.com/images/I/71fhqZqTWGL._AC_SL1500_.jpg",
      onSale: false,
    },
    {
      id: 5,
      name: "Mint",
      price: 10,
      description:
        "Refreshing and invigorating scent, perfect for teas and cooking.",
      image: "https://m.media-amazon.com/images/I/81mUcTiVbdL._AC_SL1500_.jpg",
      onSale: true,
    },
    {
      id: 6,
      name: "Eucalyptus",
      price: 20,
      description: "Known for its strong, fresh aroma that clears the airways.",
      image: "https://m.media-amazon.com/images/I/71Mkx7MLjjL._AC_SL1500_.jpg",
      onSale: false,
    },
  ];

  return (
    <>
      <header className="flex justify-between py-8 px-4 bg-green-600">
        <div className="text-3xl font-bold text-white">Paradise Nursery</div>
        <h1 className="text-3xl  text-white">Plant</h1>
        <div className="relative inline-block">
          {/* Shopping Cart Icon */}
          <a href="/cart">
            {" "}
            <i
              className="fa fa-shopping-cart relative"
              style={{ fontSize: 30 }}
            ></i>
            {/* Badge (Cart Count) */}
            {Object.keys(cart).length > 0 && (
              <span className="absolute -top-3 -right-3 bg-red-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-sm">
                {Object.keys(cart).length}
              </span>
            )}
          </a>
        </div>
      </header>
      <div className="flex flex-col  py-8">
        <h1 className="w-fit  self-center px-16 border-t-2 border-b-2 border-gray-700 my-8 text-5xl py-4">
          Air Purifying Plant
        </h1>
        <div className="w-[60%] m-auto">
          <ProductList
            products={products}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </div>
      </div>
      <div className="flex flex-col  py-8">
        <h1 className="w-fit  self-center px-16 border-t-2 border-b-2 border-gray-700 my-8 text-5xl py-4">
          Aromtiv Fragment plant
        </h1>
        <div className="w-[60%] m-auto">
          <ProductList
            products={aromatic}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </div>
      </div>
    </>
  );
};
