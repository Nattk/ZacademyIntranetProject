import React, { Component } from 'react'
import Page from '../../../layouts/admin'
import Button from '../../../components/Boutons/Boutons'
import axios from 'axios'
import Modal from '../../../components/Modal/modal'
import Router from 'next/router'
import { Collapse } from 'react-collapse'
// import Select from 'react-select'
import { getAll, create, addToProgram, getItem } from '../../../services/creation-programme'
import AllNotification from '../../../components/Notifications/notifications'

class CreaProgramme extends Component {
  state = {
    programmeId: '',
    programme: '',
    title: '',
    titleMod: '',
    titleSmod: '',
    titleSeq: '',
    moduleId: '',
    smoduleId: '',
    message: '',
    etapes: 1,
    collapseMod: true,
    collapseSMod: false,
    collapseSeq: false,
    modalShow: false,
    notifShow: false
  }

  componentDidMount () {
    axios.get('http://localhost:3333/api/modules')
      .then(modules => {
        this.setState({ modules: modules.data })
      })
      .catch(err => {
        alert(err)
      })
  }

  handleSelect = (newValue, action) => {
    switch (action.action) {
      case 'select-option':
        if (action.name === 'modules') {
          this.setState({ moduleId: newValue.id })
        } else if (action.name === 'sousmodules') {
          this.setState({ smoduleId: newValue.id })
        }
        this.setState({ selected: newValue })
        break
      case 'remove-value':
        if (action.name === 'modules') {
          this.setState({ moduleId: newValue.id })
        } else if (action.name === 'sousmodules') {
          this.setState({ smoduleId: newValue.id })
        }
        this.setState({ selected: newValue })
        break
      case 'clear':
        this.setState({ selected: '' })
        break
      default:
        break
    }
  }

  handleCollapse (name) {
    if (name === 'module') {
      this.setState({ collapseMod: !this.state.collapseMod })
    } else if (name === 'sousModule') {
      this.setState({ collapseSMod: !this.state.collapseSMod })
    } else if (name === 'sequence') {
      this.setState({ collapseSeq: !this.state.collapseSeq })
    }
  }

  handleConfirmForm = () => {
    event.preventDefault()
    Router.push('/admin/gestion-programme/gestion-programme')
  }

  handleStep = (event) => {
    event.preventDefault()
    if (this.state.etapes === 1) {
      this.handleProgram()
      this.setState({ etapes: this.state.etapes + 1 })
      getAll().then(axios.spread((modules, sousModules, sequences) => {
        this.setState({ modules: modules.data })
        this.setState({ sousmodules: sousModules.data })
        this.setState({ sequences: sequences.data })
      })).catch(err => {
        alert(err, 'err')
      })
    }
  }

  handleRedirection = () => {
    event.preventDefault()
    Router.push('/admin/gestion-programme/gestion-programme')
  }

  handleCreate = (name) => {
    event.preventDefault()
    if (name === 'modules') {
      create(name, this.state.titleMod)
        .then(response => {
          return addToProgram(response.data.id, name, this.state.programmeId)
        }).then(response => {
          return getItem('programmes', this.state.programmeId)
        })
        .then(programme => {
          const notifMessage = `Le module ${this.state.titleMod} a été ajouté au programme.
                                il est sélectionnable dans la partie sous module`
          this.setState({ programme: programme.data })
          this.setState({ message: notifMessage })
          this.setState({ notifShow: true })
        })
        .catch(err => {
          alert(err, 'handleCreate')
        })
    } else if (name === 'sousmodules') {
      create(name, this.state.titleSMod)
        .then(response => {
          return addToProgram(response.data.id, name, this.state.moduleId)
        }).then(response => {
          return getItem('programmes', this.state.programmeId)
        })
        .then(programme => {
          const notifMessage = `Le Sous Module ${this.state.titleSmod} a bien été ajouté au module
                                il est sélectionnable dans la partie Séquence `
          this.setState({ programme: programme.data })
          this.setState({ message: notifMessage })
          this.setState({ notifShow: true })
        })
        .catch(err => {
          alert(err, 'handleCreate')
        })
    } else if (name === 'sequences') {
      create(name, this.state.titleSeq)
        .then(response => {
          return addToProgram(response.data.id, name, this.state.smoduleId)
        }).then(response => {
          return getItem('programmes', this.state.programmeId)
        })
        .then(programme => {
          const notifMessage = `La Séquence ${this.state.titleSeq} a bien été ajouté au Sous module`
          this.setState({ programme: programme.data })
          this.setState({ message: notifMessage })
          this.setState({ notifShow: true })
        })
        .catch(err => {
          alert(err, 'handleCreate')
        })
    }
  }

