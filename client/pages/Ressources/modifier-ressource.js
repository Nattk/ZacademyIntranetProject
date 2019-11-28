import React, { Component } from 'react'
import Page from '../../layouts/classic'
import Button from '../../components/Boutons/Boutons'
import Link from 'next/link'
import Modal from '../../components/Modal/alert'

class AjouterRessources extends Component {
  state = {
    modalShow: false
  }

  handleValidation = () => {
    if (document.getElementById('titre').value !== '' && document.getElementById('ressource').value !== '') {
      event.preventDefault()
      this.setState({ modalShow: true })
      setTimeout(() => {
        this.setState({ modalShow: false })
        window.location.assign('/Ressources/ressources')
      }, 5000)
    }
  }

  render () {
    return (
      <Page title="Modifier Ressources" contextePage="Modifier une ressource">
        <article id="ajouter-ressource">
          <section>
            <form className="form-group d-flex flex-column" novalidate>
              <label for="titre">Titre de la ressource</label>
              <div class="d-flex flex-row">
                <input id="titre" className="form-control" type="text" placeholder="Apprendre le html en 5 min" aria-required="true" required/>
                <span>&nbsp;*</span>
              </div>
              <label for="ressource">Ressource</label>
              <div className="d-flex flex-row">
                <textarea id="ressource" className="form-control" aria-required="true" required>
                  Laborum magna eu exercitation aliquip adipisicing velit dolor pariatur duis esse. Do est aliquip id velit. Elit pariatur irure et sint quis qui. Lorem eiusmod voluptate exercitation sunt elit non dolore dolore pariatur do incididunt. Velit ullamco sint sit qui cupidatat aute fugiat fugiat ex sint.
                </textarea>
                <span>&nbsp;*</span>
              </div>
              <label for="modules">Modules associé</label>
              <select id="modules" className="form-control" type="text" aria-required="true" required>
                <option value="HTML">HTML</option>
                <option value="CSS">Css</option>
                <option value="Javascript">Javascript</option>
              </select>
              <div className="d-flex flex-row justify-content-end">
                <Button btnType="annuler" title="annuler"><Link href="./ressources"> Annuler</Link></Button>
                <Button btnType="valider" title="valider" submit={true} clicked={this.handleValidation}>Valider</Button>
              </div>
            </form>
          </section>
        </article>
        {this.state.modalShow ? (
          <Modal show={this.state.modalShow} modalTitle="Ressource Modifié avec succés" />
        ) : null}
      </Page>
    )
  }
}
export default AjouterRessources
