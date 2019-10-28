import React, { Component } from "react"
import Page from '../../../layouts/admin'
import Button from '../../../components/Boutons/Boutons'
import Link from 'next/link'

class UtilisateursGestion extends Component {
  state = {
    utilisateurs : [
      {name:"Nattan",lastName:"Kifoyi",promotion:"Promo Rio 1", role:"élève", userId:1},
      {name:"Nattan",lastName:"Kifoyi",promotion:"Promo Rio 1", role:"élève", userId:2},
      {name:"Nattan",lastName:"Kifoyi",promotion:"Promo Rio 1", role:"élève", userId:3}
    ]
  }

  handleDelete = (userId) =>{
    alert('Utilisateur supprimé !');
    const users = this.state.utilisateurs.filter(item => item.userId !== userId);
    this.setState({utilisateurs : users});

  }
  render () {
    return (
      <Page title="gestion Utilisateur">
      <article className="gestionProgramme card">
        <header className="card-header">
        Liste des Utilisateurs
        </header>
        <section className="card-body">
          <ul>
            {this.state.utilisateurs.map((utilisateur, index) =>(
              <li key={index} className="d-flex flex- justify-content-around align-items-baseline">
                <a href="#">{utilisateur.name} {utilisateur.lastName}</a>
                <Button btnType="annuler" clicked={(userId) => this.handleDelete(utilisateur.userId)}>Supprimer</Button>
                <Button btnType="modifier"><Link href="./modificationUtilisateur"><a>Modifier</a></Link></Button>
              </li>
            ))}
          </ul>
        </section>
        <footer className="d-flex flex-row align-items-end justify-content-center">
          <Link href="/admin/CreationUtilisateur/creation_utilisateur">
            <button type="button" className="btn btn-primary">
            Ajouter un utilisateur
            </button></Link>
        </footer>
      </article>
      </Page>
    )
  }
}
export default UtilisateursGestion
