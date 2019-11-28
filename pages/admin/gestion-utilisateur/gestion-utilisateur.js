import React, { Component } from 'react'
import Page from '../../../layouts/classic'
import Button from '../../../components/Boutons/Boutons'
import Alert from '../../../components/Modal/alert'
class UtilisateursGestion extends Component {
	state = {
	  utilisateurs: [
	    { name: 'Nattan', lastName: 'Kifoyi', promotion: 'Promo Rio 1', role: 'élève', userId: 1 },
	    { name: 'Nattan', lastName: 'Kifoyi', promotion: 'Promo Rio 1', role: 'élève', userId: 2 },
	    { name: 'Nattan', lastName: 'Kifoyi', promotion: 'Promo Rio 1', role: 'élève', userId: 3 }
	  ],
	  modalShow: false,
	  show: false
	}

	handleModal = (event) => {
	  this.setState({ modalShow: true })
	  event.preventDefault()
	}

	handleDelete = (userId) => {
	  const users = this.state.utilisateurs.filter((item) => item.userId !== userId)
	  this.setState({ utilisateurs: users })
	  this.setState({ modalShow: false })

	  event.preventDefault()
	}

	handleClose = (event) => {
	  this.setState({ modalShow: false })

	  event.preventDefault()
	}

	render () {
	  return (
	    <Page title="gestion Utilisateur">
	      <article className="gestionProgramme card">
	        <header className="card-header">Liste des Utilisateurs</header>
	        <section className="card-body">
	          <ul>
	            {this.state.utilisateurs.map((utilisateur, index) => (
	              <li key={index} className="d-flex flex- justify-content-around align-items-baseline">
	                <a href="#">
	                  {utilisateur.name} {utilisateur.lastName}
	                </a>
	                <Button btnType="annuler" clicked={this.handleModal}>
										Supprimer
	                </Button>
	                {this.state.modalShow ? (
	                  <Alert
	                    show={this.state.modalShow}
	                    handleClose={this.handleClose}
	                    handleDelete={() => this.handleDelete(utilisateur.userId)}
	                    headerTitle="Suppression utilisateur"
	                    modalDescription="Etes vous sûr de vouloir supprimer cet utilisateur ?"
	                    modalHeader={true}
	                    modalBody={true}
	                    modalFooter={true}
	                  />
	                ) : null}

	                <a href="/admin/gestion-utilisateur/modification-utilisateur" title="modification-utlisateur" className="link-button-valider" >
										Modifier
	                </a>

	              </li>
	            ))}
	          </ul>
	        </section>
	        <footer className="d-flex flex-row align-items-end justify-content-center">

	          <a href="/admin/creation-utilisateur/creation-utilisateur" title="modification-utlisateur" className="link-button-creation" >
							Ajouter un utilisateur
	          </a>

	        </footer>
	      </article>
	    </Page>
	  )
	}
}
export default UtilisateursGestion
