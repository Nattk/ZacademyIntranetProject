import React, { Component } from 'react'
import Page from '../../../layouts/admin'
import Button from '../../../components/Boutons/Boutons'
import Alert from '../../../components/Modal/alert'
class ModificationProgramme extends Component {
	state = {
	  programme: [{ name: 'Developpeur Javascript' }],
	  show: false
	}

	handleUpdate = () => {
	  this.setState({ show: true })
	}

	handleConfirmForm = () => {
	  window.location.assign('/admin/gestion-programme/gestion-programme')
	}

	handleClose = () => {
	  this.setState({ show: false })
	}

	previousPage = () => {
	  window.location.assign('/admin/gestion-programme/gestion-programme')
	}

	render () {
	  return (
	    <Page title="Modification programme">
	      <article className="gestionProgramme card" id="form_creation_programme">
	        <header className="card-header text-center">Modification programme</header>
	        <form className="container">
	          <section className="section">
	            <div className="form-group">
	              <label htmlFor="programtitle">Titre</label>
	              <br />
	              <input
	                type="text"
	                name="programtitle"
	                className="form-control"
	                id="exampleFormControlInput1"
	                value={this.state.programme[0].name}
	              />
	            </div>
	            <div data-test-hook="groups">
	              <label htmlFor="modules">Choisir module(s)</label>
	              <select className="form-control" name="modules" id="choices-groups" multiple>
	                <optgroup label="DEVOPS">
	                  <option value="Paris">Linux</option>
	                  <option value="Lyon">Mac</option>
	                </optgroup>
	                <optgroup label="JavaScript">
	                  <option value="JavaScript">JavaScript</option>
	                  <option value="React">React</option>
	                  <option value="Node">Node</option>
	                </optgroup>
	                <optgroup label="Basic">
	                  <option value="HTML">HTML</option>
	                  <option value="CSS">CSS</option>
	                  <option value="TypeScript">TypeScript</option>
	                </optgroup>
	                <optgroup label="Autres">
	                  <option value="Java">Java</option>
	                  <option value="Python">Pyhton</option>
	                  <option value="PHP">PHP</option>
	                </optgroup>
	              </select>
	            </div>
	            <br />
	            <div className="input-group">
	              <div className="input-group-prepend">
	                <span className="input-group-text description-programme-span">Description</span>
	              </div>
	              <textarea className="form-control" name="description" aria-label="With textarea" />
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
								Modifier
	            </Button>
	            {this.state.show ? (
	              <Alert
	                show={this.state.show}
	                handleClose={this.handleClose}

	                headerTitle="Modification programme"
	                modalDescription="Etes vous sûr de vouloir modifier ce programme ?"
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
export default ModificationProgramme
