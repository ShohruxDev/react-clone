import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ setProducts, cart, setCart }) => {
  return (
    <>
      <Header setProducts={setProducts} cart={cart} setCart={setCart} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
