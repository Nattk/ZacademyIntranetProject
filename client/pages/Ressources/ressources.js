import React, { Component } from 'react'
import Page from '../../layouts/classic'
import Card from '../../components/Card/card'
import Button from '../../components/Boutons/Boutons'
import Link from 'next/link'
import Spinner from '../../components/Spinner/spinner'
import { getAllRessources } from '../../services/ressources'
import userService from '../../services/users'

class Ressources extends Component {
  state = {
    ressources: [],
    user: null,
    promotion: '',
    ressourcesFiltered: [],
    ressourcesDispo: 0,
    formateurs: false
  }

  static getInitialProps ({ query }) {
	  return { query }
  }

  componentDidMount () {
    if (this.props.query.formateur) {
      this.setState({ formateurs: true })
    } else {
      this.setState({ formateurs: false })
    }
    const user = JSON.parse(localStorage.getItem('user'))
    userService.setToken(user.token)
    userService.getAll().then(res => {
      this.setState({ user: res })
    }).catch(err => {
      alert(err)
    })

    getAllRessources().then(ress => {
      console.table(ress.data)
      if (this.state.formateurs === true) {
        const ressForm = ress.data.filter(data => {
          if (data.user) {
            return data.user.role === 'formateur'
          }
        })
        this.setState({ ressources: ressForm })
      } else if (this.state.formateurs === false) {
        console.log('eleves')
        const ressEleve = ress.data.filter(data => {
          if (data.user.promotion) {
            return data.user.role === 'eleve' && data.user.promotion === this.state.user.promotion.title
          }
        })
        this.setState({ ressources: ressEleve })
      }
    })
      .catch(err => {
        alert('une erreur est survenue', err)
      })
  }

  handleDelete = (ressId) => {
    alert('ressource supprimé')
    const ress = this.state.ressources.filter(item => item.ressId !== ressId)
    this.setState({ ressources: ress })
  }

  render () {
    const ressources = this.state.ressourcesFiltered.length ? this.state.ressourcesFiltered : this.state.ressources
    let ressourcesCartes = null
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
                <Link href={ressource.url}>
                  <h2><a tabindex="0" title="Accéder à la ressource">{ressource.title}</a></h2>
                </Link>
                <i>{ressource.user ? ressource.user.firstName : ''} . 12 Nov 2019 . {ressource.promotion}</i>
              </section>
            </div>
            {
              this.state.formateur &&
              <aside className="d-flex flex-row justify-content-end">
                <Link href="./modifier-ressource"><a title="Modifier la ressource" className="btn btn-warning">Modifier</a></Link>
                <Button btnType="annuler" title="Supprimer la ressource" clicked={(ressId) => this.handleDelete(ressource.ressId)}>Supprimer</Button>
              </aside>
            }
          </Card>)))
    } else {
      ressourcesCartes = <Spinner/>
    }

    return (
      <Page title="Ressources" contextePage={`Ressources ${this.state.formateurs ? 'formateurs' : 'élèves'}`}>
        <article className="ressources d-flex flex-column">
          <header className="d-flex flex-row justify-content-between align-items-center">
            <Link href="./ajouter-ressource">
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
            <Link href="./ajouter-ressource">
              <a title="Ajouter une ressource" className="btn btn-success">
                  Ajouter une ressource
              </a>
            </Link>
          </footer>
        </article>
      </Page>
    )
  }
}

export default Ressources
