import React from 'react'
import Button from '../Boutons/Boutons'

const CardContact = (props) => (

  <article className="col-md-3 col-sm-12 col-xs-12 article-card" >
    <header className="header-user-card" >
      {props.image
        ? <img src={props.avatar ? props.avatar : '/firmin.jpg'} alt="" className="img-user-card" alt="image de contact" />
        : null}
      {props.showButton ? (
        <section className="section-header-user-card" >
          <i className="fa fa-remove remove-icon " title="supprimer ce profil " onClick={props.remove} />
          &nbsp;
          <i className="fa fa-pen update-icon " title="mettre à jour ce profil " onClick={props.update} />
        </section>)
        : null}
    </header>
    <section className="section-user-card" style={{ borderTop: 'none' }}>
      <header>
        <h1 className="name-user-card">{props.title}</h1>

        {props.titleRss ? (<h1 className="name-user-card">{props.titleRss.charAt(0).toUpperCase() + props.titleRss.slice(1).toLowerCase()}</h1>) : null}
      </header>
      <section>

        <p className="description-user-card" style={{ height: '8vh' }}>{props.content}</p>
        {props.mail ? (<p className="description-user-card" ><i className="far fa-envelope"></i>&nbsp; &nbsp;{props.mail}</p>) : null}
        {props.phone ? (<p className="description-user-card" ><i className="fas fa-phone-alt"></i>&nbsp; &nbsp;{props.phone}</p>) : null}
      </section>

      <section className="text-center" >
        {props.linkFluxRss ? (
          <a href={props.linkFluxRss} className="card-button-rss" title="Aller sur le lien flux rss" target="_blank">
            Lien flux rss &nbsp; <i className="fas fa-rss card-button-rss"></i>
          </a>) : null}
      </section>

      <footer className="text-right" style={{ height: '8vh' }} >
        <section className="d-flex" style={{ justifyContent: 'center' }}>
          <Button clicked={props.showDetails} btnType="valider">
            détails
          </Button>
        </section>

        {props.twitter ? (
          <a href={props.twitter} title="Aller sur son twitter" target="_blank">
            <i className="fa fa-twitter card-button-twitter" title="lAller sur son twitter"> </i>
          </a>
        ) : null}
        {props.medium ? (
          <a href={props.medium} title="Aller sur son linkedin" target="_blank" >
            <i className="fa fa-linkedin card-button-linkedin" title="Aller sur son linkedin" />
          </a>) : null}
        {props.github ? (
          <a href={props.github} title="Aller sur son github" target="_blank">
            <i className="fa fa-github card-button-github" title="Aller sur son github" />
          </a>) : null}

      </footer>
    </section>
  </article>
)

export default CardContact
