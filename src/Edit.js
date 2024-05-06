import { useState, useContext, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Col, Button, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "./ProductContext";

function Edit() {
  let { productId } = useParams();
  let [product, setProduct] = useState({
    id: productId,
    itemName: "",
    description: "",
    dairyFree: "",
    price: "",
    imageUrl: "",
  });

  let { getProducts, updateProduct, addProduct } = useContext(ProductContext);
  let navigate = useNavigate();
  let { id, itemName, description, price, imageUrl } = product;

  useEffect(() => {
    if (!id) return;
    async function fetchProduct() {
      const product = await getProducts(id);
      setProduct(product);
    }
    fetchProduct();
  }, [id, getProducts]);

  function handleChange(e) {
    setProduct((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function addOrUpdate() {
    if (!id) {
      return await addProduct(product);
    } else {
      return await updateProduct(product);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const updatedProduct = await addOrUpdate();
    navigate(`/products/${updatedProduct.id}`);
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

export default Edit;
