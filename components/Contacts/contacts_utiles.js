import React from 'react'

const ContactsUtiles = () => (
  <article className="profiles" role="liste des profiles" id="article_contact_utiles" >
    <section className="card mb-3" role="profil">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src="/jeremie.jpg" className="card-img" alt="image profil" id="img_contact_utiles" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">J'ai rémi Pas Tonier</h1>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="card mb-3" role="profil">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src="/norbert_2.jpg" className="card-img" alt="image profil" id="img_contact_utiles" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">Nord Bher</h1>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="card mb-3" role="profil">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src="/firmin.jpg" className="card-img" alt="image profil" id="img_contact_utiles" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">Phiir main J Ray</h1>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
    </section>
  </article>
)

export default ContactsUtiles
