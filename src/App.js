import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import ListProducts from "./ListProducts";
import Create from "./Create";
import Details from "./Details";
import Edit from "./Edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<ListProducts />} />
          <Route path="/products/:productId/edit" element={<Edit />} />
          <Route path="/products" element={<Products />} />
          <Route path="/create" element={<Create />} />
          <Route path="/products/:id" element={<Details />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
