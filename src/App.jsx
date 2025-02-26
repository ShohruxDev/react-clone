import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Zakaz from "./Components/Zakaza";
import HomePage from "./Pages/HomePage";
import ProductDetail from "./Pages/ProductDetail";
import News from "./Pages/NewsPage";
import Newss from "./Pages/Korzinka";
import Layout from "./Components/Layout";
import api from "./api";
import NewsProvider from "./context/newsContext";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    api.get().then((res) => setProducts(res.data.products));
  }, []);

  return (
    <NewsProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Layout setProducts={setProducts} cart={cart} setCart={setCart} />}
          >
            <Route index element={<HomePage products={products} cart={cart} setCart={setCart} />} />
            <Route path="news" element={<News />} />
            <Route path="zakaz" element={<Zakaz />} />
            <Route path="product/:productId" element={<ProductDetail />} />
          </Route>
        </Routes>
      </Router>
    </NewsProvider>
  );
};

export default App;

