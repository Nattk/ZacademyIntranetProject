import React from 'react'

const LoginNav = ({ moclick }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="navbar">
      <button className="navbar-toggler" type="button" title="menu burger" data-toggle="collapse" data-target="#navbarSupportedContent15"
        aria-controls="navbarSupportedContent15" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent15">
      <button className="btn btn-danger bouton-navbar login-btn" role="button" onClick={moclick}>CONNEXION</button></div>
    </nav>
  )
}

export default LoginNav
