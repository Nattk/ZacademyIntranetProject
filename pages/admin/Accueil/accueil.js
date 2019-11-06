import React, { Component } from 'react'
import Page from '../../../layouts/classic'
import Link from 'next/link'
import Button from '../../../components/Boutons/Boutons'

class Admin extends Component {
  state = {
    // Eleves:[
    //   {nom:"Kifoyi",prenom:"nattan", promoId:1, promotion:"Paris 01"},
    //   {nom:"Kifoyi",prenom:"nattan", promoId:6, promotion:"Rennes 01"},
    //   {nom:"Kifoyi",prenom:"nattan", promoId:3, promotion:"Casablanca 02"},
    //   {nom:"Kifoyi",prenom:"nattan", promoId:2, promotion:"Paris 02"},
    //   {nom:"Kifoyi",prenom:"nattan", promoId:5, promotion:"Rennes 02"},
    //   {nom:"Kifoyi",prenom:"nattan", promoId:4, promotion:"Casablanca 01"},
    // ],
    // Formateurs:[
    //   {nom:"jeanDeParis", prenom:"robert", promoId:1, promotion:"Paris 01"},
    //   {nom:"jeanDeParis", prenom:"robert", promoId:2, promotion:"Paris 02"},
    //   {nom:"jeanDeParis", prenom:"robert", promoId:2, promotion:"Paris 02"},
    //   {nom:"jeanDeRennes", prenom:"robert", promoId:6, promotion:"Rennes 01"},
    //   {nom:"jeanDeRennes", prenom:"robert", promoId:5, promotion:"Rennes 02"},
    //   {nom:"jeanDeRennes", prenom:"robert", promoId:5, promotion:"Rennes 02"},
    //   {nom:"jeanDeCasablanca", prenom:"robert", promoId:3, promotion:"Casablanca 02"},
    //   {nom:"jeanDeCasablanca", prenom:"robert", promoId:4, promotion:"Casablanca 01"}

    // ],
    Promotions: [
      {ville:"Paris", id:1, promotion:"Paris 01", programme:'Consultant Javascript', date:'12/12/19'},
      {ville:"Paris", id:2, promotion:"Paris 02", programme:'Consultant Java', date:'12/12/19'},
      {ville:"Casablanca", id:3, promotion:"Casablanca 01", programme:'Consultant Java', date:'12/12/19'},
      {ville:"Casablanca", id:4, promotion:"Casablanca 02", programme:'Consultant Java', date:'12/12/19'},
      {ville:"Rennes", id:5, promotion:"Rennes 02", programme:'Consultant Java', date:'12/12/19'},
      {ville:"Rennes", id:6, promotion:"Rennes 01", programme:'Consultant Java', date:'12/12/19'}
    ]
  }

  filtre = (type) => {
    const arrayFiltered = [...this.state.Promotions]
    arrayFiltered.sort( (a, b) => a[type] > b[type] ? 1 : -1)
    this.setState({Promotions : arrayFiltered})
  }

  handleDelete = () =>{
    alert('profil supprimé');
  }  

  render () {
    return (
      <Page title="Admin Accueil">
        <article id="admin-page">
          {/* //<button>Ajouter une promotion</button> */}
          <h1>Promotions en cours</h1>
          <section>
            <input type="text" placeholder="Rechercher"/>
          </section>
          <section>
          <table className="table table-hover">
            <thead>
              <tr>
                <th  onClick={(type)=>this.filtre("nom")}><div className="d-flex flex-row justify-content-between align-items-baseline">Nom <i class="fas fa-sort"></i></div></th>
                <th  onClick={(type)=>this.filtre("ville")}><div className="d-flex flex-row justify-content-between align-items-baseline">Ville <i class="fas fa-sort"></i></div></th>
                <th  onClick={(type)=>this.filtre("programme")}><div className="d-flex flex-row justify-content-between align-items-baseline">Programme <i class="fas fa-sort"></i></div></th>
                <th  onClick={(type)=>this.filtre("date")}><div className="d-flex flex-row justify-content-between align-items-baseline">Date <i class="fas fa-sort"></i></div></th>
                <th  onClick={(type)=>this.filtre("actions")}>Actions</th>
              </tr>
            </thead>
            <tbody>
            {this.state.Promotions.map( (promo =>(
                <tr className="promotion-row" key={promo.id}> 
                  <td>{promo.promotion}</td>
                  <td>{promo.ville}</td>
                  <td>{promo.programme}</td>
                  <td>{promo.date}</td>
                  <td>
                    <button><i className="fas fa-eye" title="Voir détails"></i></button>
                    <button>Ghost</button>
                  </td>
                </tr>
              )))}
            </tbody>
          </table>
          </section>
            {/* <select defaultValue="0" className="custom-select" id="selectVille" onChange={this.filtre}>
              <option value="0">Ville</option>
              <option value="Paris">Paris</option>
              <option value="Rennes">Rennes</option>
              <option value="Casablanca">Casablanca</option>
            </select>
            <select defaultValue="0" className="custom-select" id="selectPromo" onChange={this.filtre}>
              <option value="0">Promotions</option>
              {this.state.Promotions.filter( promo =>{
                return promo.ville === this.state.filtreVille;
              }).map(promo => (
                <option key={promo.promoId} value={promo.promoId}>{promo.promotion}</option>
              ))} 
            </select>
          <div className="admin_listing">
            <div className="listing_eleves">
              {this.state.Eleves.filter(eleve => {
                if(this.state.filtreVille === "0"){
                  return eleve
                }
                else{
                  return eleve.promoId === parseInt(this.state.filtrePromo)
                }
              }).map((eleve,index)=>(
                <article key={index} className="card">
                <section className="card-body">
                <p>Nom : {eleve.nom} | Prénom : {eleve.prenom}. Promotion : {eleve.promotion}</p>
                </section>
                <div className="d-flex flex-row">
                <Button btnType="annuler"><Link href="/utilisateur/mon-profil/mon-profil"><a>Voir Profil</a></Link></Button>
                <Button btnType="modifier" clicked={this.handleDelete}>Supprimé profil</Button>
                </div>
                </article>
              ))}
            </div>
            <div className="listing_formateurs">
            {this.state.Formateurs.filter(formateur => {
              if(this.state.filtreVille === "0"){
                return formateur
              }
              else{
                return formateur.promoId === parseInt(this.state.filtrePromo)
              }
              }).map((formateur,index)=>(
                <article key={index} className="card">
                <section className="card-body">
                <p>Nom : {formateur.nom} | Prénom : {formateur.prenom}. Promotion : {formateur.promotion}</p>
                </section>
                <div className="d-flex flex-row">
                <Button btnType="annulé"><Link href="/utilisateur/MonProfil/mon_profil"><a>Voir Profil</a></Link></Button>
                <Button btnType="modifier" clicked={this.handleDelete}>Supprimé profil</Button>
                </div>
                </article>
              ))}
            </div>
          </div> */}
        </article>
      </Page>
    )
  }
}

export default Admin
