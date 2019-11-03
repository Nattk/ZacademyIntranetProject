import React, { Component } from 'react'
import Page from '../../../layouts/classic'
import Button from '../../../components/Boutons/Boutons'
import Modal from '../../../components/Modal/alert'
import Link from 'next/link'

class AjouterRessources extends Component {
    state = {
      modalShow: false
    }

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
              <div class="d-flex flex-row justify-content-end">
                <Button btnType="valider" title="ajouter une ressource" submit={true} clicked={this.handleValidation}>Ajouter</Button>
                <Button btnType="annuler" title="annuler"> <Link href="./ressources"><a>Annuler</a></Link></Button>
              </div>
            </form>
          </section>
        </article>
        {this.state.modalShow ? (
          <Modal show={this.state.modalShow} modalTitle="La ressource a été ajouté avec succés" />
        ) : null}
      </Page>
    )
  }
}
export default AjouterRessources
