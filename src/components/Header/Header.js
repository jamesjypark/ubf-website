import { Navbar, Nav, Container } from "react-bootstrap";

import logo from "../../res/logo/ubf_logo_white.png";

const navOptions = ["About", "News", "Contact Us"];

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav>
          <Navbar.Brand href="/">
            <img
              src={logo}
              height="30"
              className="d-inline-block align-top"
              alt="UBF logo"
            />
          </Navbar.Brand>

          {navOptions.map((option) => (
            <Nav.Link href={`/${option}`}>{option}</Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
