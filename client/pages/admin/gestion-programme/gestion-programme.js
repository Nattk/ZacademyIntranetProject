import React, { Component } from 'react'
import Page from '../../../layouts/admin'
import { getModules } from '../../../services/creation-programme'
import Link from 'next/link'
import Spinner from '../../../components/Spinner/spinner'

class ProgrammeGestion extends Component {
  state = {
    programmes: [],
    show: false
  }

  componentDidMount () {
    getModules('programmes').then(programmes => {
      this.setState({ programmes: programmes.data })
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
    const programmes = this.state.programmes
    const prog = this.state.programmes.filter(item => item.progId === progId)
    programmes.push(prog[0])
    this.setState({ programmes: programmes })
  }

  render () {
    let listeProgramme = null
    if (this.state.programmes.length !== 0) {
      listeProgramme = (
        <section className="card-body liste-programme">
          <ul>
            {this.state.programmes.map(programme => (
              <li key={programme.id} className="d-flex flex- justify-content-around align-items-baseline">
                <Link as={`/admin/gestion-programme/programme/${programme.title}`} href={{ pathname: './programme', query: { id: programme.id } }}>
                  <a title={`Voir les détails de ${programme.title}`}>{programme.title}</a>
                </Link>
                {/* <Button btnType="dupliquer" clicked={(progId) => this.handleDuplication(programme.progId)}><a>Dupliquer</a></Button>
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
            } */}
              </li>
            ))}
          </ul>
        </section>
      )
    } else {
      listeProgramme = <Spinner className="spinner"/>
    }
    return (
      <Page title="Gestion des programmes" contextePage="Liste des programmes">
        <article id="liste-programme" className="d-flex flex-column align-items-center">
          <div className="card">
            <header className="card-header">
            Liste des programmes
            </header>
            {listeProgramme}
            {/* <footer className="d-flex flex-row align-items-end justify-content-center">
              <a href="/admin/creation-programme/creation-programme" title="creation-programme" className="link-button-creation" >
              Ajouter un programme
              </a>
            </footer> */}
          </div>
        </article>
      </Page>
    )
  }
}
export default ProgrammeGestion
