import React, { Component } from "react"
import Page from '../../layouts/classic'
import Card from '../../components/Card/card'
import Button from '../../components/Boutons/Boutons'
import Link from 'next/link'

class Ressources extends Component{

  state = {
    ressources: [
      {titre:"Apprendre le HTML en 5min" , lien:"ressource-individuelle" , promotion:"Promo Rennes 2", auteur:"Nattan Kifoyi", promoId:1 , contributeur:1, ressId:1},
      {titre:"Apprendre le HTML en 5min" , lien:"ressource-individuelle" , promotion:"Promo Rennes 2", auteur:"Nattan Kifoyi", promoId:1 , contributeur:1, ressId:2},
      {titre:"Apprendre le HTML en 5min" , lien:"ressource-individuelle",  promotion:"Promo Paris 2", auteur:"Nattan Kifoyi", promoId:2, contributeur:2, ressId:3},
      {titre:"Apprendre le HTML en 5min" , lien:"ressource-individuelle",  promotion:"Promo Rio 1", auteur:"Nattan Kifoyi", promoId:3, contributeur:2, ressId:4}
    ],
    filtrePromo: 0,
    ressourcesDispo:0,
    formateurs: false,
    }


  filtre = (event) => {

      this.setState({filtrePromo: parseInt(event.target.value)})
  }

  handleDelete = (ressId) =>{
    alert("ressource supprimé")
    const ress = this.state.ressources.filter(item => item.ressId !== ressId);
    this.setState({ressources : ress});
  }

  render(){
    const ressourcesCartes = this.state.ressources.filter(ressource => {
      if(this.state.filtrePromo === 0){
        return ressource
      }
      else{
        return ressource.promoId === this.state.filtrePromo
      } 
    })
    .map( (ressource, index) => (
      <Card styleName="ressourceCarte d-flex flex-column" key={index}>
        <div className="d-flex flex-row">
          <div>
              <img
                src="https://ca.slack-edge.com/TDKLZEH1B-UN6RVVAP3-g00f562b54f1-72"
                alt="profile-user"
                className="img-socialMedia"
                aria-describedby="p1"
              />
            </div>
            <section className="d-flex flex-column ressourceDetails">
              <Link href={ressource.lien}>
                <h2><a>{ressource.titre}</a></h2>
              </Link>
              <i>{ressource.auteur} . 12/12/2019 . {ressource.promotion}</i>
              <i>#HTML #CSS</i>
            </section>
          </div>
          <aside className="d-flex flex-row justify-content-end"> 
            <Button btnType="modifier" title="Modifier"> <Link href="./ModifierRessource"><a>Modifier</a></Link></Button>
            <Button btnType="annuler" title="Supprimer" clicked={(ressId) => this.handleDelete(ressource.ressId)}>Supprimer</Button>
          </aside>
      </Card>
    ))
    
    return(
    <Page title="Ressources" contextePage="Ressources">
      <article className="ressources d-flex flex-column">
        <header className="d-flex flex-row justify-content-between align-items-center">
            <select defaultValue="0" className="custom-select" id="selectPromo" onChange={this.filtre}>
              <option value="0">Promotions</option>
              <option value="1">Promo Rennes 2</option>
              <option value="2">Promo Paris 2</option>
              <option value="3">Promo Rio 1</option>
            </select>
            <select defaultValue="0" className="custom-select" id="selectKeywords" >
              <option value="0">Modules</option>
              <option value="1">Javscript</option>
              <option value="2">Craft</option>
            </select>
            <Button btnType="valider">
              <Link href="./AjouterRessource">
                <a>
                  Ajouter une ressource
                </a>
              </Link>
            </Button>
        </header>
        <aside className="align-self-stretch">
            <i>{this.state.ressources.length} ressources trouvées</i>
        </aside>
        <section className="ressourcesList"> 
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