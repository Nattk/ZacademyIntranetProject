import { Navbar, NavDropdown, Nav, FormControl, Button } from 'react-bootstrap'

const AdminNav = () => (
  <Navbar bg="dark" id="navbarbody" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" id="menuburgeryo"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto" id="bonjourjesuisflex">
        <Nav.Link className="navbarbuttonplease" href="/index_connecte">Accueil</Nav.Link>
        <NavDropdown className="navbarbuttonplease" title="Créer" id="basic-nav-dropdown">
          <NavDropdown.Item href="/admin/CreationProgramme/creation_programme">Création Programme</NavDropdown.Item>
          <NavDropdown.Item href="/admin/CreationPromotion/creation_promotion">Création Promotion</NavDropdown.Item>
          <NavDropdown.Item href="/admin/CreationUtilisateur/creation_utilisateur">Création Utilisateur</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown className="navbarbuttonplease" title="Modifier" id="basic-nav-dropdown">
          <NavDropdown.Item href="/admin/GestionProgramme/gestion_programme">Gestion Programmes</NavDropdown.Item>
          <NavDropdown.Item href="/admin/GestionPromotion/gestion_promotion">Gestion Promotions</NavDropdown.Item>
          <NavDropdown.Item href="/admin/GestionUtilisateur/gestion_utilisateur">Gestion Utilisateurs</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link id="navbarbutton" href="/utilisateur/MonProfil/mon_profil">Profil</Nav.Link>
        <Nav.Link id="navbarbutton" href="/admin/Accueil/accueil" >ADMIN</Nav.Link>
        <Nav.Link id="navbarbutton" href="/" >Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default AdminNav
