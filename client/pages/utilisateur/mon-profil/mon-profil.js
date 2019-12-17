import React, { useEffect, useState } from 'react'
import Page from '../../../layouts/classic'
import { useLocalStorage } from '../../../components/Login/LoginForm'
import userService from '../../../services/users'

const MonProfil = () => {
  const [backUser, setbackUser] = useState('')
  const [user] = useLocalStorage('user', '')

  useEffect(() => {
    userService.setToken(user.token)
    userService.getAll().then(res => setbackUser(res))
  }, [])

  return (
    <Page title="Profil" contextePage="Mon Profil">
      <article className="card" id="monprofil" alt="informations mon profil">
        <p>Pour modification ou suppression de vos données personnelles, merci de contacter l'administration cf mentions légales.</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong> Prénom : </strong> {backUser.firstName}</li>
          <li className="list-group-item"><strong> Nom : </strong> {backUser.lastName}</li>
          <li className="list-group-item"><strong> Email : </strong>{backUser.email}</li>
          <li className="list-group-item"><strong> Promotion : </strong>{backUser.promotion ? backUser.promotion.title : null}</li>
        </ul>
        <div className="card-body">
          <p className="card-text"><strong>Telephone : </strong>06 26 28 05 29</p>
        </div>
      </article>
    </Page>
  )
}

export default MonProfil
