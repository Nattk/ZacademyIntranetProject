import React, { Component } from 'react'
import Page from '../../../layouts/admin'
import Button from '../../../components/Boutons/Boutons'
import Alert from '../../../components/Modal/alert'
import userService from '../../../services/users'
class UtilisateursGestion extends Component {
	state = {
	  utilisateurs: [],
	  modalShow: false,
	  userToDelete: '',
	  show: false
	}

	componentDidMount () {
	  userService.getAll().then(data => this.setState({ utilisateurs: data }))
	  }

	handleModal = (id) => {
	  this.setState({ userToDelete: id })
	  this.setState({ modalShow: true })
	  event.preventDefault()
	}

	handleDelete = (e, id) => {
	  e.preventDefault()
	  userService.remove(this.state.userToDelete)
	  userService.getAll().then(data => this.setState({ utilisateurs: data }))
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
	            {this.state.utilisateurs.map((utilisateur, index) => {
	              return (
	              <li key={index} className="d-flex flex- justify-content-around align-items-baseline">
	                <a href="#">
	                  {utilisateur.firstName} {utilisateur.lastName}
	                </a>
	                <Button btnType="annuler" clicked={() => this.handleModal(utilisateur.id)}>
										Supprimer
	                </Button>
	                {this.state.modalShow ? (
	                  <Alert
	                    show={this.state.modalShow}
	                    handleClose={this.handleClose}
	                    handleDelete={e => this.handleDelete(e, utilisateur.id)}
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
	            )
	            })}
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
