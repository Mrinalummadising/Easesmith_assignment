import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProductListingPage from "./pages/ProductListingPage";
import ThankYouPage from "./pages/ThankYouPage";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { useState } from "react";

function App() {
  const [cartQuantity, setCartQuantity] = useState(0); 

  const updateCartQuantity = (quantity) => {
    setCartQuantity((prevQuantity) => prevQuantity + quantity);
  };

  return (
    <Router>
      <Header cartQuantity={cartQuantity} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/shop"
          element={
            <ProductListingPage updateCartQuantity={updateCartQuantity} />
          }
        />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