  handleChange = (event) => {
    if (event.name === 'titre') {
      this.setState({ title: event.value })
    } else if (event.name === 'modules') {
      this.setState({ titleMod: event.value })
    } else if (event.name === 'sousmodules') {
      this.setState({ titleSMod: event.value })
    } else if (event.name === 'sequences') {
      this.setState({ titleSeq: event.value })
    }
  }

  handleProgram = () => {
    axios.post('http://localhost:3333/api/programmes', { title: this.state.title })
      .then(response => {
        this.setState({ programmeId: response.data.id })
      })
      .catch(err => {
        alert('Une erreur est survenue', err)
      })
  }

  endProgram = (event) => {
    event.preventDefault()
    axios.get(`http://localhost:3333/api/programmes/${this.state.programmeId}`)
      .then(programme => {
        this.setState({ programme: programme.data })
        this.setState({ modalShow: !this.state.modalShow })
      })
      .catch(err => {
        alert(err, 'Une erreur est survenue')
      })
  }

  handleClose = () => {
	  this.setState({ modalShow: false })
  }

  handleChangeRadio = (event) => {
    if (event.target.name === 'modules') {
      this.setState({ moduleId: event.target.value })
    } else {
      this.setState({ smoduleId: event.target.value })
    }
  }

  render () {
    let creationProgramme = null
    let modalConfirm = null
    if (this.state.programme !== '') {
      modalConfirm = (
        <div className="modal-contenu d-flex flex-column">
          <h2>Création du programme : {this.state.programme.title}</h2>
          <ul>
            {
              this.state.programme.modules.map(mod => (
                <li key={mod.id}>{mod.title}
                  <ul>
                    {mod.sousmodules.map(sousMod => (
                      <li key={sousMod.id}>{sousMod.title}
                        <ul>
                          {sousMod.sequences.map(seq => (
                            <li key={seq.id}>{seq.title}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
              ))
            }
          </ul>
          <Button clicked={this.handleRedirection} btnType="valider">Creér le programme</Button>
        </div>
      )
    }

    if (this.state.etapes === 1) {
      creationProgramme = (
        <React.Fragment>
          <form className="container" >
            <section className="section">
              <div className="form-group">
                <label htmlFor="titre">Titre</label><br></br>
                <input type="text" name="titre" required className="form-control" id="exampleFormControlInput1" onChange={e => this.handleChange(e.target)}
                  placeholder="Intitulé du programme" />
              </div>
            </section>
          </form>
          <Button
            btnType="valider"
            clicked={(event) => this.handleStep(event)}
            className="step-button"
          >
            Etape suivante
          </Button>
        </React.Fragment>
      )
    } else if (this.state.etapes === 2) {
      creationProgramme = (
        <React.Fragment>
          <section className="collapse-button d-flex flex-row justify-content-between" onClick={(type) => this.handleCollapse('module') }>
            <p>Modules</p>
            { this.state.collapseMod ? <i className="fas fa-sort-up"></i> : <i className="fas fa-sort-down"></i>}
          </section>
          <Collapse isOpened={this.state.collapseMod}>
            <form className="container">
              <h2>Créer un module</h2>
              <section className="d-flex flex-row">
                <input type="text" placeholder="module" name="modules" onChange={() => this.handleChange(event.target)}/>
                <Button btnType="valider" className="add-item" clicked={(name) => this.handleCreate('modules')}>Ajouter au programme</Button>
              </section>
            </form>
          </Collapse>

          <section className="collapse-button d-flex flex-row justify-content-between" onClick={(type) => this.handleCollapse('sousModule') }>
            <p>Sous Modules</p>
            { this.state.collapseSMod ? <i className="fas fa-sort-up"></i> : <i className="fas fa-sort-down"></i>}
          </section>
          <Collapse isOpened={this.state.collapseSMod}>
            <form className="container">
              <h2>Selectionner un module</h2>
              <section className="d-flex flex-row">
                { this.state.programme !== '' && this.state.programme.modules.map(modules => (
                  <div key={modules.id}>
                    <input type="radio" id={modules.title} name="modules" value={modules.id} onChange={(event) => this.handleChangeRadio(event)} checked={this.state.moduleId === modules.id}/>
                    <label htmlFor={modules.title}>{modules.title}</label>
                  </div>
                ))}
              </section>
              <h2>Créer un Sous Module</h2>
              <section className="d-flex flex-row">
                <input type="text" placeholder="Sous module" name="sousmodules" onChange={() => this.handleChange(event.target)}/>
                <Button btnType="valider" className="add-item" clicked={(name) => this.handleCreate('sousmodules')}>Ajouter au module</Button>
              </section>
            </form>
          </Collapse>

          <section className="collapse-button d-flex flex-row justify-content-between" onClick={(type) => this.handleCollapse('sequence') }>
            <p>Séquences</p>
            { this.state.collapseSeq ? <i className="fas fa-sort-up"></i> : <i className="fas fa-sort-down"></i>}
          </section>
          <Collapse isOpened={this.state.collapseSeq}>
            <form className="container">
              <h2>Selctionner un sous module</h2>
              <section className="d-flex flex-row">
                { this.state.programme !== '' &&
                this.state.programme.modules.map(mod => {
                  return mod.sousmodules.map(sousModules => (
                    <div key={sousModules.id}>
                      <input type="radio" id={sousModules.title} name="sousmodules" value={sousModules.id} onChange={(e) => this.handleChangeRadio(e)} checked={this.state.smoduleId === sousModules.id}/>
                      <label htmlFor={sousModules.title}>{sousModules.title}</label>
                    </div>
                  ))
                })
                }
              </section>
              <h2>Créer une Séquences</h2>
              <section className="d-flex flex-row">
                <input type="text" placeholder="Séquences" name="sequences" onChange={() => this.handleChange(event.target)}/>
                <Button btnType="valider" className="add-item" clicked={(name) => this.handleCreate('sequences')}>Ajouter au Sous modules</Button>
              </section>
            </form>
          </Collapse>
        </React.Fragment>

      )
    }

    return (
      <Page title="Création programme" contextePage="Création programme">
        <article id="creation-programme">
          <AllNotification show={this.state.notifShow} alertType="success">
            <aside className="d-flex flex-row justify-content-between">
              {this.state.message}
              <button className="notification-close" onClick={() => { this.setState({ notifShow: false }) }}>X</button>
            </aside>
          </AllNotification>

          <header className="text-center">
            Etape {this.state.etapes}
          </header>
          {creationProgramme}
          <section className="d-flex flex-row footer-programme-formulaire">
            {
              this.state.etapes > 1 &&
                <Button
                  btnType="valider"
                  clicked={(event) => this.endProgram(event)}
                  className="terminer-programme"
                >
                Voir et terminer le programme
                </Button>
            }
          </section>

          <Modal
            show={this.state.modalShow}
	        onClose={this.handleClose}
	        titleModal="Demande de confirmation">{modalConfirm}</Modal>
        </article>
      </Page>
    )
  }
}
export default CreaProgramme
