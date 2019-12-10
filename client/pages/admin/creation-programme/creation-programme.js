import React, { Component } from 'react'
import Page from '../../../layouts/admin'
import Button from '../../../components/Boutons/Boutons'
import axios from 'axios'
import CreationProgramme from '../../../components/Creation-programme/creation-programme'
import Modal from '../../../components/Modal/modal'
import Router from 'next/router'
import { Collapse } from 'react-collapse'
// import Select from 'react-select'
import { getAll, create, getModules, addToProgram, getItem } from '../../../services/creation-programme'

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
    modules: '',
    sousmodules: '',
    sequences: '',
    selected: '',
    etapes: 1,
    collapse: false,
    modalShow: false
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

  handleCollapse () {
    this.setState({ collapse: !this.state.collapse })
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
    window.location.assign('/admin/gestion-programme/gestion-programme')
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
          this.setState({ programme: programme.data })
        })
        .catch(err => {
          alert(err, 'handleCreate')
        })
    } else if (name === 'sousmodules') {
      create(name, this.state.titleMod)
        .then(response => {
          return addToProgram(response.data.id, name, this.state.moduleId)
        }).then(response => {
          return getItem('programmes', this.state.programmeId)
        })
        .then(programme => {
          this.setState({ programme: programme.data })
        })
        .catch(err => {
          alert(err, 'handleCreate')
        })
    } else if (name === 'sequences') {
      create(name, this.state.titleMod)
        .then(response => {
          return addToProgram(response.data.id, name, this.state.smoduleId)
        }).then(response => {
          return getItem('programmes', this.state.programmeId)
        })
        .then(programme => {
          this.setState({ programme: programme.data })
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
    this.setState({ moduleId: event.target.value })
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
          <Button clicked={this.handleRedirection} btnType="valider">Valider</Button>
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
        </React.Fragment>
      )
    } else if (this.state.etapes === 2) {
      creationProgramme = (
        <React.Fragment>
          <button onClick={(type) => this.handleCollapse('module') }>Modules</button>
          <Collapse isOpened={this.state.collapse}>
            <form className="container">
              <h2>Créer un module</h2>
              <section className="d-flex flex-row">
                <input type="text" placeholder="module" name="modules" onChange={() => this.handleChange(event.target)}/>
                <Button btnType="valider" className="add-item" clicked={(name) => this.handleCreate('modules')}>Ajouter au programme</Button>
              </section>
              {/* <section>
                <h2>Selectionner votre modules</h2>
                <div className="d-flex flex-row">
                  <Select className="select-component" options={this.state.modules}
                    formatCreateLabel={(inputValue) => 'modules'}
                    placeholder="modules"
                    getOptionLabel={(option) => option.title}
                    getOptionValue={(option) => option.title}
                    onChange={this.props.select}
                    name={this.props.name}
                  />
                  <Button btnType="valider" className="add-item" clicked={this.handleAdd}>Ajouter au {this.props.parent}</Button>
                </div>
              </section> */}
            </form>
          </Collapse>

          <button onClick={(type) => this.handleCollapse('module') }>Sous Modules</button>
          <Collapse isOpened={this.state.collapse}>
            <form className="container">
              <h2>Selctionner un module</h2>
              <section className="d-flex flex-row">
                { this.state.programme !== '' && this.state.programme.modules.map(modules => (
                  <div key={modules.id}>
                    <input type="radio" id={modules.title} name={modules.title} value={modules.id} onChange={(event) => this.handleChangeRadio(event)} checked={this.state.moduleId === modules.id}/>
                    <label htmlFor={modules.title}>{modules.title}</label>
                  </div>
                ))}
              </section>
              <h2>Créer un Sous Module</h2>
              <section className="d-flex flex-row">
                <input type="text" placeholder="Sous module" name="sousModules" onChange={() => this.handleChange(event.target)}/>
                <Button btnType="valider" className="add-item" clicked={(name) => this.handleCreate('sousmodules')}>Ajouter au module</Button>
              </section>
              {/* <section>
                <h2>Selectionner votre modules</h2>
                <div className="d-flex flex-row">
                  <Select className="select-component" options={this.state.modules}
                    formatCreateLabel={(inputValue) => 'modules'}
                    placeholder="modules"
                    getOptionLabel={(option) => option.title}
                    getOptionValue={(option) => option.title}
                    onChange={this.props.select}
                    name={this.props.name}
                  />
                  <Button btnType="valider" className="add-item" clicked={this.handleAdd}>Ajouter au {this.props.parent}</Button>
                </div>
              </section> */}
            </form>
          </Collapse>

          <button onClick={(type) => this.handleCollapse('module') }>Séquences</button>
          <Collapse isOpened={this.state.collapse}>
            <form className="container">
              <h2>Selctionner un sous module</h2>
              <section className="d-flex flex-row">
                { this.state.programme !== '' && this.state.programme.modules[0].sousModules.map(sousModules => (
                  <div key={sousModules.id}>
                    <input type="radio" id={sousModules.title} name={sousModules.title} value={sousModules.id} onChange={(event) => this.handleChangeRadio(event)} checked={this.state.smoduleId === sousModules.id}/>
                    <label htmlFor={sousModules.title}>{sousModules.title}</label>
                  </div>
                ))}
              </section>
              <h2>Créer une Séquences</h2>
              <section className="d-flex flex-row">
                <input type="text" placeholder="Sous module" name="sousModules" onChange={() => this.handleChange(event.target)}/>
                <Button btnType="valider" className="add-item" clicked={(name) => this.handleCreate('sousmodules')}>Ajouter au module</Button>
              </section>
              {/* <section>
                <h2>Selectionner votre modules</h2>
                <div className="d-flex flex-row">
                  <Select className="select-component" options={this.state.modules}
                    formatCreateLabel={(inputValue) => 'modules'}
                    placeholder="modules"
                    getOptionLabel={(option) => option.title}
                    getOptionValue={(option) => option.title}
                    onChange={this.props.select}
                    name={this.props.name}
                  />
                  <Button btnType="valider" className="add-item" clicked={this.handleAdd}>Ajouter au {this.props.parent}</Button>
                </div>
              </section> */}
            </form>
          </Collapse>
        </React.Fragment>

        // <CreationProgramme selected={this.state.selected} select={(newValue, action) => this.handleSelect(newValue, action)} name="modules" step={this.state.etapes} parent="Programme" parentId={this.state.programmeId}/>
      )
    }

    return (
      <Page title="Création programme" contextePage="Création programme">
        <article className="card" id="creation-programme">
          <header className="card-header text-center">
            Etape {this.state.etapes}
          </header>
          {creationProgramme}
          <section className="d-flex flex-row footer-programme-formulaire">
            {/* <Button
              btnType="annuler"
              type="button"
              clicked={this.previousPage}
              className="btn btn-primary text-center button-cancel-programme"
            >
            Annuler
            </Button> */}
            <Button
              btnType="valider"
              clicked={(event) => this.handleStep(event)}
              className="step-button"
            >
            Etape suivante
            </Button>
            {
              this.state.etapes > 1 &&
              <Button
                btnType="valider"
                clicked={(event) => this.endProgram(event)}
                className="terminer-programme"
              >
                Terminer programme
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
