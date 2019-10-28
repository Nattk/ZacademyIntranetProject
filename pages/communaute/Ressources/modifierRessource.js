import React, { Component } from 'react'
import Page from '../../../layouts/classic'
import Button from '../../../components/Boutons/Boutons'
import Link from 'next/link'

class AjouterRessources extends Component {
  handleValidation () {
    alert('Votre Ressource a été Modifié')
  }

  render () {
    return (
      <Page title="Modifier Ressources">
        <article className="ajouterRessource">
          <h1>Modifier une ressource</h1>
          <section>
            <form className="form-group d-flex flex-column">
              <label>Titre</label>
              <input className="form-control" type="text" value="Apprendre le HTML en 5 min"/>
              <label>Ressource</label>
              <textarea className="form-control">
                Laborum magna eu exercitation aliquip adipisicing velit dolor pariatur duis esse. Do est aliquip id velit. Elit pariatur irure et sint quis qui. Lorem eiusmod voluptate exercitation sunt elit non dolore dolore pariatur do incididunt. Velit ullamco sint sit qui cupidatat aute fugiat fugiat ex sint.
              </textarea>
              <label>Mots Clé</label>
              <input className="form-control" type="text" value="HTML CSS"/>
            </form>
            <Button btnType="annuler"><Link href="./ressources"> Annuler</Link></Button>
            <Button btnType="valider" clicked={this.handleValidation}>Valider</Button>
          </section>
        </article>
      </Page>
    )
  }
}
export default AjouterRessources
