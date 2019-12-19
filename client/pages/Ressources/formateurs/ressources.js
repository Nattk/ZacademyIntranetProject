import React, { Component } from 'react'
import Page from '../../../layouts/classic'
import Card from '../../../components/Card/card'
import Button from '../../../components/Boutons/Boutons'
import Link from 'next/link'
import Spinner from '../../../components/Spinner/spinner'
import { getAllRessources, deleteRessource } from '../../../services/ressources'
import userService from '../../../services/users'
import Modal from '../../../components/Modal/modal'

class Ressources extends Component {
  state = {
    ressources: [],
    user: null,
    promotion: '',
    ressourcesFiltered: [],
    ressourcesDispo: 0,
    formateurs: false,
    modalShow: false,
    ressourceId: ''
  }

  componentDidMount () {
    const user = JSON.parse(localStorage.getItem('user'))
    userService.setToken(user.token)
    userService.getAll().then(res => {
      this.setState({ user: res })
      if (this.state.user.role === 'formateur' || this.state.user.role === 'admin' || this.state.user.role === 'superadmin') {
        this.setState({ formateurs: true })
      }
      return getAllRessources()
    }).then(ress => {
      const ressForm = ress.data.filter(data => {
        if (data.user) {
          return data.user.role !== 'eleve'
        }
      })
      this.setState({ ressources: ressForm })
    })
      .catch(err => {
        alert(err)
      })
  }

  handleClose = () => {
    this.setState({ modalShow: false })
  }

  handleDelete = (ressId) => {
    this.setState({ modalShow: true })
    this.setState({ ressourceId: ressId })
  }

  delete = (id) => {
    let ressCopy = this.state.ressources
    deleteRessource(id).then(ressource => {
      ressCopy = ressCopy.filter(ress => ress.id !== id)
      this.setState({ ressources: ressCopy })
      this.setState({ modalShow: false })
      this.setState({ ressourceId: '' })
    }).catch(err => {
      alert('une erreur est survenue', err)
    })
  }

  render () {
    const ressources = this.state.ressourcesFiltered.length ? this.state.ressourcesFiltered : this.state.ressources
    let ressourcesCartes = null
    const confirm = (
      <div>
        <p>Etes vous sur de vouloir supprimer la ressource ?</p>
        <Button btnType="annuler" clicked={() => this.delete(this.state.ressourceId)}>Suppimer la ressource</Button>
      </div>
    )
    if (ressources.length) {
      ressourcesCartes = (
        ressources.map(ressource => (
          <Card styleName="ressource-carte d-flex flex-column" key={ressource.id}>
            <div className="d-flex flex-row">
              <div>
                <img
                  src="https://ca.slack-edge.com/TDKLZEH1B-UN6RVVAP3-g00f562b54f1-72"
                  alt="profile-user"
                  className="img-socialMedia"
                  aria-describedby="p1"
                />
              </div>
              <section className="d-flex flex-column ressource-details">

                <Link href={{ pathname: '../ressource-individuelle', query: { id: ressource.id } }}>
                  <h2><a tabIndex="0" title="Accéder à la ressource">{ressource.title}</a></h2>
                </Link>
                <i>{ressource.user ? ressource.user.firstName : ''} . {ressource.date.substring(0, 10)} . {ressource.promotion ? ressource.promotion.title : ''}</i>
              </section>
            </div>
            {
              this.state.formateurs &&
              <aside className="d-flex flex-row justify-content-end">
                <Button btnType="annuler" title="Supprimer la ressource" clicked={(ressId) => this.handleDelete(ressource.id)}>Supprimer</Button>
              </aside>
            }

          </Card>)))
    } else {
      ressourcesCartes = <Spinner/>
    }

    return (
      <Page title="Ressources" contextePage='Ressources formateurs'>
        <article className="ressources d-flex flex-column">
          <header className="d-flex flex-row justify-content-between align-items-center">
            <Link href="../ajouter-ressource">
              <a title="Ajouter une ressource" className="btn btn-success">
                Ajouter une ressource
              </a>
            </Link>
          </header>
          <aside className="align-self-stretch">
            <i>{ressources.length} ressources trouvées</i>
          </aside>
          <section className="ressources-list">
            {ressourcesCartes}
          </section>
          <footer className="d-flex align-items-end">
            <Link href="../ajouter-ressource">
              <a title="Ajouter une ressource" className="btn btn-success">
                  Ajouter une ressource
              </a>
            </Link>
          </footer>
        </article>

        <Modal
          show={this.state.modalShow}
	        onClose={this.handleClose}
	        titleModal="Demande de confirmation">{confirm}</Modal>
      </Page>
    )
  }
}

export default Ressources
