import React, { Component } from 'react'
import Page from '../../../layouts/admin'
import Button from '../../../components/Boutons/Boutons'
import Alert from '../../../components/Modal/alert'
class CreaPromotion extends Component {
  constructor (props) {
    super(props)

    this.state = {
      promotions: [],
      promotion: '',
      focusedInput: '',
      show: false,
      showModal: false,
      title: '',
      startdateValidation: '',
      enddateValidation: '',
      titreValidation: '',
      programmeValidation: '',
      cityValidation: '',
      dateValidation: '',
      studentsValidation: '',
      formateursValidation: '',
      selectedCity: '',
      formateursOption: '',
      studentsOption: '',
      selectedProgramme: '',
      formateursSelected: ''
    }

    show: false
  }

  handleStudents (studentsOption) {
    this.setState({ studentsOption })
  }

  handleClose () {
    this.setState({ showModal: false })
  }

  handleFormateurs (formateursOption) {
    this.setState({ formateursOption })
  }

  onCreatePromotion () {
    const eleveSelected = { eleveId: this.state.studentsOption.map(el => el.id) }
    const formateurSelected = { formateurId: this.state.formateursOption.map(el => el.id) }

    const elements = {
      title: this.state.title,
      city: this.state.selectedCity.value,
      programmes: this.state.selectedProgramme.id,
      start: this.state.startDate._d,
      end: this.state.endDate._d,
      formateurs: formateurSelected.formateurId,
      eleves: eleveSelected.eleveId
    }

    axios.post('http://localhost:3333/api/promotions', elements)
      .then((data) => {
        this.setState({ showModal: false, promotions: data, promotion: data.data.id })
        const IdPromotion = data.data.id
        return this.setState({ promotion: IdPromotion })
      })
      .catch(error => { console.log(error.response) })
    setTimeout(() => {
      window.location.assign('/admin/Accueil/accueil')
    }, 1000)
  }

  componentWillUpdate () {
    const eleveSelected = { eleveId: this.state.studentsOption ? this.state.studentsOption.map(el => el.id) : null }
    const formateurSelected = { formateurId: this.state.formateursOption ? this.state.formateursOption.map(el => el.id) : null }

    if (this.state.promotion) {
      eleveSelected.eleveId.map(eleveID => userService.update(eleveID, { promotion: this.state.promotion }))
      formateurSelected.formateurId.map(formateurID => userService.update(formateurID, { promotion: this.state.promotion }))
    }
  }

  onShowRecapForm () {
    if (this.state.title && this.state.selectedProgramme && this.state.selectedCity && this.state.formateursOption && this.state.studentsOption && this.state.endDate && this.state.startDate !== '') {
      this.setState({ showModal: true })
    } this.handleValidation()
  }

  handleValidation () {
    this.state.title === '' ? this.setState({ titreValidation: 'Un titre est réquis' }) : this.setState({ titreValidation: '' })
    this.state.selectedProgramme === '' ? this.setState({ programmeValidation: 'Un programme est réquis' }) : this.setState({ programmeValidation: '' })
    this.state.formateursOption === '' ? this.setState({ formateursValidation: 'Veuillez selectionné un ou plusieurs formateurs ' }) : this.setState({ formateursValidation: '' })
    this.state.studentsOption === '' ? this.setState({ studentsValidation: 'Veuillez selectionné des futurs consultants ' }) : this.setState({ studentsValidation: '' })
    this.state.selectedCity === '' ? this.setState({ cityValidation: 'Veuillez selectionné une ville ' }) : this.setState({ cityValidation: '' })
    this.state.startDate === undefined || this.state.startDate === null ? this.setState({ startdateValidation: 'Veuillez selectionné une date de début de formation ' }) : this.setState({ startdateValidation: '' })
    this.state.endDate === undefined || this.state.endDate === null ? this.setState({ enddateValidation: 'Veuillez selectionné une date  de fin de formation ' }) : this.setState({ enddateValidation: '' })
    this.state.startDate === undefined && this.state.endDate === undefined ? this.setState({ dateValidation: 'Veuillez selectionné une période de formation ' }) : this.setState({ dateValidation: '' })
  }

  componentDidMount () {
    axios.all([getAllFormateurs(), getAllStudents(), getAllProgrammes()])
      .then(axios.spread((formateurs, students, programmes) => {
        this.setState({ formateurs: formateurs.data, eleves: students.data, programmes: programmes.data })
      }))
  }

  handleChange (selectedCity) {
    this.setState({ selectedCity })
  }

  onChangeProgramme (selectedProgramme) {
    this.setState({ selectedProgramme })
  }

