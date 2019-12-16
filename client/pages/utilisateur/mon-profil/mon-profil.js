import React, { useEffect, useState } from 'react'
import Page from '../../../layouts/classic'
import { useLocalStorage } from '../../../components/Login/LoginForm'

const MonProfil = () => {
  const [user] = useLocalStorage('user', '')
  const [Promotion, setPromotion] = useState('')

  useEffect(() => {
    fetch(`http://localhost:3333/api/promotions/${user.promotion}`)
      .then(res => res.json())
      .then(res => setPromotion(res))
  }, [])

  return (
    <Page title="Profil" contextePage="Mon Profil">
      <article className="card" id="monprofil" alt="informations mon profil">
        <p>Pour modification ou suppression de vos données personnelles, merci de contacter l'administration cf mentions légales.</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong> Prénom : </strong> {user.firstName}</li>
          <li className="list-group-item"><strong> Nom : </strong> {user.lastName}</li>
          <li className="list-group-item"><strong> Email : </strong>{user.email}</li>
          <li className="list-group-item"><strong> Promotion : </strong>{Promotion.title}</li>
        </ul>
        <div className="card-body">
          <p className="card-text"><strong>Telephone : </strong>06 26 28 05 29</p>
        </div>
      </article>
    </Page>
  )
}

export default MonProfil
