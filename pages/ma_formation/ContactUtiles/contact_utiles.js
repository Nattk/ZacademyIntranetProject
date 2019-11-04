import React from 'react'
import Page from '../../../layouts/classic'

const ContactsUtiles = () => (
  <Page title="Contact utiles">
    <article className="profiles flex-column" role="liste des profiles" alt="profil contact utile" id="article_contact_utiles" >
      <div id="div_contact_utiles">
        <section className="card" >
          <img src="/firmin.jpg" className="card-img-top" alt="image profil contact utile" />
          <div className="card-body">
            <h1 className="card-title">J'ai Rémi Pas Tonier</h1>
            <p className="card-text">Formateur principal.</p>
          </div>
        </section>
        <section className="card" >
          <img src="/firmin.jpg" className="card-img-top" alt="image profil contact utile" />
          <div className="card-body">
            <h1 className="card-title">Joe Nathan</h1>
            <p className="card-text">React Overlord.</p>
          </div>
        </section>
        <section className="card" >
          <img src="/firmin.jpg" className="card-img-top" alt="image profil contact utile" />
          <div className="card-body">
            <h1 className="card-title">Nathan Joe</h1>
            <p className="card-text">Sauveur de l'humanité.</p>
          </div>
        </section>
        <section className="card" >
          <img src="/firmin.jpg" className="card-img-top" alt="image profil contact utile" />
          <div className="card-body">
            <h1 className="card-title">Nord Bher</h1>
            <p className="card-text">Directeur de ZA-KA.</p>
          </div>
        </section>
        <section className="card" >
          <img src="/firmin.jpg" className="card-img-top" alt="image profil contact utile" />
          <div className="card-body">
            <h1 className="card-title">RATP</h1>
            <p className="card-text">Fournisseur d'excuse de retard depuis 1948.</p>
          </div>
        </section>
      </div>
    </article>
  </Page>
)

export default ContactsUtiles
