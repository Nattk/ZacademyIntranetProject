import React, { Component } from "react"
import Page from '../../layouts/classic'
import Card from '../../components/Card/card'
import Button from '../../components/Boutons/Boutons'
import Link from 'next/link'
import Select from 'react-select';

class Ressources extends Component{

  state = {
    ressources: [
      {titre:"Apprendre le JAVA", lien:"ressource-individuelle" , promotion:"Promo Rennes 2", auteur:"Nattan Kifoyi", promoId:1 , contributeur:1, ressId:1},
      {titre:"Les algorithmes JAVA", lien:"ressource-individuelle" , promotion:"Promo Rennes 2", auteur:"Nattan Kifoyi", promoId:1 , contributeur:1, ressId:2},
      {titre:"Revue de code en JAVA", lien:"ressource-individuelle",  promotion:"Promo Paris 2", auteur:"Nattan Kifoyi", promoId:2, contributeur:2, ressId:3},
      {titre:"TDD", lien:"ressource-individuelle",  promotion:"Promo Rio 1", auteur:"Nattan Kifoyi", promoId:2, contributeur:2, ressId:4},
      {titre:"Les collections", lien:"ressource-individuelle",  promotion:"Promo Rio 1", auteur:"Nattan Kifoyi", promoId:3, contributeur:2, ressId:5},
      {titre:"Les dates", lien:"ressource-individuelle",  promotion:"Promo Rio 1", auteur:"Nattan Kifoyi", promoId:3, contributeur:2, ressId:6}
    ],
    Promotions: [
      {ville:"Paris", id:1, promotion:"Paris 01", programme:'Consultant Javascript', date:'12/12/19'},
      {ville:"Casablanca", id:3, promotion:"Casablanca 01", programme:'Consultant Java', date:'12/12/19'},
      {ville:"Rennes", id:5, promotion:"Rennes 02", programme:'Consultant Java', date:'12/12/19'},
    ],

    Modules: [
      {id:0, name:'Algorithme java'},
      {id:1, name:'Librairies JDK'},
      {id:3, name:'Craftmanship'}
    ],

    Sequences: [
      {id:1, idModules:1, name:'dates'},
      {id:2, idModules:1, name:'collections'},
      {id:3, idModules:3, name:'Pair Programming'},
      {id:4, idModules:3, name:'Revue de code'},
      {id:5, idModules:3, name:'TDD'},
      {id:6, idModules:3, name:'TDD'}
    ],
    filtrePromo: [],
    filtreModules: [],
    filtreSequence: [],
    ressourcesDispo:0,
    formateurs: false
    }


  filtre = (event) => {
    // event.map(content => (
    //   this.setState({filtrePromo : })
    // ))
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
            <Button btnType="modifier" title="Modifier"> <Link href="./modifier-ressource"><a>Modifier</a></Link></Button>
            <Button btnType="annuler" title="Supprimer" clicked={(ressId) => this.handleDelete(ressource.ressId)}>Supprimer</Button>
          </aside>
      </Card>
    ))
    
    return(
    <Page title="Ressources" contextePage="Ressources">
      <article className="ressources d-flex flex-column">
        <header className="d-flex flex-row justify-content-between align-items-center">
          <Select className="select-component" options={this.state.Promotions} isMulti={true}
            formatCreateLabel={(inputValue) => `Promotion`}
            noOptionsMessage={(inputValues) => `${inputValues.inputValue} cette optio...`}
            defaultValue="Promotion"
            placeholder="Promotions"
            getOptionLabel={(option) => option.promotion}
            getOptionValue={(option) => option.id}
            onChange={this.filtre}
          ></Select>
          <Select className="select-component" options={this.state.Modules} isMulti={true}
          formatCreateLabel={(inputValue) => `Modules`}
          noOptionsMessage={(inputValues) => `${inputValues.inputValue} cette optio...`}
          defaultValue="Promotion"
          placeholder="Modules"
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
          ></Select>
          <Select className="select-component" options={this.state.Sequences} isMulti={true}
          formatCreateLabel={(inputValue) => `Sequences`}
          noOptionsMessage={(inputValues) => `${inputValues.inputValue} cette optio...`}
          defaultValue="Promotion"
          placeholder="Séquences"
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
          ></Select>
          <Button btnType="valider">
            <Link href="./ajouter-ressource">
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
              <Link href="./ajouter-ressource">
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