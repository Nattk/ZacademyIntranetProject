import React from 'react'

const LoginNav = ({ moclick }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="navbar">
      <a className="btn btn-danger bouton-navbar login-btn" role="button" alt="Lien vers mon profil" onClick={moclick}>CONNEXION</a>
    </nav>
  )
}

export default LoginNav
