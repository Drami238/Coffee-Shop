import React, { useContext, useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { ProductContext } from "./ProductContext";
import MainPics from "./pexels-ali-kawa-karar-490615-3047675.jpg";

function ListProducts(props) {
  let params = useParams();
  let navigate = useNavigate();
  const { products, getProducts, deleteProduct } = useContext(ProductContext);
  let [product, setProducts] = useState([]);
  const limitedProducts = products.slice(0, 3);

  useEffect(() => {
    async function fetch() {
      await getProducts(params.productId).then((product) =>
        setProducts(product)
      );
    }

    fetch();
  }, [params.productId]);

  function handleDeleteProduct(id) {
    deleteProduct(id);
    navigate("/products");
  }

  function homeProductCard() {
    return (
      <>
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{ height: "180vh" }}
        >
          <img src={MainPics} alt="Main Picture" className="img-fluid" />
        </Container>{" "}
        <br></br>
        <br></br>
        <Container className="mt-5">
          <h2
            className="d-flex justify-content-center align-items-center"
            style={{ borderBottom: "4px solid black", paddingBottom: "15px" }}
          >
            Popular Picks
          </h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {limitedProducts.map((product) => (
              <div key={product.id} className="col">
                <Card>
                  <Card.Img
                    variant="top"
                    src={process.env.PUBLIC_URL + "/" + product.imageUrl}
                    alt={product.itemName}
                  />
                  <Card.Body>
                    <Card.Title>{product.itemName}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>
                      <strong>Price:</strong> <span>${product.price}</span>
                    </Card.Text>
                    <Link
                      to={`/products/${product.id}`}
                      key={product.id}
                      className="btn btn-primary mx-3"
                    >
                      View Details
                    </Link>
                    <Link
                      to={`/products/${product.id}/edit`}
                      className="btn btn-primary mx-3"
                    >
                      Edit
                    </Link>
                    <Button
                      variant="danger"
                      onClick={handleDeleteProduct.bind(this, product.id)}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </>
    );
  }
  return homeProductCard();
}

export default ListProducts;
