import React from 'react'
import Page from '../../../layouts/classic'

const MonProfil = () => (
  <Page title="Profil">
    <article className="card" id="monprofil" alt="informations mon profil">
      <div className="card-body">
        <h1 className="card-title">Mon profil</h1>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ab nihil ipsum aspernatur mollitia quae dicta culpa libero, doloribus reprehenderit voluptatibus quibusdam a in. Facere neque fugit possimus maiores debitis.</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><strong> Pseudo : </strong>
          Firmin Giret</li>
        <li className="list-group-item"><strong> Email : </strong>giret.firmin@gmail.com</li>
        <li className="list-group-item"><strong> Promotion : </strong>Paris_02</li>
      </ul>
      <div className="card-body">
        <p className="card-text"><strong>Tel : </strong>06 26 28 05 29</p>
      </div>
      <img className="card-img-top" src="/avatar.jpg" alt="avatar mon profil" />
    </article>
  </Page>
)

export default MonProfil