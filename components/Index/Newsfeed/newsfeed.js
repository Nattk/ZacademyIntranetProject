import React from 'react'
import Link from 'next/link'

const Newsfeed = () => (
  <article className="card" id="newsfeed_accueil">
    <section className="card-header">
            Dernières actualités
    </section>
    <section className="card-body">
      <p className="card-title">Ajout flux RSS par Jérémie Patonnier</p>
      <Link href="/communaute/Rss/rss"><a className="btn btn-primary">Lien ressource</a></Link>
    </section>
    <section className="card-body">
      <p className="card-title">BBL par Norbert</p>
      <Link href="https://www.urbandictionary.com/define.php?term=soon%20%28tm%29"><a className="btn btn-primary">Lien ressource</a></Link>
    </section>
    <section className="card-body">
      <p className="card-title">Support cours par Cédric Rup</p>
      <Link href="https://www.valentinog.com/blog/jest/"><a className="btn btn-primary">Lien ressource</a></Link>
    </section>
  </article>
)

export default Newsfeed
