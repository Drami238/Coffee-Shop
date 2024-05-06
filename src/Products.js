import React, { useContext, useState } from "react";
import {
  Col,
  Button,
  Container,
  Row,
  ButtonGroup,
  Dropdown,
} from "react-bootstrap";
import { Card } from "react-bootstrap";
import { ProductContext } from "./ProductContext";
import { Link } from "react-router-dom";

const Products = () => {
  const { products, deleteProduct } = useContext(ProductContext);
  const [sortOption, setSortOption] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [priceFilter, setPriceFilter] = useState("all");

  const handleSortBy = (option) => {
    if (option === sortOption) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortOption(option);
      setSortOrder("asc");
    }
  };
  const handlePriceFilter = (range) => {
    setPriceFilter(range);
  };

  function sortedProducts() {
    let sorted = [...products];
    if (sortOption === "name") {
      sorted.sort((a, b) =>
        sortOrder === "asc"
          ? a.itemName.localeCompare(b.itemName)
          : b.itemName.localeCompare(a.itemName)
      );
    } else if (sortOption === "price") {
      sorted.sort((a, b) =>
        sortOrder === "asc" ? a.price - b.price : b.price - a.price
      );
    }
    return sorted.filter((product) => {
      if (priceFilter === "all") {
        return true;
      } else if (priceFilter === "0-2") {
        return product.price >= 0 && product.price <= 2;
      } else if (priceFilter === "2-4") {
        return product.price >= 2 && product.price <= 4;
      } else if (priceFilter === "4-more") {
        return product.price > 4;
      }
      return true;
    });
  }

  function handleDelete(id) {
    deleteProduct(id);
  }

  return (
    <Container>
      <Row className="mb-3 mt-3">
        <Col xs={6}>
          <ButtonGroup>
            <Button 
              variant="primary"
              onClick={() => handleSortBy("name")}
              className={sortOption === "name" ? "active" : ""}
            >
              Sort by Name{" "}
              {sortOption === "name" && (sortOrder === "asc" ? "▲" : "▼")}
            </Button>
            <Button
              variant="primary"
              onClick={() => handleSortBy("price")}
              className={sortOption === "price" ? "active" : ""}
            >
              Sort by Price{" "}
              {sortOption === "price" && (sortOrder === "asc" ? "▲" : "▼")}
            </Button>
          </ButtonGroup>
        </Col>
        <Col xs={6} className="text-end">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Price Range
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handlePriceFilter("all")}>
                All
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handlePriceFilter("0-2")}>
                $0 - $2
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handlePriceFilter("2-4")}>
                $2 - $4
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handlePriceFilter("4-more")}>
                $4 or more
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        {sortedProducts().map((product) => (
          <Col key={product.id} xs={12} md={6} lg={1} xl={4}>
            <Card style={{ margin: "1rem" }}>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "/" + product.imageUrl}
              />
              <Card.Body>
                <Card.Title>{product.itemName}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-primary mx-1"
                >
                  View Details
                </Link>
                <Link
                  to={`/products/${product.id}/edit`}
                  className="btn btn-primary mx-1"
                >
                  Edit
                </Link>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
