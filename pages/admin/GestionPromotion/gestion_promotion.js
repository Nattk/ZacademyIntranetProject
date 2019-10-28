import React, { Component } from "react"
import Page from '../../../layouts/admin'
import Button from '../../../components/Boutons/Boutons'
import Link from 'next/link'

class PromotionGestion extends Component {
  state = {
    promotions : [
      {ville:"Rio de Janeiro", promotion:"Promo Rio 1", promoId:1},
      {ville:"Rennes", promotion:"Promo Rennes 2", promId:2},
      {ville:"Paris", promotion:"Promo Paris 2", promoId:3}
    ]
  }

  handleDelete = (promoId) =>{
    alert('Promotion supprimé !');
    const promos = this.state.promotions.filter(item => item.promoId !== promoId);
    this.setState({promotions : promos});
  }
  
  render () {
    return (
      <Page title="Gestion des promotions">
      <article className="gestionProgramme card">
        <header className="card-header">
        Liste des Promotions
        </header>
        <section className="card-body">
          <ul>
            {this.state.promotions.map((promotion, index) =>(
              <li key={index} className="d-flex flex- justify-content-around align-items-baseline">
                <p>{promotion.name}</p>
                <p>Ville : {promotion.ville}</p>
                <Button btnType="annuler" clicked={(promoId) => this.handleDelete(promotion.promoId)}>Supprimer</Button>
                <Button btnType="modifier"><Link href="./modificationPromotion"><a>Modifier</a></Link></Button>
              </li>
            ))}
          </ul>
        </section> 
        <footer className="d-flex flex-row align-items-end justify-content-center">
          <Link href="/admin/CreationPromotion/creation_promotion">
            <button type="button" className="btn btn-primary">
            Ajouter une promotion
            </button></Link>
        </footer>
      </article>
      </Page>
    )
  }
}
export default PromotionGestion
