import React, { Component } from 'react'
import Page from '../../../layouts/admin'
import Button from '../../../components/Boutons/Boutons'
import Alert from '../../../components/Modal/alert'
class CreaUtilisateur extends Component {
  state = {

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
      <Page title="Création Utilisateur">
        <article className="gestionProgramme card" id="form_creation_utilisateur">
          <header className="card-header text-center">
            Creation un utilisateur
          </header>
          <form className="container" >
            <section className="section">
              <div className="form-group">
                <label htmlFor="username">Nom</label>
                <input type="text" name="username" className="form-control" id="exampleFormControlInput1" placeholder="Nom"></input>
              </div>
              <div className="form-group">
                <label htmlFor="userfirstname">Prenom</label>
                <input type="text" name="userfirstname" className="form-control" id="exampleFormControlInput1" placeholder="Prénom"></input>
              </div>
              <div className="form-group">
                <label htmlFor="useremail">Email</label>
                <input type="email" name="useremail" className="form-control" id="exampleFormControlInput1" placeholder="Email"></input>
              </div>
              <div className="form-group">
                <label htmlFor="userphone">Téléphone</label>
                <input type="Telephone" name="userphone" className="form-control" id="exampleFormControlInput1"
                  placeholder="Telephone"></input>
              </div>
              <div className="form-group">
                <label htmlFor="choices-groups">Selectionner une promotion</label>
                <select className="form-control" name="choices-groups" id="choices-groups">
                  <optgroup label="Casablanca">
                    <option value="Casablanca">Casablanca_01</option>
                  </optgroup>
                  <optgroup label="Montreal">
                    <option value="Montreal">Montreal_01</option>
                  </optgroup>
                  <optgroup label="Paris">
                    <option value="Paris">Paris_01</option>
                    <option value="Paris">Paris_02</option>
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
              <div classNameName="form-group">
                <label htmlFor="roles">Selectionner un rôle</label>
                <select classNameName="form-control" id="role">
                  <option value="Eleve">Eleve</option>
                  <option value="Formateur">Formateur</option>
                </select>
              </div>
            </section>
            <section className="d-flex flex-row footer-programme-formulaire">

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
                Ajout utilisateur
              </Button>
              {this.state.show ? (
                <Alert
                  show={this.state.show}
                  handleClose={this.handleClose}
                  headerTitle="Création utilisateur"
                  modalDescription="Confirmer la création de l' utilisateur"
                  modalHeader={true}
                  modalBody={true}
                  modalFooterRedirection
                  handleConfirmForm={this.handleConfirmForm}
                />
              ) : null}
            </section>
          </form>
        </article>
      </Page>
    )
  }
}
export default CreaUtilisateur
