import { useState, useContext, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Col, Button, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "./ProductContext";

function Create() {
  let params = useParams();
  let [product, setProduct] = useState({
    id: params.productId,
    itemName: "",
    description: "",
    dairyFree: "",
    price: "",
  });

  let { getProducts, updateProduct, addProduct } = useContext(ProductContext);
  let navigate = useNavigate();
  let { id, itemName, description, price, imageUrl } = product;

  useEffect(() => {
    if (id === undefined) return;
    async function fetch() {
      await getProducts(id).then((product) => setProduct(product));
    }
    fetch();
  }, [id]);

  function handleChange(e) {
    setProduct((preValue) => {
      return { ...preValue, [e.target.name]: e.target.value };
    });
  }

  function addOrUpdate() {
    if (id === undefined) {
      return addProduct(product);
    } else {
      return updateProduct(product);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    addOrUpdate().then((product) => navigate(`/products/${product.id}`));
  }
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={9}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="itemName"
                value={itemName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                value={price}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="imageUrl"
                value={imageUrl}
                onChange={handleChange}
              />
            </Form.Group>
            <Button type="submit">Save</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default Create;
