import React, { Component } from 'react'
import Page from '../../../layouts/classic'
import Link from 'next/link'
import Button from '../../../components/Boutons/Boutons'

class Admin extends Component {
  state = {
    Eleves:[
      {nom:"Kifoyi",prenom:"nattan", promoId:1, promotion:"Paris 01"},
      {nom:"Kifoyi",prenom:"nattan", promoId:6, promotion:"Rennes 01"},
      {nom:"Kifoyi",prenom:"nattan", promoId:3, promotion:"Casablanca 02"},
      {nom:"Kifoyi",prenom:"nattan", promoId:2, promotion:"Paris 02"},
      {nom:"Kifoyi",prenom:"nattan", promoId:5, promotion:"Rennes 02"},
      {nom:"Kifoyi",prenom:"nattan", promoId:4, promotion:"Casablanca 01"},
    ],
    Formateurs:[
      {nom:"jeanDeParis", prenom:"robert", promoId:1, promotion:"Paris 01"},
      {nom:"jeanDeParis", prenom:"robert", promoId:2, promotion:"Paris 02"},
      {nom:"jeanDeParis", prenom:"robert", promoId:2, promotion:"Paris 02"},
      {nom:"jeanDeRennes", prenom:"robert", promoId:6, promotion:"Rennes 01"},
      {nom:"jeanDeRennes", prenom:"robert", promoId:5, promotion:"Rennes 02"},
      {nom:"jeanDeRennes", prenom:"robert", promoId:5, promotion:"Rennes 02"},
      {nom:"jeanDeCasablanca", prenom:"robert", promoId:3, promotion:"Casablanca 02"},
      {nom:"jeanDeCasablanca", prenom:"robert", promoId:4, promotion:"Casablanca 01"}

    ],
    Promotions: [
      {ville:"Paris", promoId:1, promotion:"Paris 01"},
      {ville:"Paris", promoId:2, promotion:"Paris 02"},
      {ville:"Casablanca", promoId:3, promotion:"Casablanca 02"},
      {ville:"Casablanca", promoId:4, promotion:"Casablanca 01"},
      {ville:"Rennes", promoId:5, promotion:"Rennes 02"},
      {ville:"Rennes", promoId:6, promotion:"Rennes 01"},
    ],
    filtreVille:'0',
    filtrePromo:0
  }

  filtre = (event) => {
    if(event.target.id === "selectVille"){
      this.setState({filtreVille: event.target.value})
    }
    else{
      this.setState({filtrePromo: event.target.value})
    }
  }

  handleDelete = () =>{
    alert('profil supprimé');
  }  

  render () {
    return (
      <Page title="Admin Accueil">
        <article className="admin_page">
          {/* <section className="admin_page">
            <section className="btn-group admin_page" role="promotions">
              <button className="btn btn-danger btn-lg dropdown-toggle admin_page" type="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" >
                    Paris
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Promo 1</a>
                <a className="dropdown-item" href="#">Promo 2</a>
                <a className="dropdown-item" href="#">Promo 3</a>
                <a className="dropdown-item" href="#">Promo 4</a>
              </div>
            </section>
            <section className="btn-group admin_page" role="promotions">
              <button className="btn btn-danger btn-lg dropdown-toggle admin_page" type="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" >
                    Rennes
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Promo 1</a>
                <a className="dropdown-item" href="#">Promo 2</a>
                <a className="dropdown-item" href="#">Promo 3</a>
                <a className="dropdown-item" href="#">Promo 4</a>
              </div>
            </section>
            <section className="btn-group admin_page" role="promotions">
              <button className="btn btn-danger btn-lg dropdown-toggle admin_page" type="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" >
                    Nantes
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Promo 1</a>
                <a className="dropdown-item" href="#">Promo 2</a>
                <a className="dropdown-item" href="#">Promo 3</a>
                <a className="dropdown-item" href="#">Promo 4</a>
              </div>
            </section>
            <section className="btn-group admin_page" role="promotions">
              <button className="btn btn-danger btn-lg dropdown-toggle admin_page" type="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" >
                    Casablanca
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Promo 1</a>
                <a className="dropdown-item" href="#">Promo 2</a>
                <a className="dropdown-item" href="#">Promo 3</a>
                <a className="dropdown-item" href="#">Promo 4</a>
              </div>
            </section>
            <section className="btn-group admin_page" role="promotions">
              <button className="btn btn-danger btn-lg dropdown-toggle admin_page" type="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false" >
                    Montréal
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Promo 1</a>
                <a className="dropdown-item" href="#">Promo 2</a>
                <a className="dropdown-item" href="#">Promo 3</a>
                <a className="dropdown-item" href="#">Promo 4</a>
              </div>
            </section>
          </section> */}
            <select defaultValue="0" className="custom-select" id="selectVille" onChange={this.filtre}>
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
                <Button btnType="annuler"><Link href="/utilisateur/MonProfil/mon_profil"><a>Voir Profil</a></Link></Button>
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
          </div>
        </article>

      </Page>
    )
  }
}

export default Admin
