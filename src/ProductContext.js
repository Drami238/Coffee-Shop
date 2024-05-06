import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      await refreshProducts();
    }
    getProducts();
  }, []);

  let baseUrl = "http://localhost:3001/products";

  function refreshProducts() {
    return axios
      .get(baseUrl)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }
  function getProducts(id) {
    return axios
      .get(`${baseUrl}/${id}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error(`Error fetching product with ID ${id}:`, error);
        return null;
      });
  }

  function addProduct(product) {
    return axios
      .post(baseUrl, product)
      .then((response) => {
        refreshProducts();
        return response.data;
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        return null;
      });
  }

  function updateProduct(product) {
    return axios
      .put(`${baseUrl}/${product.id}`, product)
      .then((response) => {
        refreshProducts();
        return response.data;
      })
      .catch((error) => {
        console.error(`Error updating product with ID ${product.id}:`, error);
        return null;
      });
  }

  function deleteProduct(id) {
    return axios
      .delete(`${baseUrl}/${id}`)
      .then(refreshProducts)
      .catch((error) => {
        console.error(`Error deleting product with ID ${id}:`, error);
      });
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        getProducts,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
