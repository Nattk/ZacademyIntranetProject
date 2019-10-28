import React from 'react'
import Link from 'next/link'

const AdminNav = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <Link href="/index_connecte"><a onClick={props.handleClick} className="btn btn-danger" id="bonjourjérémie" role="button">ACCUEIL</a></Link>
    <div className="dropdown show">
      <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        Créer
      </a>

      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <Link href="/admin/CreationProgramme/creation_programme"><a role="button">Creation Programme</a></Link><br></br>
        <Link href="/admin/CreationPromotion/creation_promotion"><a role="button">Creation Promotion</a></Link><br></br>
        <Link href="/admin/CreationUtilisateur/creation_utilisateur"><a role="button">Creation Utilisateur</a></Link><br></br>
      </div>
    </div>
    <div className="dropdown show">
      <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        Modifier
      </a>

      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <Link href="/admin/GestionProgramme/gestion_programme"><a role="button">Gestion Programme</a></Link><br></br>
        <Link href="/admin/GestionPromotion/gestion_promotion"><a role="button">Gestion Promotion</a></Link><br></br>
        <Link href="/admin/GestionUtilisateur/gestion_utilisateur"><a role="button">Gestion Utilisateur</a></Link><br></br>
      </div>
    </div>
    <Link href="/utilisateur/MonProfil/mon_profil"><a className="btn btn-danger" role="button">PROFIL</a></Link>
    <Link href="/"><a className="btn btn-danger" href="#" id="bonjourjérémie" role="button">LOGOUT</a></Link>
  </nav>
)

export default AdminNav
