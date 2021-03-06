import React from 'react'
import Link from 'next/link'

const Nav = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="navbar">
    <button class="navbar-toggler" type="button" title="menu burger" data-toggle="collapse" data-target="#navbarSupportedContent15"
      aria-controls="navbarSupportedContent15" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent15">
    <Link href="/index_connecte"><a className="btn btn-danger bouton-navbar" role="button">ACCUEIL</a></Link>

      <div className="dropdown show">
        <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false" alt="groupe de liens ma formation">
          Ma Formation
      </a>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <Link href="/ma-formation/Agenda/agenda"><a role="button" alt="Lien vers calendrier">Calendrier</a></Link><br></br>
          <Link href="/ma-formation/Contact-Utiles/contact-utiles"><a role="button" alt="Lien vers contact utiles">Contact utiles</a></Link><br></br>
          <Link href="/ma-formation/Livret-Accueil/livret-accueil"><a role="button" alt="Lien vers livret d'accueil">Livret d'accueil</a></Link><br></br>
        </div>
      </div>
      <div className="dropdown show">
        <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          Communauté
      </a>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <Link href="/ma-formation/Slack/slack"><a role="button" alt="Lien vers slack academy">Slack academy</a></Link><br></br>
          <Link href="/communaute/Rss/rss"><a role="button" alt="Lien vers flux rss">RSS</a></Link><br></br>
          <Link href="/communaute/who-to-follow/who-to-follow"><a role="button" alt="Lien vers who to follow">Who to follow</a></Link><br></br>
        </div>
      </div>
      <div className="dropdown show">
        <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          Ressources
      </a>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <Link href="/ressources/ressources"><a role="button" alt="Lien vers ressources formateur">Formateurs</a></Link><br></br>
          <Link href="/ressources/ressources"><a role="button" alt="Lien vers ressources élèves">Élèves</a></Link><br></br>
        </div>
      </div>
<div id="end-of-navbar">
      <Link href="/admin/Accueil/accueil"><a className="btn btn-danger bouton-navbar" role="button" onClick={props.adminClick}>ADMINISTRATION</a></Link>
      <Link href="/utilisateur/mon-profil/mon-profil"><a className="btn btn-danger bouton-navbar" role="button" alt="Lien vers mon profil">PROFIL</a></Link>
      <Link href="/"><a className="btn btn-danger bouton-navbar" role="button" alt="Lien déconnexion" onClick={props.offline}>LOGOUT</a></Link>
      </div></div>
        </nav>
)

export default Nav
