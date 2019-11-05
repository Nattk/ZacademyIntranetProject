import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <Link href="/admin/Accueil/accueil"><a className="btn btn-danger" role="button">ADMINISTRATION</a></Link>
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
    <Link href="/utilisateur/mon-profil/mon-profil"><a className="btn btn-danger" role="button" alt="Lien vers mon profil">PROFIL</a></Link>
    <Link href="/"><a className="btn btn-danger" id="bonjourjérémie" role="button" alt="Lien déconnexion">LOGOUT</a></Link>
  </nav>
)

export default Nav
