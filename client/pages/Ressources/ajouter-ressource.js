import React, { Component } from 'react'
import Page from '../../layouts/classic'
import Button from '../../components/Boutons/Boutons'
import Modal from '../../components/Modal/modal'
import Link from 'next/link'
import { postRessources } from '../../services/ressources'
import userService from '../../services/users'

class AjouterRessources extends Component {
    state = {
      modalShow: false,
      titre: '',
      contenu: '',
      user: null
    }

    componentDidMount () {
      const user = JSON.parse(localStorage.getItem('user'))
      userService.setToken(user.token)
      userService.getAll().then(res => {
        this.setState({ user: res })
      }).catch(err => {
        alert(err)
      })
    }

    handleChange = (event) => {
      if (event.id === 'titre') {
        this.setState({ titre: event.value })
      } else if (event.id === 'ressource') {
        this.setState({ contenu: event.value })
      }
    }

    handleClose = () => {
      this.setState({ modalShow: false })
    }

    handleValidation = () => {
      this.setState({ modalShow: true })
    }

    handleCreate = () => {
      const user = JSON.parse(localStorage.getItem('user'))
      const token = user.token
      const data = {
        title: this.state.titre,
        content: this.state.contenu,
        url: this.state.titre,
        user: this.state.user.id,
        promotionId: this.state.user.promotion.id
      }
      postRessources(token, data).then(response => {
        console.log(response)
      })
        .catch(err => {
          console.log(err)
        })
    }

    render () {
      const modalConfirm = (
        <div>
          <p>{this.state.titre}</p>
          <p>{this.state.contenu}</p>
          <Button clicked={this.handleCreate} btnType="valider">Créer la ressource</Button>
        </div>
      )

      return (
        <Page title="Ajouter Ressources" contextePage="Ajouter une ressource">
          <article id="ajouter-ressource">
            <section>
              <form className="form-group d-flex flex-column">
                <label htmlFor="titre">Titre</label>
                <div className="d-flex flex-row">
                  <input id="titre" className="form-control" type="text" required onChange = {(event) => this.handleChange(event.target)}/>
                  <span>&nbsp;*</span>
                </div>
                <label htmlFor="ressource">Ressource</label>
                <div className="d-flex flex-row">
                  <textarea id="ressource" className="form-control" required onChange = {(event) => this.handleChange(event.target)}>
                  </textarea>
                  <span>&nbsp;*</span>
                </div>
                <div className="d-flex flex-row justify-content-end">
                  <Button btnType="valider" title="Ajouter une ressource" clicked={this.handleValidation}>Ajouter</Button>
                  <Link href="./ressources"><a title="Annuler la modification" className="btn btn-danger">Annuler</a></Link>
                </div>
              </form>
            </section>
          </article>

          <Modal
            show={this.state.modalShow}
	        onClose={this.handleClose}
	        titleModal="Demande de confirmation">{modalConfirm}</Modal>
        </Page>
      )
    }
}
export default AjouterRessources
