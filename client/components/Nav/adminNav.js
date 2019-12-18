import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLocalStorage } from '../Login/LoginForm'
import Router from 'next/router'
import userService from '../../services/users'

const AdminNav = () => {
  const [backUser, setbackUser] = useState('')
  const [IsOpen1, setIsOpen1] = useState(false)
  const [IsOpen2, setIsOpen2] = useState(false)
  const [user, setUser] = useLocalStorage('user', '')
  const offlineClick = () => {
    Router.push('/')
    setUser('')
  }

  useEffect(() => {
    userService.setToken(user.token)
    userService.getAll().then(res => setbackUser(res))
  }, [])

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="navbar">
      <button className="navbar-toggler" type="button" title="menu burger" data-toggle="collapse" data-target="#navbarSupportedContent15"
        aria-controls="navbarSupportedContent15" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent15">
        <Link href="/index_connecte"><a className="btn btn-danger bouton-navbar" role="button" >ACCUEIL</a></Link>
        {IsOpen1
          ? <div className="dropdown show">
            <a className="btn btn-danger dropdown-toggle bouton-navbar" role="button" id="dropdownMenuLink" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="true" onClick={() => setIsOpen1(!IsOpen1)}>
          Créer
            </a>
            <div className="dropdown-menu show" aria-labelledby="dropdownMenuLink">
              <Link href="/admin/creation-programme/creation-programme"><a role="button">Creation Programme</a></Link><br></br>
              <Link href="/admin/creation-promotion/creation-promotion"><a role="button">Creation Promotion</a></Link><br></br>
              <Link href="/admin/creation-utilisateur/creation-utilisateur"><a role="button">Creation Utilisateur</a></Link><br></br>
            </div>
          </div>
          : <div className="dropdown">
            <a className="btn btn-danger dropdown-toggle bouton-navbar" role="button" id="dropdownMenuLink" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false" onClick={() => setIsOpen1(!IsOpen1)}>
          Créer
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <Link href="/admin/creation-programme/creation-programme"><a role="button">Creation Programme</a></Link><br></br>
              <Link href="/admin/creation-promotion/creation-promotion"><a role="button">Creation Promotion</a></Link><br></br>
              <Link href="/admin/creation-utilisateur/creation-utilisateur"><a role="button">Creation Utilisateur</a></Link><br></br>
            </div>
          </div>
        }
        {IsOpen2
          ? <div className="dropdown show">
            <a className="btn btn-danger dropdown-toggle bouton-navbar" role="button" id="dropdownMenuLink" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="true" onClick={() => setIsOpen2(!IsOpen1)}>
          Modifier
            </a>

            <div className="dropdown-menu show" aria-labelledby="dropdownMenuLink">
              <Link href="/admin/gestion-programme/gestion-programme"><a role="button" alt="Lien pour gérer les programmes">Liste programme</a></Link><br></br>
              <Link href="/admin/gestion-promotion/gestion-promotion"><a role="button" alt="Lien pour gérer les promotions">Gestion Promotion</a></Link><br></br>
              <Link href="/admin/gestion-utilisateur/gestion-utilisateur"><a role="button" alt="Lien pour gérer les utilisateurs">Gestion Utilisateur</a></Link><br></br>
            </div>
          </div>
          : <div className="dropdown">
            <a className="btn btn-danger dropdown-toggle bouton-navbar" role="button" id="dropdownMenuLink" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false" onClick={() => setIsOpen2(!IsOpen1)}>
          Modifier
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <Link href="/admin/gestion-programme/gestion-programme"><a role="button" alt="Lien pour gérer les programmes">Liste programme</a></Link><br></br>
              <Link href="/admin/gestion-promotion/gestion-promotion"><a role="button" alt="Lien pour gérer les promotions">Gestion Promotion</a></Link><br></br>
              <Link href="/admin/gestion-utilisateur/gestion-utilisateur"><a role="button" alt="Lien pour gérer les utilisateurs">Gestion Utilisateur</a></Link><br></br>
            </div>
          </div>
        }
        <div id="end-of-navbar">
          {backUser.role === 'admin' || backUser.role === 'superadmin'
            ? <Link href="/admin/Accueil/accueil"><a className="btn btn-danger bouton-navbar" role="button" >ADMINISTRATION</a></Link>
            : null }
          <a className="btn btn-danger bouton-navbar" role="button" alt="Lien déconnexion" onClick={offlineClick}>LOGOUT</a>
        </div>
      </div>
    </nav>
  )
}

export default AdminNav
