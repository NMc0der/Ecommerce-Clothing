import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Services from "./pages/Services";
import About from "./pages/About";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";
import ShopContextProvider from "./components/ShopContext";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <ShopContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
        <Footer />
      </ShopContextProvider>
    </>
  );
}

export default App;
