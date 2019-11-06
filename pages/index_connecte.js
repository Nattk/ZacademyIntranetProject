import React from 'react'
import Page from '../layouts/classic'
import Link from 'next/link'
import Carousel from '../components/Carousel/carousel'

export default function IndexConnected () {
  return (
    <Page title="Accueil" contextePage="Accueil">
      <Carousel />
      <article className="card" id="newsfeed_accueil">
        <section className="card-header">
            Dernières actualités
        </section>
        <section className="card-body" alt="dernière actualité formation">
          <p className="card-title">Ajout flux RSS par Jérémie Patonnier</p>
          <Link href="/communaute/Rss/rss"><a className="btn btn-primary">Lien ressource</a></Link>
        </section>
        <section className="card-body" alt="dernière actualité formation">
          <p className="card-title">BBL par Norbert</p>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="btn btn-primary">Lien ressource</a>
        </section>
        <section className="card-body" alt="dernière actualité formation">
          <p className="card-title">Support cours par Cédric Rup</p>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="btn btn-primary">Lien ressource</a>
        </section>
      </article>
    </Page>
  )
}
