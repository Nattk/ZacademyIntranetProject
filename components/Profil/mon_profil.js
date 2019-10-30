import React from 'react'
import Link from 'next/link'

const MonProfil = () => (
  <article className="card">
    <img className="card-img-top" src="..." alt="" />
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
    </div>
  </article>
)

export default MonProfil
