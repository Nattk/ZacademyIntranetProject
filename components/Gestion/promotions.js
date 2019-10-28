import React from 'react'
import Link from 'next/link'

const PromotionsGestion = () => (
  <article className="gestionProgramme card">
    <header className="card-header">
      Liste des promotions
    </header>
    <section className="card-body">
      <ul>
        <li className="d-flex flex- justify-content-around align-items-baseline">
          <a href="#">Promo 1</a>
          <button type="button" className="btn btn-secondary">Supprimer</button>
          <a href="./creation_promotion.html"
          ><button type="button" className="btn btn-warning">
              Modifier
            </button></a>
        </li>
        <li className="d-flex flex- justify-content-around align-items-baseline">
          <a href="#">Promo 2</a>
          <button type="button" className="btn btn-secondary">supprimer</button>
          <a href="./creation_promotion.html"
          ><button type="button" className="btn btn-warning">
              Modifier
            </button></a>
        </li>
        <li className="d-flex flex- justify-content-around align-items-baseline">

          <a href="#">Promo 3</a>
          <button type="button" className="btn btn-secondary">supprimer</button>
          <a href="./creation_promotion.html">
            <button type="button" className="btn btn-warning">
              Modifier
            </button></a>
        </li>
      </ul>
    </section>
    <footer className="d-flex flex-row align-items-end">
      <Link href="/admin/CreationPromotion/creation_promotion">
        <button type="button" className="btn btn-primary">
          Ajouter une promotion
        </button></Link>
    </footer>
  </article>
)

export default PromotionsGestion
