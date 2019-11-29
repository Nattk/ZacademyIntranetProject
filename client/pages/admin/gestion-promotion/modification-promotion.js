import React, { Component } from 'react'
import Page from '../../../layouts/admin'
import Button from '../../../components/Boutons/Boutons'
import Alert from '../../../components/Modal/alert'
class ModificationPromotion extends Component {
  state = {
    promotions: [
      { ville: 'Rio de Janeiro', name: 'Promo Rio 1', dateDebut: '10/10/2019', dateFin: '10/01/2019', promoId: 1 }
    ],
    show: false
  }

  handleUpdate = () => {
    this.setState({ show: true })
  }

  handleConfirmForm = () => {
    window.location.assign('/admin/gestion-promotion/gestion-promotion')
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  previousPage = () => {
    window.location.assign('/admin/gestion-promotion/gestion-promotion')
  }

  render () {
    return (
      <Page title="Modification Promotion">
        <article class="gestionProgramme card" id="form_creation_promotion">
          <header class="card-header text-center">
            Modifier une promotion
          </header>
          <form class="container" >
            <section class="section">

              <div class="form-group">
                <label for="titre_promotion">Titre</label>
                <input type="text" name="titre_promotion" class="form-control" id="exampleFormControlInput1"
                  value={this.state.promotions.name}></input>
              </div>
              <div class="form-group">
                <label for="ville">Selectionner Ville</label>
                <select class="form-control" name="ville" id="exampleFormControlSelect1">
                  <optgroup label=" France">
                    <option value="Paris">Paris</option>
                    <option value="Lyon">Lyon</option>
                    <option value="Nantes">Nantes</option>
                    <option value="Rennes">Rennes</option>
                    <option value="Lille">Lille</option>
                    <option value="Toulouse">Toulouse</option>
                  </optgroup>
                  <optgroup label="Canada">
                    <option value="Montreal">Montreal</option>
                  </optgroup>
                  <optgroup label="Singapor">
                    <option value="Singapor">Singapor</option>
                  </optgroup>
                  <optgroup label="Maroc">
                    <option value="Casablanca">Casablanca</option>
                  </optgroup>

                </select>
              </div>
              <div data-test-hook="groups">
                <label for="programme">Choisir Programme</label>
                <select class="form-control" name="programme" id="programme" multiple>
                  <optgroup label="Front-End">
                    <option value="JavaScript">JavaScript</option>
                    <option value="CSS Overlord">CSS Overlord</option>
                  </optgroup>
                  <optgroup label="Back-end">
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                  </optgroup>
                  <optgroup label="DEVOPS">
                    <option value="Java">Docker Jenkins K8S</option>
                  </optgroup>
                  <optgroup label="Marketing">
                    <option value="Bullshit">Marketing web</option>
                    <option value="Other Bullshit">Marketing</option>
                  </optgroup>
                </select>
              </div><br></br>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text description-programme-span">Description</span>
                </div>
                <textarea class="form-control" aria-label="With textarea"></textarea>
              </div>
              <div class="form-group">
                <label>Debut formation</label>
                <input type="date" name="bday" value="2019-10-10" max="3000-12-31" min="1000-01-01" class="form-control"></input>
              </div>
              <div class="form-group">
                <label>Fin formation</label>
                <input type="date" name="bday" value="2019-01-10" min="1000-01-01" max="3000-12-31" class="form-control"></input>
              </div>
            </section>
            <section class="d-flex flex-row footer-programme-formulaire">

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

                  headerTitle="Modification promotion"
                  modalDescription="Etes vous sûr de vouloir modifier cette promotion ?"
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
export default ModificationPromotion