  render () {
    const { selectedCity, selectedProgramme, formateursOption, studentsOption } = this.state
    const start = this.state.startDate ? JSON.stringify(this.state.startDate._d) : null
    const end = this.state.endDate ? JSON.stringify(this.state.endDate._d) : null
    const dayStart = start ? start.toString().slice(9, 11) : start
    const monthStart = start ? start.toString().slice(6, 8) : start
    const yearStart = start ? start.toString().slice(1, 5) : start
    const dayEnd = end ? end.toString().slice(9, 11) : end
    const monthEnd = end ? end.toString().slice(6, 8) : end
    const yearEnd = end ? end.toString().slice(1, 5) : end
    const dateStart = `${dayStart}-${monthStart}-${yearStart}`
    const dateEnd = `${dayEnd}-${monthEnd}-${yearEnd}`
    const formateurs = this.state.formateursOption ? this.state.formateursOption.map(el => el.firstName.concat(' ', el.lastName, ' ')) : this.state.formateursOption
    const students = this.state.studentsOption ? this.state.studentsOption.map(el => el.firstName.concat(' ', el.lastName, ' \n ')) : this.state.studentsOption

    const recapPromotion = <div className="recapitulation-promotion-style">
      <section>
        <p className="title-style-modal">Nom de promotion: {this.state.title}</p>
        <p>Ville: {this.state.selectedCity.value}</p>
        <p>Début formation: {dateStart}</p>
        <p>Fin formation: {dateEnd}</p>
        <p>Formateurs: {formateurs}</p>
        <p>Programme :       {this.state.selectedProgramme.title} </p>
        <p>Futur consultants: {students} </p>
      </section>
      <footer className="text-right">
        <Button clicked={this.onCreatePromotion} btnType="valider">
          Confirmer la Création de cette promotion
        </Button>
      </footer>
    </div>

    moment.updateLocale('fr', frLocale)
    const optionsEleve = this.state.eleves ? this.state.eleves.filter(el => el.role === 'eleve') : this.state.eleves
    const optionsFormateurs = this.state.formateurs ? this.state.formateurs.filter(el => el.role === 'formateur') : this.state.formateurs
    const optionProgramme = this.state.programmes ? this.state.programmes.filter(el => el.title) : this.state.programmes
    return (

      <Page title="Création promotion">
        <article className="gestionProgramme card" id="form_creation_promotion">
          <header className="card-header text-center">
            Creation une promotion
          </header>
          <form className="container" >
            <section className="section">

              <div className="form-group">
                <label htmlFor="titre_promotion">Titre</label>
                <input type="text" name="titre_promotion" className="form-control" id="exampleFormControlInput1"
                  placeholder="Intitulé de la promotion"></input>
              </div>
              <div className="form-group">
                <label htmlFor="ville">Selectionner Ville</label>
                <select className="form-control" name="ville" id="exampleFormControlSelect1">
                  <optgroup label=" France">
                    <option value="Paris">Paris</option>
                    <option value="Lyon">Lyon</option>
                    <option value="Nantes">Nantes</option>
                    <option value="Rennes">Rennes</option>
                    <option value="Lille">Lille</option>
                    <option value="Toulouse">Toulouse</option>
                  </optgroup>
                  <optgroup label="Canada">
                    <option value="Montreal">Montreal</option>
                  </optgroup>
                  <optgroup label="Singapor">
                    <option value="Singapor">Singapor</option>
                  </optgroup>
                  <optgroup label="Maroc">
                    <option value="Casablanca">Casablanca</option>
                  </optgroup>

                </select>
              </div>
              <div data-test-hook="groups">
                <label htmlFor="programme">Choisir Programme</label>
                <select className="form-control" name="programme" id="programme" multiple>
                  <optgroup label="Front-End">
                    <option value="JavaScript">JavaScript</option>
                    <option value="CSS Overlord">CSS Overlord</option>
                  </optgroup>
                  <optgroup label="Back-end">
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                  </optgroup>
                  <optgroup label="DEVOPS">
                    <option value="Java">Docker Jenkins K8S</option>
                  </optgroup>
                  <optgroup label="Marketing">
                    <option value="Bullshit">Bullshit</option>
                    <option value="Other Bullshit">Other Bullshit</option>
                  </optgroup>
                </select>
              </div><br></br>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text description-programme-span">Description</span>
                </div>
                <textarea className="form-control" aria-label="With textarea"></textarea>
              </div>
              <div className="form-group">
                <label>Debut formation</label>
                <input type="date" name="bday" max="3000-12-31" min="1000-01-01" className="form-control"></input>
              </div>
              <div className="form-group">
                <label>Fin formation</label>
                <input type="date" name="bday" min="1000-01-01" max="3000-12-31" className="form-control"></input>
              </div>
            </section>
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
                clicked={this.handleUpdate}

              >
                Créer promotion
              </Button>
              {this.state.show ? (
                <Alert
                  show={this.state.show}
                  handleClose={this.handleClose}
                  headerTitle="Création promotion"
                  modalDescription="Confirmer la création de cette promotion"
                  modalHeader={true}
                  modalBody={true}
                  modalFooterRedirection
                  handleConfirmForm={this.handleConfirmForm}
                />
              ) : null}
            </section>
          </form>
        </article>
      </Page>
    )
  }
}

export default CreaPromotion
