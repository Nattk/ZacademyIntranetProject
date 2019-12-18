import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLocalStorage } from '../Login/LoginForm'
import Router from 'next/router'
import userService from '../../services/users'

const Nav = () => {
  const [backUser, setbackUser] = useState('')
  const [IsOpen1, setIsOpen1] = useState(false)
  const [IsOpen2, setIsOpen2] = useState(false)
  const [IsOpen3, setIsOpen3] = useState(false)
  const [user, setUser] = useLocalStorage('user', '')
  const [Promotion, setPromotion] = useState('')
  const offlineClick = () => {
    Router.push('/')
    setUser('')
  }

  useEffect(() => {
    userService.setToken(user.token)
    userService.getAll().then(res => setbackUser(res))
    fetch(`http://localhost:3333/api/promotions/${user.promotion}`).then(res => res.json()).then(res => setPromotion(res))
  }, [])

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="navbar">
      <button className="navbar-toggler" type="button" title="menu burger" data-toggle="collapse" data-target="#navbarSupportedContent15"
        aria-controls="navbarSupportedContent15" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent15">
        <Link href="/index_connecte"><a className="btn btn-danger bouton-navbar" role="button">ACCUEIL</a></Link>
        {IsOpen1
          ? <div className="dropdown show" >
            <a className="btn btn-danger dropdown-toggle dropdown show" href="#" role="button" id="dropdownMenuLink"
              aria-haspopup="true" aria-expanded="true" alt="groupe de liens ma formation" onClick={() => setIsOpen1(!IsOpen1)}>
            Ma Formation
            </a>

            <div className="dropdown-menu show" aria-labelledby="dropdownMenuLink">
              <Link href="/ma-formation/Agenda/agenda"><a role="button" alt="Lien vers calendrier">Calendrier</a></Link><br></br>
              <Link href="/ma-formation/Contact-Utiles/contact-utiles"><a role="button" alt="Lien vers contact utiles">Contact utiles</a></Link><br></br>
              <Link href="/ma-formation/Livret-Accueil/livret-accueil"><a role="button" alt="Lien vers livret d'accueil">Livret d'accueil</a></Link><br></br>
            </div>
          </div>
          : <div className="dropdown show" >
            <a className="btn btn-danger dropdown-toggle dropdown show" href="#" role="button" id="dropdownMenuLink"
              aria-haspopup="true" aria-expanded="false" alt="groupe de liens ma formation" onClick={() => setIsOpen1(!IsOpen1)}>
            Ma Formation
            </a>
          </div>
        }
        {IsOpen2
          ? <div className="dropdown show">
            <a className="btn btn-danger dropdown-toggle" role="button" id="dropdownMenuLink"
              aria-haspopup="true" aria-expanded="true" onClick={() => setIsOpen2(!IsOpen2)}>
            Ressources
            </a>

            <div className="dropdown-menu show" aria-labelledby="dropdownMenuLink">
              <Link href="/ressources/ressources"><a role="button" alt="Lien vers ressources formateur">Formateurs</a></Link><br></br>
              <Link href="/ressources/ressources"><a role="button" alt="Lien vers ressources élèves">Élèves</a></Link><br></br>
            </div>
          </div>
          : <div className="dropdown">
            <a className="btn btn-danger dropdown-toggle" role="button" id="dropdownMenuLink"
              aria-haspopup="true" aria-expanded="false" onClick={() => setIsOpen2(!IsOpen2)}>
            Ressources
            </a>
          </div>
        }

        {IsOpen3
          ? <div className="dropdown show" >
            <a className="btn btn-danger " href="#" role="button" id="dropdownMenuLink"
              aria-haspopup="true" aria-expanded="true" onClick={() => setIsOpen3(!IsOpen3)}>
          Communauté
            </a>

            <div className="dropdown-menu show" aria-labelledby="dropdownMenuLink">
              <a href={Promotion.slack} target="_blank" role="button" alt="Lien vers slack academy">Slack academy</a><br></br>
              <Link href="/communaute/Rss/rss"><a role="button" alt="Lien vers flux rss">RSS</a></Link><br></br>
              <Link href="/communaute/who-to-follow/who-to-follow"><a role="button" alt="Lien vers who to follow">Who to follow</a></Link><br></br>
            </div>
          </div>
          : <div className="dropdown" >
            <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
              aria-haspopup="true" aria-expanded="false" onClick={() => setIsOpen3(!IsOpen3)}>
          Communauté
            </a>
          </div>
        }

        <div id="end-of-navbar">
          {backUser.role === 'admin' || backUser.role === 'superadmin'
            ? <Link href="/admin/Accueil/accueil"><a className="btn btn-danger bouton-navbar" role="button" >ADMINISTRATION</a></Link>
            : null}
          <Link href="/utilisateur/mon-profil/mon-profil"><a className="btn btn-danger bouton-navbar" role="button" alt="Lien vers mon profil">PROFIL</a></Link>
          <a className="btn btn-danger bouton-navbar" role="button" alt="Lien déconnexion" onClick={offlineClick}>LOGOUT</a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
