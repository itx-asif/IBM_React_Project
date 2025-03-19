import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products } from "./Pages/Products.jsx";
import CartPage from "./Pages/cart.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  </BrowserRouter>
);
