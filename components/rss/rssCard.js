import React from 'react'

const RssCard = (props) => (
  <article className="col-md-12 col-sm-12 col-xs-8 card-rss" >
    <header className="header-card-rss" >
      {props.remove}
      <h2 className="title-card-rss">{props.titre}</h2>
    </header>
    <section >
      <p>{props.description}</p>
    </section>
    <footer >
      <a href={props.link} className="link-card-rss" title="lien vers le flux" target="_blank">Lien vers le flux  <i className="fas fa-rss card-rss-button" /></a>
    </footer>
  </article>

)

export default RssCard
