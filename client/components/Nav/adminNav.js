import React from 'react'
import Link from 'next/link'
import { useLocalStorage } from '../Login/LoginForm'

const AdminNav = () => {
  const [, setUser] = useLocalStorage('user', '')
  const offlineClick = () => {
    setUser('')
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="navbar">
      <button className="navbar-toggler" type="button" title="menu burger" data-toggle="collapse" data-target="#navbarSupportedContent15"
        aria-controls="navbarSupportedContent15" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent15">
        <Link href="/index_connecte"><a className="btn btn-danger bouton-navbar" role="button" >ACCUEIL</a></Link>
        <div className="dropdown show">
          <a className="btn btn-danger dropdown-toggle bouton-navbar" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
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
          <a className="btn btn-danger dropdown-toggle bouton-navbar" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
          Modifier
          </a>

          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <Link href="/admin/gestion-programme/gestion-programme"><a role="button" alt="Lien pour gérer les programmes">Gestion Programme</a></Link><br></br>
            <Link href="/admin/gestion-promotion/gestion-promotion"><a role="button" alt="Lien pour gérer les promotions">Gestion Promotion</a></Link><br></br>
            <Link href="/admin/gestion-utilisateur/gestion-utilisateur"><a role="button" alt="Lien pour gérer les utilisateurs">Gestion Utilisateur</a></Link><br></br>
          </div>
        </div>
        <div id="end-of-navbar">
          <Link href="/"><a className="btn btn-danger bouton-navbar" href="#" role="button" alt="Lien déconnexion" onClick={offlineClick}>LOGOUT</a></Link>
        </div>
      </div>
    </nav>
  )
}

export default AdminNav
