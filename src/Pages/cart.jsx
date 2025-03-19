import React, { useState, useEffect } from "react";

const CartPage = () => {
  const [cart, setCart] = useState({});
  const [totalItems, settotalItems] = useState(0);

  useEffect(() => {
    const fetchCart = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || {};
      setCart(storedCart);
    };
    fetchCart();
  }, []); // This runs only once when the component mounts

  useEffect(() => {
    // Recalculate total items whenever the cart changes
    settotalItems(
      Object.values(cart).reduce((sum, item) => sum + item.quantity, 0)
    );
  }, [cart]);

  const updateQuantity = (productId, change) => {
    const updatedCart = { ...cart };
    if (updatedCart[productId]) {
      updatedCart[productId].quantity += change;
      if (updatedCart[productId].quantity <= 0) {
        delete updatedCart[productId];
      }
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId) => {
    const updatedCart = { ...cart };
    delete updatedCart[productId];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalAmount = Object.values(cart).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <header className="flex justify-between py-8 px-4 bg-green-600">
        <div className="text-3xl font-bold text-white">Paradise Nursery</div>
        <h1 className="text-3xl  text-white">Plant</h1>
        <div className="relative inline-block">
          {/* Shopping Cart Icon */}
          <i
            className="fa fa-shopping-cart relative"
            style={{ fontSize: 30 }}
          ></i>

          {/* Badge (Cart Count) */}
          {Object.keys(cart).length > 0 && (
            <span className="absolute -top-3 -right-3 bg-red-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-sm">
              {totalItems}
            </span>
          )}
        </div>
      </header>
      <div className="p-6 ">
        <h1 className="text-3xl font-bold text-center">Cart</h1>
        <h2 className="text-xl text-center my-4">
          Total Cart Amount: ${totalAmount}
        </h2>
        <div className="flex flex-col items-center">
          {Object.values(cart).length > 0 ? (
            Object.values(cart).map((item) => (
              <div
                key={item.id}
                className=" p-4 bg-white shadow-lg w-fit my-2 flex gap-4 items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-44 h-44 object-cover rounded-lg"
                />
                <div className="pr-16">
                  <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
                  <p className="text-red-500 font-bold">${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-lg"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="mx-3">{item.quantity}</span>
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded-lg"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <h3 className="text-bold py-4">
                    Total: ${item.quantity * item.price}
                  </h3>
                  <button
                    className="bg-red-600 text-white px-4 py-2 mt-2 rounded-lg"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg">
            Continue Shopping
          </button>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
