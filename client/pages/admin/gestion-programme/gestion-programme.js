import React, { Component } from 'react'
import Page from '../../../layouts/admin'
import Button from '../../../components/Boutons/Boutons'
import Alert from '../../../components/Modal/alert'
import { getModules } from '../../../services/creation-programme'

class ProgrammeGestion extends Component {
  state = {
    programmes: [],
    show: false
  }

  componentDidMount () {
    getModules('programmes').then(programmes => {
      console.log(programmes.data)
      this.setState({ programmes: programmes.data })
    }).catch(err => {
      console.log(err)
    })
  }

  handleModal = (event) => {
    this.setState({ show: true })
    event.preventDefault()
  }

  handleDelete = (progId) => {
    const prog = this.state.programmes.filter(item => item.progId !== progId)
    this.setState({ programmes: prog })
    this.setState({ show: false })

    event.preventDefault()
  }

  handleClose = (event) => {
    this.setState({ show: false })

    event.preventDefault()
  }

  handleDuplication = (progId) => {
    alert('Programme  duppliqué !')
    const programmes = this.state.programmes
    const prog = this.state.programmes.filter(item => item.progId === progId)
    programmes.push(prog[0])
    this.setState({ programmes: programmes })
  }

  render () {
    return (
      <Page title="Gestion des programmes">
        <article className="gestionProgramme card">
          <header className="card-header">
            Liste des programmes
          </header>
          <section className="card-body">
            <ul>
              {this.state.programmes.map(programme => (
                <li key={programme.id} className="d-flex flex- justify-content-around align-items-baseline">
                  <a href="#">{programme.title}</a>
                  <Button btnType="dupliquer" clicked={(progId) => this.handleDuplication(programme.progId)}><a>Dupliquer</a></Button>
                  <Button btnType="annuler" clicked={this.handleModal}>Supprimer</Button>
                  <a href="/admin/gestion-programme/modification-programme" title="modification-programme" className="link-button-valider" >
                    Modifier
                  </a>
                  {this.state.show ? (
                    <Alert
                      show={this.state.show}
                      handleClose={this.handleClose}
                      handleDelete={() => this.handleDelete(programme.progId)}
                      headerTitle="Suppression programme"
                      modalDescription="Etes vous sûr de vouloir supprimer ce programme ?"
                      modalHeader={true}
                      modalBody={true}
                      modalFooter={true}
                    />
                  ) : null
                  }
                </li>
              ))}
            </ul>
          </section>
          <footer className="d-flex flex-row align-items-end justify-content-center">

            <a href="/admin/creation-programme/creation-programme" title="creation-programme" className="link-button-creation" >
              Ajouter un programme
            </a>
          </footer>
        </article>
      </Page>
    )
  }
}
export default ProgrammeGestion
