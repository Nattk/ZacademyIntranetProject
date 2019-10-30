import { Navbar, NavDropdown, Nav, FormControl, Button } from 'react-bootstrap'

const NavbarUnconnected = () => (
  <Navbar bg="dark" id="navbarbody" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" id="menuburgeryo"/>
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" id="bonjourjesuisflex">
        <Nav.Link className="navbarbuttonplease" href="/index_connecte">Accueil</Nav.Link>
        <NavDropdown className="navbarbuttonplease" title="Ma Formation" id="basic-nav-dropdown">
          <NavDropdown.Item href="/ma_formation/Agenda/agenda">Agenda</NavDropdown.Item>
          <NavDropdown.Item href="/ma_formation/ContactUtiles/contact_utiles">contact_utiles</NavDropdown.Item>
          <NavDropdown.Item href="/ma_formation/LivretAccueil/livret_accueil">Livret d'accueil</NavDropdown.Item>
          <NavDropdown.Item href="/ma_formation/Slack/slack">Slack</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown className="navbarbuttonplease" title="Communauté" id="basic-nav-dropdown">
          <NavDropdown.Item href="/communaute/Rss/rss">Rss</NavDropdown.Item>
          <NavDropdown.Item href="/communaute/WhoToFollow/who_to_follow">Who To Follow</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown className="navbarbuttonplease" title="Ressources" id="basic-nav-dropdown">
          <NavDropdown.Item href="/communaute/Ressources/ressources_formateur">Ressources Formateur</NavDropdown.Item>
          <NavDropdown.Item href="/communaute/Ressources/ressources_eleve">Ressources Eleves</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link id="navbarbutton" href="/utilisateur/MonProfil/mon_profil">Profil</Nav.Link>
        <Nav.Link id="navbarbutton" href="/admin/Accueil/accueil" >ADMIN</Nav.Link>
        <Nav.Link id="navbarbutton" href="/" >Logout</Nav.Link>
        </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default NavbarUnconnected
