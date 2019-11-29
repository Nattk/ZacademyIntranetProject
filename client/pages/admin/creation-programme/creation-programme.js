import React, { Component } from 'react'
import Page from '../../../layouts/admin'
import Button from '../../../components/Boutons/Boutons'
import Select from 'react-select/'
import axios from 'axios'

class CreaProgramme extends Component {
  state = {
    programmeId: '',
    title: '',
    moduleTitle: '',
    modules: '',
    modSelected: null,
    sequences: '',
    etapes: 1
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

   handleUpdate = () => {
     // if (name === '' || undefined) {
     //   this.setState({ show: false })
     // } else {
     return this.setState({ show: true })
     // }
   }

  handleConfirmForm = () => {
    event.preventDefault()
    window.location.assign('/admin/gestion-programme/gestion-programme')
  }

  handleStep = () => {
    event.preventDefault()
    if (this.state.etapes === 1) {
      this.handleProgram()
      this.setState({ etapes: this.state.etapes + 1 })
    } else if (this.state.etapes === 2) {
      const modules = [...this.state.modSelected]
      axios.put('http://localhost:3333/api/programmes', { modules: modules }).then(response => {
        console.log(response)
      })
    }
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
    } else {
      this.setState({ moduleTitle: event.value })
    }
  }

  handleSelect = (newValue, action) => {
    console.log(action)
    switch (action) {
      case 'select-option':
        this.setState({ modSelected: newValue })
        break
      case 'remove-value':
        this.setState({ modSelected: newValue })
        break
      case 'clear':
        this.setState({ modSelected: '' })
        break
      default:
        break
    }
  }

  handleProgram = () => {
    axios.post('http://localhost:3333/api/programmes', { title: this.state.title })
      .then(response => {
        console.log('program added')
      })
      .catch(err => {
        console.log('err', err)
      })
  }

  previousPage = () => {
    window.location.assign('/admin/gestion-programme/gestion-programme')
  }

  render () {
    let creationProgramme = null

    if (this.state.etapes === 1) {
      creationProgramme = (
        <div>
          <form className="container" >
            <section className="section">
              <div className="form-group">
                <label htmlFor="programtitle">Titre</label><br></br>
                <input type="text" name="programmeTitle" required className="form-control" id="exampleFormControlInput1" onChange={e => this.handleChange(e.target)}
                  placeholder="Intitulé du programme" />
              </div>
            </section>
          </form>
          <section className="d-flex flex-row footer-programme-formulaire">
            <Button
              btnType="annuler"
              type="button"
              clicked={this.previousPage}
              className="btn btn-primary text-center button-cancel-programme"
            >
            Annuler
            </Button>
            <Button
              btnType="valider"
              clicked={this.handleStep}
            >
            Etape suivante
            </Button>
          </section>
        </div>
      )
    } else if (this.state.etapes === 2) {
      creationProgramme = (
        <form className="container" >
          <h2>Ajouter des modules</h2>
          <section className="d-flex flex-row">
            <input type="text" placeholder="modules" onChange={e => this.handleChange(e.target)}/>
            <button onClick={this.handleModule} className="btn btn-primary text-center"
            >Créer vos modules
            </button>
          </section>
          <h2>Selectionner votre module</h2>
          <Select className="select-component" options={this.state.modules} isMulti={true}
            formatCreateLabel={(inputValue) => inputValue}
            getOptionLabel={(option) => option.title}
            getOptionValue={(option) => option.title}
            onChange={(newValue, actionMeta) => this.handleSelect(newValue, actionMeta.action)}
          />

          <section className="d-flex flex-row footer-programme-formulaire">
            <Button
              btnType="annuler"
              type="button"
              className="btn btn-primary text-center button-cancel-programme"
            >
            Annuler
            </Button>
            <Button
              btnType="valider"
              // type="submit"
              clicked={this.handleStep}
            >
            Etape suivante
            </Button>
          </section>
        </form>
      )
    }

    return (
      <Page title="Création programme">
        <article className="card" id="creation-programme">
          <header className="card-header text-center">
            Etape {this.state.etapes}
          </header>
          {creationProgramme}
        </article>
      </Page>
    )
  }
}
export default CreaProgramme
