import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-style text-white">
      <Container fluid style={{ "max-width": 1200 }}>
        <Navbar.Brand href="#" className="text-white">
          <h4 className="mb-0">VIDI CENI </h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-white">
              Computers
            </Nav.Link>
            <Nav.Link href="#action1" className="text-white">
              Laptops
            </Nav.Link>
            <Nav.Link href="#action1" className="text-white">
              Phones
            </Nav.Link>
            <Nav.Link href="#action2" className="text-white">
              Sales
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav.Link href="#action2" className="text-white ms-3">
            Cart
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
