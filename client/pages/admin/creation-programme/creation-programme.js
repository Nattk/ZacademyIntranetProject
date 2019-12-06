import React, { Component } from 'react'
import Page from '../../../layouts/admin'
import Button from '../../../components/Boutons/Boutons'
import axios from 'axios'
import CreationProgramme from '../../../components/Creation-programme/creation-programme'
import Modal from '../../../components/Modal/modal'

class CreaProgramme extends Component {
  state = {
    programmeId: '',
    programme: '',
    title: '',
    moduleId: '',
    smoduleId: '',
    modules: '',
    sousmodules: '',
    sequences: '',
    selected: '',
    etapes: 1,
    modalShow: false
  }

  componentDidMount () {
    axios.get('http://localhost:3333/api/modules')
      .then(modules => {
        this.setState({ modules: modules.data })
        console.log(modules.data)
      })
      .catch(err => {
        alert(err)
      })
  }

  handleSelect = (newValue, action) => {
    console.log('selected', newValue.id)
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

  handleConfirmForm = () => {
    event.preventDefault()
    window.location.assign('/admin/gestion-programme/gestion-programme')
  }

  handleStep = (event) => {
    event.preventDefault()
    if (this.state.etapes === 1) {
      this.handleProgram()
      this.setState({ etapes: this.state.etapes + 1 })
    } else {
      this.setState({ etapes: this.state.etapes + 1 })
    }
  }

  handleRedirection = () => {
    window.location.assign('/admin/gestion-programme/gestion-programme')
  }

  handleModule = () => {
    event.preventDefault()
    axios.post('http://localhost:3333/api/modules', { title: this.state.moduleTitle })
      .then(response => {
        return axios.get('http://localhost:3333/api/modules')
      })
      .then(modules => {
        this.setState({ modules: modules.data })
      })
      .catch(err => {
        console.log(err, 'err')
      })
  }

  handleChange = (event) => {
    if (event.name === 'programmeTitle') {
      this.setState({ title: event.value })
    }
  }

  handleProgram = () => {
    axios.post('http://localhost:3333/api/programmes', { title: this.state.title })
      .then(response => {
        this.setState({ programmeId: response.data.id })
      })
      .catch(err => {
        console.log('err', err)
      })
  }

  endProgram = () => {
    event.preventDefault()
    axios.get(`http://localhost:3333/api/programmes/${this.state.programmeId}`)
      .then(programme => {
        this.setState({ programme: programme.data })
        this.setState({ modalShow: !this.state.modalShow })
      })
      .catch(err => {
        console.log(err, 'err')
      })
  }

  handleClose = () => {
	  this.setState({ modalShow: false })
  }

  render () {
    let creationProgramme = null
    let modalConfirm = null
    if (this.state.programme !== '') {
      modalConfirm = (
        <React.Fragment>
          <h2>{this.state.programme.title}</h2>
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
        </React.Fragment>
      )
    }

    if (this.state.etapes === 1) {
      creationProgramme = (
        <React.Fragment>
          <form className="container" >
            <section className="section">
              <div className="form-group">
                <label htmlFor="programtitle">Titre</label><br></br>
                <input type="text" name="programmeTitle" required className="form-control" id="exampleFormControlInput1" onChange={e => this.handleChange(e.target)}
                  placeholder="Intitulé du programme" />
              </div>
            </section>
          </form>
        </React.Fragment>
      )
    } else if (this.state.etapes === 2) {
      creationProgramme = (
        <CreationProgramme selected={this.state.selected} select={(newValue, action) => this.handleSelect(newValue, action)} name="modules" step={this.state.etapes} parentId={this.state.programmeId}/>
      )
    } else if (this.state.etapes === 3) {
      creationProgramme = (
        <CreationProgramme selected={this.state.selected} select={(newValue, action) => this.handleSelect(newValue, action)} name="sousmodules" step={this.state.etapes} parentId={this.state.moduleId}/>
      )
    } else if (this.state.etapes === 4) {
      creationProgramme = (
        <CreationProgramme selected={this.state.selected} select={(newValue, action) => this.handleSelect(newValue, action)} name="sequences" step={this.state.etapes} parentId={this.state.smoduleId}/>
      )
    }

    return (
      <Page title="Création programme">
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
                clicked={this.endProgram}
              >
                Terminer programme
              </Button>
            }

          </section>

          <Modal
            show={this.state.modalShow}
	        onClose={this.handleClose}
	        titleModal="Confirmation">{modalConfirm}</Modal>
        </article>
      </Page>
    )
  }
}
export default CreaProgramme
