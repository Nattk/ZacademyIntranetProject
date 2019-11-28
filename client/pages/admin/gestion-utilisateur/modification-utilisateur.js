import React, { Component } from 'react'
import Page from '../../../layouts/classic'
import Button from '../../../components/Boutons/Boutons'
import Alert from '../../../components/Modal/alert'

class ModificationUtilisateur extends Component {
	state = {
	  utilisateurs: [
	    {
	      name: 'Nattan',
	      lastName: 'Kifoyi',
	      email: 'kifoyinattan@gmail.com',
	      telephone: '063255810',
	      promotion: 'Promo paris 2',
	      role: 'élève',
	      userId: 1
	    }
	  ],
	  show: false
	}

	handleUpdate = () => {
	  this.setState({ show: true })
	}

	handleConfirmForm = () => {
	  window.location.assign('/admin/gestion-utilisateur/gestion-utilisateur')
	}

	handleClose = () => {
	  this.setState({ show: false })
	}

	previousPage = () => {
	  window.location.assign('/admin/gestion-utilisateur/gestion-utilisateur')
	}

	render () {
	  return (
	    <Page title="gestion Utilisateur">
	      <article className="gestionProgramme card" id="form_creation_utilisateur">
	        <header className="card-header text-center">Modification de l'utilisateur</header>
	        <form className="container">
	          <section className="section">
	            <div className="form-group">
	              <label for="username">Nom</label>
	              <input
	                type="text"
	                name="username"
	                className="form-control"
	                id="exampleFormControlInput1"
	                value={this.state.utilisateurs[0].name}
	              />
	            </div>
	            <div className="form-group">
	              <label for="userfirstname">Prenom</label>
	              <input
	                type="text"
	                name="userfirstname"
	                className="form-control"
	                id="exampleFormControlInput1"
	                value={this.state.utilisateurs[0].lastName}
	              />
	            </div>
	            <div className="form-group">
	              <label for="useremail">Email</label>
	              <input
	                type="email"
	                name="useremail"
	                className="form-control"
	                id="exampleFormControlInput1"
	                value={this.state.utilisateurs[0].email}
	              />
	            </div>
	            <div className="form-group">
	              <label for="userphone">Téléphone</label>
	              <input
	                type="Telephone"
	                name="userphone"
	                className="form-control"
	                id="exampleFormControlInput1"
	                value={this.state.utilisateurs[0].telephone}
	              />
	            </div>
	            <div className="form-group">
	              <label for="choices-groups">Selectionner une promotion</label>
	              <select
	                defaultValue="Paris_02"
	                className="form-control"
	                name="choices-groups"
	                id="choices-groups"
	              >
	                <optgroup label="Casablanca">
	                  <option value="Casablanca">Casablanca_01</option>
	                </optgroup>
	                <optgroup label="Montreal">
	                  <option value="Montreal">Montreal_01</option>
	                </optgroup>
	                <optgroup label="Paris">
	                  <option value="Paris">Paris_01</option>
	                  <option value="Paris_02">Paris_02</option>
	                  <option value="Paris">Paris_03</option>
	                </optgroup>
	                <optgroup label="Rennes">
	                  <option value="Paris">Rennes_01</option>
	                  <option value="Paris">Rennes_02</option>
	                  <option value="Paris">Rennes_03</option>
	                </optgroup>
	                <optgroup label="Singapor">
	                  <option value="Singapor">Singapor_01</option>
	                </optgroup>
	              </select>
	            </div>
	            <div className="form-group">
	              <label for="roles">Selectionner un rôle</label>
	              <select className="form-control" id="role">
	                <option value="Eleve">Eleve</option>
	                <option value="Formateur">Formateur</option>
	              </select>
	            </div>
	          </section>
	          <section
	            className="d-flex flex-row footer-programme-formulaire col-md-12 mb-5"
	            style={{ justifyContent: 'space-evenly' }}
	          >

	            <Button
	              btnType="annuler"
	              type="button"
	              clicked={this.previousPage}
	              className="btn btn-primary text-center button-cancel-programme"
	            >
								Annuler
	            </Button>

	            <Button
	              btnType="valider"
	              clicked={this.handleUpdate}

	            >
								Modifier
	            </Button>
	            {this.state.show ? (
	              <Alert
	                show={this.state.show}
	                handleClose={this.handleClose}

	                headerTitle="Modification utilisateur"
	                modalDescription="Etes vous sûr de vouloir modifier cet utilisateur ?"
	                modalHeader={true}
	                modalBody={true}
	                modalFooterRedirection
	                handleConfirmForm={this.handleConfirmForm}
	              />

	            ) : null
	            }

	          </section>
	        </form>
	      </article>
	    </Page>
	  )
	}
}
export default ModificationUtilisateur
