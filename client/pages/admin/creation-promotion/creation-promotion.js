import React, { Component } from 'react'
import Page from '../../../layouts/classic'
import Button from '../../../components/Boutons/Boutons'
import Modal from '../../../components/Modal/modal'
import axios from 'axios'
import { getAllFormateurs, getAllStudents, getAllProgrammes, optionsCity } from '../../../services/creation-promotion'
import Input from '../../../components/Formulaire/input'
import Select from 'react-select'
import 'react-dates/lib/css/_datepicker.css'
import frLocale from 'moment/locale/fr'
import moment from 'moment'
import { DateRangePicker } from 'react-dates'
import 'react-dates/initialize'

class CreaPromotion extends Component {
  constructor (props) {
    super(props)

    this.state = {
      promotions: [],
      focusedInput: '',
      show: false,
      showModal: false,
      title: '',
      startDate: '',
      endDate: '',
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

    this.handleClose = this.handleClose.bind(this)
    this.onChangeProgramme = this.onChangeProgramme.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onShowRecapForm = this.onShowRecapForm.bind(this)
    this.onCreatePromotion = this.onCreatePromotion.bind(this)
    this.handleFormateurs = this.handleFormateurs.bind(this)
    this.handleStudents = this.handleStudents.bind(this)
    this.handleValidation = this.handleValidation.bind(this)
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
      .then((data) => { this.setState({ showModal: false, promotions: data }) })
      .catch(error => { console.log(error.response) })
    // window.location.assign('/admin/Accueil/accueil'),
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
    this.state.startDate === '' ? this.setState({ startdateValidation: 'Veuillez selectionné une date de début de formation ' }) : this.setState({ startdateValidation: '' })
    this.state.endDate === '' ? this.setState({ enddateValidation: 'Veuillez selectionné une date  de fin de formation ' }) : this.setState({ enddateValidation: '' })
    this.state.startDate === '' && this.state.endDate === '' ? this.setState({ dateValidation: 'Veuillez selectionné une période de formation ' }) : this.setState({ dateValidation: '' })
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
    const formateurs = this.state.formateursOption ? this.state.formateursOption.map(el => <div className="d-flex">{el.firstName}{el.lastName}</div>) : this.state.formateursOption
    const students = this.state.studentsOption ? this.state.studentsOption.map(el => <div className="d-flex">{el.firstName}{el.lastName}</div>) : this.state.studentsOption
    const dayStart = start ? start.toString().slice(9, 11) : start
    const monthStart = start ? start.toString().slice(6, 8) : start
    const yearStart = start ? start.toString().slice(1, 5) : start

    const dayEnd = end ? end.toString().slice(9, 11) : end
    const monthEnd = end ? end.toString().slice(6, 8) : end
    const yearEnd = end ? end.toString().slice(1, 5) : end
    const dateStart = `${dayStart}-${monthStart}-${yearStart}`
    const dateEnd = `${dayEnd}-${monthEnd}-${yearEnd}`

    const des = <div style={{ marginTop: '1.5rem' }}>
      <section>
        <p>Nom de promotion: {this.state.title}</p>
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

    moment.locale('fr', frLocale)
    const optionsEleve = this.state.eleves ? this.state.eleves.filter(el => el.role === 'eleve') : this.state.eleves
    const optionsFormateurs = this.state.formateurs ? this.state.formateurs.filter(el => el.role === 'formateur') : this.state.formateurs
    const optionProgramme = this.state.programmes ? this.state.programmes.filter(el => el.title) : this.state.programmes
    return (
      <Page title="Création promotion" >
        <article className="col-md-12 col-sm-12 col-xs-12 " id="form_creation_promotion">
          <header className="card-header  text-center">
            Creation une promotion
          </header>

          <form className="form-group-who-to-follow " role="form" data-toggle="validator" >

            <section className="col-md-12 col-sm-12 col-xs-12  d-flex section-style justify-content-center" >

              <div className="col-md-4 col-sm-12 col-xs-12 section-style ">
                <label for="date_formation" className="label-style">Période de formation </label>
                <div>
                  <DateRangePicker
                    startDateId="startDate"
                    endDateId="endDate"
                    startDatePlaceholderText="Début"
                    endDatePlaceholderText="Fin formation"
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate }) }}
                    onChange={() => this.onChange}
                    focusedInput={this.state.focusedInput}
                    className={this.state.dateValidation ? 'error-input' : ''}
                    onFocusChange={(focusedInput) => { this.setState({ focusedInput }) }}
                  />
                </div>
                {this.state.startdateValidation && this.state.enddateValidation ? <p className="validation-style"> <small>{this.state.dateValidation}</small></p> : null}
                {this.state.startdateValidation && !this.state.enddateValidation ? <p className="validation-style"> <small>{this.state.startdateValidation}</small></p> : null}
                {this.state.enddateValidation && !this.state.startdateValidation ? <p className="validation-style"> <small>{this.state.enddateValidation}</small></p> : null}
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12 custom-file section-style upload-style ">
                <label for="ville" className="label-style">Ville </label>
                <Select
                  value={selectedCity}
                  onChange={this.handleChange}
                  options={optionsCity}
                  className={this.state.cityValidation ? ' error-input' : ' '}
                  placeholder="Selectionner une ville"

                />
                <p className="validation-style"> <small>{this.state.cityValidation}</small></p>
              </div>

            </section>
            <section className="col-md-12 col-sm-12 col-xs-12 d-flex section-style justify-content-center" >

              <div className="col-md-4 col-sm-12 col-xs-12">
                <Input
                  label="Titre"
                  type="text"
                  name="title"
                  placeholder='Intitulé de la promotion'
                  validation={this.state.titreValidation}
                  value={this.state.title}
                  onChange={(e) => this.setState({ title: e.target.value })}
                />
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">

                <label for="programme" className="label-style">Programme </label>
                <Select
                  value={selectedProgramme}
                  onChange={this.onChangeProgramme}
                  options={optionProgramme}
                  getOptionLabel={(option) => option.title}
                  getOptionValue={(option) => option.id}
                  className={this.state.programmeValidation ? ' error-input' : ' '}
                  placeholder="Selectionner un programme"
                />
                <p className="validation-style"> <small>{this.state.programmeValidation}</small></p>
              </div>
            </section>
            <section className="col-md-12 col-sm-12 col-xs-12 d-flex section-style justify-content-center " >

              <div className="col-md-4 col-sm-12 col-xs-12">
                <label for="programme" className="label-style">Choix formateur(s) </label>
                <Select
                  placeholder="Formateur(s)"
                  isMulti={true}
                  name="colors"
                  value={formateursOption}
                  options={optionsFormateurs}
                  noOptionsMessage={(inputValues) => `${inputValues.inputValue} n'est pas répertorié`}
                  getOptionLabel={(option) => option.firstName.concat(' ', option.lastName)}
                  getOptionValue={(option) => option.id}
                  onChange={this.handleFormateurs}
                  className={this.state.formateursValidation ? ' error-input' : 'basic-multi-select'}
                  classNamePrefix="select"
                />
                <p className="validation-style"> <small>{this.state.formateursValidation}</small></p>

              </div>
              <div className="col-md-4 col-sm-12 col-xs-12 ">
                <label for="programme" className="label-style">Élèves </label>
                <Select
                  placeholder="Élèves(s)"
                  isMulti={true}
                  name="colors"
                  value={studentsOption}
                  options={optionsEleve}
                  noOptionsMessage={(inputValues) => `${inputValues.inputValue} n'est pas répertorié`}
                  getOptionLabel={option => option.firstName.concat(' ', option.lastName)}
                  getOptionValue={option => option.id}
                  onChange={this.handleStudents}
                  className={this.state.studentsValidation ? ' error-input' : 'basic-multi-select'}
                  classNamePrefix="select"
                />
                <p className="validation-style"> <small>{this.state.studentsValidation}</small></p>

              </div>
            </section>

          </form>
          <section className=" col-md-10 col-sm-12 col-xs-12  d-flex mt-5 justify-content-end">
            <Button clicked={this.onShowRecapForm} btnType="valider" >
              Créer promotion
            </Button>
          </section>
          <section className="col-md-12 col-sm-12 col-xs-12 text-right" >
            <Modal titleModal={`Recapitulatif promotion ${this.state.title}`} show={this.state.showModal} onClose={this.handleClose} recapitulation={des} />
          </section>

        </article>
      </Page>
    )
  }
}

export default CreaPromotion
