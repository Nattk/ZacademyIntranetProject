import React, { Component } from 'react'
import Page from '../../../layouts/classic'
import Button from '../../../components/Boutons/Boutons'

class AjouterRessources extends Component {
  handleValidation () {
    alert('Votre Ressource a été ajouté')
  }

  render () {
    return (
      <Page title="Ajouter Ressources">
        <article className="ajouterRessource">
          <h1>Ajouter une ressource</h1>
          <section>
            <form className="form-group d-flex flex-column">
              <label>Titre</label>
              <input className="form-control" type="text"/>
              <label>Ressource</label>
              <textarea className="form-control">
              </textarea>
              <label>Mots Clé</label>
              <input className="form-control" type="text"/>
            </form>
            <Button btnType="valider" clicked={this.handleValidation}>Ajouter</Button>
          </section>
        </article>
      </Page>
    )
  }
}
export default AjouterRessources
