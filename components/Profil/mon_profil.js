import React from 'react'
import Link from 'next/link'

const MonProfil = () => (
  <article className="card">
    <img className="card-img-top" src="..." alt="" />
    <div className="card-body">
      <h5 className="card-title">Mon profil</h5>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ab nihil ipsum aspernatur mollitia quae dicta culpa libero, doloribus reprehenderit voluptatibus quibusdam a in. Facere neque fugit possimus maiores debitis.</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item"><button type="button" className="btn btn-danger" data-toggle="modal" data-target="#modal1">Modifier</button><strong> Pseudo : </strong>
          Firmin Giret</li>
      <li className="list-group-item"><button type="button" className="btn btn-danger" data-toggle="modal" data-target="#modal2">Modifier</button><strong> Email : </strong>giret.firmin@gmail.com</li>
      <li className="list-group-item"><strong> Promotion : </strong>Paris_02</li>
    </ul>
    <div className="card-body">
      <Link href="/"><button type="submit" className="btn btn-danger">Supprimer mon profil</button></Link>
    </div>
    <div className="modal fade" id="modal1" tabIndex="-1" role="dialog" aria-labelledby="modal1" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modal1">Modifier votre nom d'utilisateur</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <input type="text" placeholder="Nouveau nom d'utilisateur"></input>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-danger" data-dismiss="modal">Accepter</button>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="modal2" tabIndex="-1" role="dialog" aria-labelledby="modal2" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modal2">Modifiez votre email</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <input type="text" placeholder="Nouveau mail"></input>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-danger" data-dismiss="modal">Accepter</button>
          </div>
        </div>
      </div>
    </div>
  </article>
)

export default MonProfil
