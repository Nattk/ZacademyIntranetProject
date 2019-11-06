import React from 'react'
import Link from 'next/link'

const AdminNav = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <Link href="/index_connecte"><a className="btn btn-danger" id="bonjourjérémie" role="button" onClick={props.adminClick}>ACCUEIL</a></Link>
    <div className="dropdown show">
      <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        Créer
      </a>

      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <Link href="/admin/creation-programme/creation-programme"><a role="button">Creation Programme</a></Link><br></br>
        <Link href="/admin/creation-promotion/creation-promotion"><a role="button">Creation Promotion</a></Link><br></br>
        <Link href="/admin/creation-utilisateur/creation-utilisateur"><a role="button">Creation Utilisateur</a></Link><br></br>
      </div>
    </div>
    <div className="dropdown show">
      <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        Modifier
      </a>

      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <Link href="/admin/gestion-programme/gestion-programme"><a role="button" alt="Lien pour gérer les programmes">Gestion Programme</a></Link><br></br>
        <Link href="/admin/gestion-promotion/gestion-promotion"><a role="button" alt="Lien pour gérer les promotions">Gestion Promotion</a></Link><br></br>
        <Link href="/admin/gestion-utilisateur/gestion-utilisateur"><a role="button" alt="Lien pour gérer les utilisateurs">Gestion Utilisateur</a></Link><br></br>
      </div>
    </div>
    <Link href="/utilisateur/mon-profil/mon-profil"><a className="btn btn-danger" role="button" alt="Lien vers mon profil">PROFIL</a></Link>
    <Link href="/"><a className="btn btn-danger" href="#" id="bonjourjérémie" role="button" alt="Lien déconnexion" onClick={props.offline}>LOGOUT</a></Link>
  </nav>
)

export default AdminNav
