import React, { Component } from 'react'
import Page from '../../../layouts/classic'
import Button from '../../../components/Boutons/Boutons'

class AjouterRessources extends Component {
  handleValidation () {

  }

  render () {
    return (
      <Page title="Ajouter Ressources">
        <article className="ajouterRessource">
          <h1>Ajouter une ressource</h1>
          <section>
            <form className="form-group d-flex flex-column">
              <label for="titre">Titre</label>
              <div className="d-flex flex-row">
                <input id="titre" className="form-control" type="text" required/>
                <span>&nbsp;*</span>
              </div>
              <label for="ressource">Ressource</label>
              <div className="d-flex flex-row">
                <textarea for="ressource" className="form-control" required>
                </textarea>
                <span>&nbsp;*</span>
              </div>
              <label for="modules" >Modules associés</label>
              <select id="modules" className="form-control" type="text" required>
                <option value="HTML">HTML</option>
                <option value="CSS">Css</option>
                <option value="Javascript">Javascript</option>
              </select>
              <Button btnType="valider" submit={true} clicked={this.handleValidation}>Ajouter</Button>
            </form>
          </section>
        </article>
      </Page>
    )
  }
}
export default AjouterRessources
