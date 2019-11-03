import React, { Component } from 'react'
import Page from '../../../layouts/classic'
import Button from '../../../components/Boutons/Boutons'
import Link from 'next/link'
import Modal from '../../../components/Modal/alert'

class AjouterRessources extends Component {

  state = {
    modalShow: false
  }

  handleValidation = () => {
    this.setState({modalShow: true})
    setTimeout(() => {
			this.setState({ modalShow: false })
			window.location.assign('./ressources')
		}, 5000)
  }

  render () {
    return (
      <Page title="Modifier Ressources">
        <article className="ajouterRessource">
          <h1>Modifier une ressource</h1>
          <section>
            <form className="form-group d-flex flex-column" aria-labelledby="ressource">
              <label for="titreRessource">Titre de la ressource</label>
              <input id="titreRessource" className="form-control" type="text" value="" placeholder="Apprendre le html en 5 min" aria-required="true"/>
              <label for="ressource">Ressource</label>
              <textarea id="ressource" className="form-control" aria-required="true">
                Laborum magna eu exercitation aliquip adipisicing velit dolor pariatur duis esse. Do est aliquip id velit. Elit pariatur irure et sint quis qui. Lorem eiusmod voluptate exercitation sunt elit non dolore dolore pariatur do incididunt. Velit ullamco sint sit qui cupidatat aute fugiat fugiat ex sint.
              </textarea>
              <label for="modules">Modules associé</label>
              <select id="modules" className="form-control" type="text" aria-required="true">
                <option value="HTML">HTML</option>
                <option value="CSS">Css</option>
                <option value="Javascript">Javascript</option>
              </select>
            </form>
            <div className="d-flex flex-row justify-content-end">
              <Button btnType="annuler"><Link href="./ressources"> Annuler</Link></Button>
              <Button btnType="valider" clicked={this.handleValidation}>Valider</Button>
            </div>
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
