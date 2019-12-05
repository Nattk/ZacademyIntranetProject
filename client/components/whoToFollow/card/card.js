import React from 'react'

const Card = (props) => (

  <article className="col-md-3 col-sm-12 col-xs-12 article-card-who-to-follow" >
    <header className="header-user-card-who-to-follow" >
      {props.picture ? (
        <img src="/firmin.jpg" alt="image de contact" className="img-user-card-who-to-follow" />
      ) : null}
      <section className="section-header-user-card-who-to-follow" >
        <i className="fa fa-remove remove-icon " title="supprimer ce profil " onClick={props.remove} />
        &nbsp;
        <i className="fa fa-pen update-icon " title="mettre à jour ce profil " onClick={props.update} />
      </section>
    </header>
    <section className="section-user-card-who-to-follow" style={{ borderTop: 'none' }}>
      <header>
        <h1 className="name-user-card-who-to-follow">{props.firstName} {props.lastName}</h1>
      </header>
      <section>
        <p className="fonction-user-card-who-to-follow">{props.fonction} </p>
        <p className="description-user-card-who-to-follow" >{props.description}</p>
        {props.email ? (<p className="description-user-card-who-to-follow" ><i className="far fa-envelope"></i>&nbsp; &nbsp;{props.email}</p>) : null}
        {props.telephone ? (<p className="description-user-card-who-to-follow" ><i className="fas fa-phone-alt"></i>&nbsp; &nbsp;{props.telephone}</p>) : null}
      </section>
      <footer className="footer-card-who-to-follow button-follow" >
        <section className="section-footer-card-who-to-follow">
          {props.linkTwitter ? (
            <a href={props.linkTwitter} title="Aller sur son twitter" target="_blank">
              <i className="fa fa-twitter card-button-twitter" title="lAller sur son twitter"> </i>
            </a>
          ) : null}
          {props.linkLinkedin ? (
            <a href={props.linkLinkedin} title="Aller sur son linkedin" target="_blank" >
              <i className="fa fa-linkedin card-button-linkedin" title="Aller sur son linkedin" />
            </a>) : null}
          {props.linkGithub ? (
            <a href={props.linkGithub} title="Aller sur son github" target="_blank">
              <i className="fa fa-github card-button-github" title="Aller sur son github" />
            </a>) : null}
        </section>
      </footer>
    </section>
  </article>
)

export default Card
