import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import React, { useState, useContext, useEffect } from "react";

function Details(props) {
  let { id } = useParams();
  let navigate = useNavigate();

  let { getProducts, deleteProduct } = useContext(ProductContext);
  let [product, setProducts] = useState([]);

  useEffect(() => {
    async function fetch() {
      const product = await getProducts(id);
      setProducts(product);
    }
    fetch();
  }, [id.getProducts]);

  function handleDeleteProduct(id) {
    deleteProduct(id);
    navigate("/products");
  }

  return (
    <Card className="w-25 d-flex justify-content-center align-items-center">
      <Card.Body>
        <Card.Img
          variant="top"
          src={process.env.PUBLIC_URL + "/" + product.imageUrl}
          alt={product.itemName}
        />
        <Card.Title>{product.itemName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {product.description}
        </Card.Subtitle>
        <Card.Text>
          <strong>Price:</strong> <span>${product.price}</span>
        </Card.Text>
        <Link to={`/products/${id}/edit`} className="btn btn-primary mx-3">
          Edit
        </Link>
        <Button variant="danger" onClick={handleDeleteProduct.bind(this, id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Details;
