import React from 'react'

const RssCard = (props) => (
  <card className={props.className} style={{ border: '1px solid rgba(0, 0, 0, 0.125)', margin: '0.1rem' }} >
    <img src={props.imgRss} width="100%" className="card-img-top-rss" alt="image lien flux rss" style={{ marginTop: '0.8rem' }} />
    <div className="card-body" style={{ borderTop: '1px solid rgba(0, 0, 0, 0.125)', textAlign: 'left' }}>
      {props.remove}
      <h1 className="card-title" style={{ fontSize: '1.2rem' }}>  {props.titre}</h1>

      <p className="card-text" >{props.description}</p>
      <a href={props.link} className="card-rss-title" title="lien vers le flux" target="_blank">Lien vers le flux &nbsp;  <i className="fas fa-rss card-rss-button" /></a>

    </div>
    <footer>   <small style={{ float: 'right' }}>Il y a 12 heures</small></footer>
  </card >)

export default RssCard
