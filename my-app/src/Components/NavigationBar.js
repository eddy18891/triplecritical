import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import RafaIcon from "../Img/Logo.png"

function NavigationBar() {
  return (
    <Navbar expand="lg" variant="dark" fixed='top' style={{background:"linear-gradient(to top, hsla(0, 0%, 0%, 1) 0%, hsla(0, 0%, 13%, 1) 100%)"}}>
      <Container>
          <img
            src={RafaIcon}
            width="75vw"
            height="75vw"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            style={{marginLeft:0, marginRight: "5vh"}}
          />
        <Navbar.Brand href="#home">Triple Critical</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About us</Nav.Link>
            <Nav.Link href="#projects">Games</Nav.Link>
            <Nav.Link href="#contact">Media</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;