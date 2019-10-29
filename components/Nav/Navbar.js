import { Navbar, NavDropdown, Form, Nav, FormControl, Button } from 'react-bootstrap'

const NavbarB = () => (
  <React.Fragment>
    <Navbar bg="dark"  expand="lg">
      <Navbar.Brand  id="navbarclass" href="/">Zenika Academy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" id="menuburgeryo"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="navbarbuttonplease" href="#home">Home</Nav.Link>
          <NavDropdown className="navbarbuttonplease" title="Ma Formation" id="basic-nav-dropdown">
            <NavDropdown.Item href="/ma_formation/Agenda/agenda">Agenda</NavDropdown.Item>
            <NavDropdown.Item href="/ma_formation/ContactUtiles/contact_utiles">contact_utiles</NavDropdown.Item>
            <NavDropdown.Item href="/ma_formation/LivretAccueil/livret_accueil">Livret d'accueil</NavDropdown.Item>
            <NavDropdown.Item href="/ma_formation/Slack/slack">Slack</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className="navbarbuttonplease" title="Communauté" id="basic-nav-dropdown">
            <NavDropdown.Item href="/communaute/Ressources/agenda">Ressources</NavDropdown.Item>
            <NavDropdown.Item href="/communaute/Rss/rss">Rss</NavDropdown.Item>
            <NavDropdown.Item href="/communaute/WhoToFollow/who_to_follow">Who To Follow</NavDropdown.Item>
          </NavDropdown>
          
          <Nav.Link id="navbarbutton" href="#link">Profil</Nav.Link>
          <Nav.Link id="navbarbutton" href="/index_connecte">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <style type="text/css">
      {`
  .bg-all {
    color: red;
  }
  `}
    </style></React.Fragment>
)

export default NavbarB
