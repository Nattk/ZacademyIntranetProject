import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <Link href="/admin/Accueil/accueil"><a className="btn btn-danger" role="button">ADMINISTRATION</a></Link>
    <div className="dropdown show">
      <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        Ma Formation
      </a>

      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <Link href="/ma_formation/Agenda/agenda"><a role="button">Calendrier</a></Link><br></br>
        <Link href="/ma_formation/ContactUtiles/contact_utiles"><a role="button">Contact utiles</a></Link><br></br>
        <Link href="/ma_formation/LivretAccueil/livret_accueil"><a role="button">Livret d'accueil</a></Link><br></br>
        <Link href="/ma_formation/Slack/slack"><a role="button">Slack academy</a></Link><br></br>
      </div>
    </div>
    <div className="dropdown show">
      <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        Communauté
      </a>

      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <Link href="/communaute/Ressources/ressources"><a role="button">Ressources</a></Link><br></br>
        <Link href="/communaute/Rss/rss"><a role="button">RSS</a></Link><br></br>
        <Link href="/communaute/WhoToFollow/who_to_follow"><a role="button">Who to follow</a></Link><br></br>
      </div>
    </div>
    <Link href="/utilisateur/MonProfil/mon_profil"><a className="btn btn-danger" role="button">PROFIL</a></Link>
    <Link href="/"><a className="btn btn-danger" id="bonjourjérémie" role="button">LOGOUT</a></Link>
  </nav>
)

export default Nav
