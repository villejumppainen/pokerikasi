import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router'

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="sm">
      <Container>
        <Navbar.Brand as={NavLink} to="/">♠ Pokerikäsi</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav>
            <Nav.Link as={NavLink} to="/" end>Pelaa</Nav.Link>
            <Nav.Link as={NavLink} to="/kadet">Käsien arvojärjestys</Nav.Link>
            <Nav.Link as={NavLink} to="/historia">Historia</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar