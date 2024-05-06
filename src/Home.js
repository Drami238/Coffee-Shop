import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  FormControl,
  Button,
  Card,
} from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Logo from "./CODE_LOGO.png";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    const response = await fetch(
      `http://localhost:3001/products?q=${searchQuery}`
    );
    const data = await response.json();
    setSearchResults(data);
    navigate("/search-results");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="ms-4">
          <img
            src={Logo}
            width="100"
            className="d-inline-block align-top"
            alt="Company Logo"
          />
        </Navbar.Brand>
        <Container className="justify-content-end">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
            <Link to="/products" className="nav-link">
              Products
            </Link>
            <Link to="/create" className="nav-link">
              Create
            </Link>
          </Nav>
          <div className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-success" onClick={handleSearch}>
              Search
            </Button>
          </div>
        </Container>
      </Navbar>
      <Outlet />
      <Container>
        <div className="d-flex flex-wrap justify-content-center">
          {searchResults.map((result) => (
            <Card key={result.id} style={{ width: "18rem", margin: "1rem" }}>
              <Card.Body>
                <Card.Title>{result.itemName}</Card.Title>
                <Card.Text>{result.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container><br></br>
      <footer className="bg-dark text-light text-center py-4">
        <p>&copy; Code Coffee Roasters. Designed by David Ramirez</p>
      </footer>
    </>
  );
}

export default Home;
