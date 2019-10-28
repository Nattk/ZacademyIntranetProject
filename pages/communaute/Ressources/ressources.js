import React, { Component } from "react"
import Page from '../../../layouts/classic'
import Card from '../../../components/Card/card'
import Button from '../../../components/Boutons/Boutons'
import Link from 'next/link'

class Ressources extends Component{

  state = {
    ressources: [
      {titre:"Apprendre le HTML en 5min" , lien:"ressourceIndividuelle" , promotion:"Promo Rennes 2", auteur:"Nattan Kifoyi", promoId:1 , contributeur:1, ressId:1},
      {titre:"Apprendre le HTML en 5min" , lien:"ressourceIndividuelle" , promotion:"Promo Rennes 2", auteur:"Nattan Kifoyi", promoId:1 , contributeur:1, ressId:2},
      {titre:"Apprendre le HTML en 5min" , lien:"ressourceIndividuelle",  promotion:"Promo Paris 2", auteur:"Nattan Kifoyi", promoId:2, contributeur:2, ressId:3},
      {titre:"Apprendre le HTML en 5min" , lien:"ressourceIndividuelle",  promotion:"Promo Rio 1", auteur:"Nattan Kifoyi", promoId:3, contributeur:2, ressId:4}
    ],
    filtreContributeur : 0,
    filtrePromo: 0,
    ressourcesDispo:0
    }

  filtre = (event) => {
    if(event.target.id === "selectContributeur"){
      this.setState({filtreContributeur: parseInt(event.target.value)})
    }
    else{
      this.setState({filtrePromo: parseInt(event.target.value)})
    }
  }

  handleDelete = (ressId) =>{
    alert("ressource supprimé")
    const ress = this.state.ressources.filter(item => item.ressId !== ressId);
    console.log(ress);
    this.setState({ressources : ress});


  }

  render(){
    const ressourcesCartes = this.state.ressources.filter(ressource => {
      if(this.state.filtreContributeur === 0 && this.state.filtrePromo === 0){
        return ressource
      }
      else if(this.state.filtrePromo === 0){
        return ressource.contributeur === this.state.filtreContributeur
      }
      else if(this.state.filtreContributeur === 0){
        return ressource.promoId === this.state.filtrePromo
      }
      else{
        return ressource.contributeur === this.state.filtreContributeur && ressource.promoId === this.state.filtrePromo
      } 
    })
    .map( (ressource, index) => (
      <Card styleName="ressourceCarte d-flex flex-column" key={index}>
        <Link href={ressource.lien}>
          <a>{ressource.titre}</a>
        </Link>
        <p>{ressource.promotion}</p>
        <p>{ressource.auteur}</p>
        <div class="d-flex flex-row">
          <Button btnType="modifier"> <Link href="./ModifierRessource">Modifier</Link></Button>
          <Button btnType="annuler" clicked={(ressId) => this.handleDelete(ressource.ressId)}>Supprimer</Button>
        </div>
      </Card>
    ))
    
    return(
    <Page title="Ressources">
      <article className="ressources d-flex flex-column">
      <h1>Ressources</h1>
        <header className="d-flex flex-row justify-content-between align-items-center">
            <select defaultValue="0" className="custom-select" id="selectContributeur" onChange={this.filtre}>
              <option value="0">Contributeurs</option>
              <option value="1">Elèves</option>
              <option value="2">Formateurs</option>
            </select>
            <select defaultValue="0" className="custom-select" id="selectPromo" onChange={this.filtre}>
              <option value="0">Promotions</option>
              <option value="1">Promo Rennes 2</option>
              <option value="2">Promo Paris 2</option>
              <option value="3">Promo Rio 1</option>
            </select>
            <div>
              <i className="fa fa-search"></i>
              <input type="text" placeholder="rechercher une ressource" />
            </div>
        </header>
        <aside className="align-self-stretch">
            <i>{this.state.ressources.length} ressources trouvées</i>
        </aside>
        <section class="ressourcesList"> 
            {ressourcesCartes}
        </section>
          <footer className="d-flex align-items-end">
            <Button btnType="valider">
              <Link href="./AjouterRessource">
                <a>
                  Ajouter une ressource
                </a>
              </Link>
            </Button>
          </footer>
      </article>
      </Page>
    )
  }
}

export default Ressources ;