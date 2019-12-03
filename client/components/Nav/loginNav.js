import React from 'react'

const LoginNav = ({ moclick }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="navbar">
      <button className="btn btn-danger bouton-navbar login-btn" role="button" onClick={moclick}>CONNEXION</button>
    </nav>
  )
}

export default LoginNav
