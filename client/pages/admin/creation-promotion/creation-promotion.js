import React, { Component } from 'react'
import userService from '../../../services/users'
import Page from '../../../layouts/classic'
import Button from '../../../components/Boutons/Boutons'
import Modal from '../../../components/Modal/modal'
import axios from 'axios'
import { getAllFormateurs, getAllStudents, getAllProgrammes, optionsCity } from '../../../services/creation-promotion'
import Input from '../../../components/Formulaire/input'
import Select from 'react-select'
import { capitalize } from '../../index_connecte'
import moment from 'moment'
class CreaPromotion extends Component {
  constructor (props) {
    super(props)

    this.state = {
      promotions: [],
      promotion: '',
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

    this.handleClose = this.handleClose.bind(this)
    this.onChangeProgramme = this.onChangeProgramme.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onShowRecapForm = this.onShowRecapForm.bind(this)
    this.onCreatePromotion = this.onCreatePromotion.bind(this)
    this.handleFormateurs = this.handleFormateurs.bind(this)
    this.handleStudents = this.handleStudents.bind(this)
    this.handleValidation = this.handleValidation.bind(this)
    this.onChange = this.onChange.bind(this)
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
      start: this.state.startDate,
      end: this.state.endDate,
      formateurs: formateurSelected.formateurId,
      eleves: eleveSelected.eleveId
    }

    axios.post('http://localhost:3333/api/promotions', elements)
      .then((data) => {
        this.setState({ showModal: false, promotions: data, promotion: data.data.id })
        const IdPromotion = data.data.id
        return this.setState({ promotion: IdPromotion })
      })
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

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    moment.locale('fr')
    const { selectedCity, selectedProgramme, formateursOption, studentsOption } = this.state
    const start = this.state.startDate ? capitalize(moment(this.state.startDate).format('DD MMMM YYYY')) : null
    const end = this.state.endDate ? capitalize(moment(this.state.endDate).format('DD MMMM YYYY')) : null
    const formateurs = this.state.formateursOption ? this.state.formateursOption.map(el => <p>{el.firstName.concat(' ', el.lastName, ', ')}</p>) : this.state.formateursOption
    const students = this.state.studentsOption ? this.state.studentsOption.map(el => el.firstName.concat(' ', el.lastName, ', ')) : this.state.studentsOption

    const recapPromotion =
      <article>
        <section className="title-style-modal">
          <p><span className="promotion-p-style">Nom de promotion:</span> {this.state.title}</p>
          <p><span className="promotion-p-style">Ville:</span>&nbsp; {this.state.selectedCity.value}</p>
          <p><span className="promotion-p-style">Début formation:</span>&nbsp; {start}</p>
          <p><span className="promotion-p-style">Fin formation:</span>&nbsp; {end}</p>
          <p><span className="promotion-p-style">Formateurs:</span>&nbsp; {formateurs}</p>
          <p><span className="promotion-p-style">Programme :</span>&nbsp; {this.state.selectedProgramme.title} </p>
          <p><span className="promotion-p-style">Futur consultants:</span>&nbsp; {students} </p>
        </section>
        <footer className="text-right">
          <Button clicked={this.onCreatePromotion} id="confirm-creation-promotion" btnType="valider">
            Confirmer la Création de cette promotion
          </Button>
        </footer>
      </article>

    const optionsEleve = this.state.eleves ? this.state.eleves.filter(el => el.role === 'eleve') : this.state.eleves
    const optionsFormateurs = this.state.formateurs ? this.state.formateurs.filter(el => el.role === 'formateur') : this.state.formateurs
    const optionProgramme = this.state.programmes ? this.state.programmes.filter(el => el.title) : this.state.programmes
    return (
      <Page title="Création promotion" contextePage="Création promotion" >
        <article className="col-md-12 col-sm-12 col-xs-12 " id="form_creation_promotion">
          <form className="form-group-who-to-follow " role="form" data-toggle="validator" >

            <section className="col-md-12 col-sm-12 col-xs-12  d-flex section-style justify-content-center" >

              <div className={this.state.dateValidation ? 'col-md-2 col-sm-12 col-xs-12' : 'col-md-2 col-sm-12 col-xs-12 section-style  '} >

                <Input
                  label="Début de formation *"
                  type="date"
                  name="date-start"
                  max={this.state.endDate}
                  id="date-start"
                  validation={this.state.startdateValidation}
                  value={this.state.startDate}
                  onChange={(e) => this.setState({ startDate: e.target.value })}
                />

                {this.state.startdateValidation && !this.state.enddateValidation ? <p className="validation-style"> <small>{this.state.startdateValidation}</small></p> : null}

              </div>
              <div className={this.state.dateValidation ? 'col-md-2 col-sm-12 col-xs-12' : 'col-md-2 col-sm-12 col-xs-12 custom-file section-style upload-style '}>
                <Input
                  label="Fin de formation *"
                  type="date"
                  name="date-end"
                  min={this.state.startDate}
                  id="date-end"
                  validation={this.state.enddateValidation}
                  value={this.state.endDate}
                  onChange={(e) => this.setState({ endDate: e.target.value })}
                />

                {this.state.enddateValidation && !this.state.startdateValidation ? <p className="validation-style"> <small>{this.state.enddateValidation}</small></p> : null}
              </div>

              <div className="col-md-4 col-sm-12 col-xs-12 custom-file section-style upload-style ">
                <label htmlFor="ville" className="label-style">Ville * </label>
                <Select
                  value={selectedCity}
                  onChange={this.handleChange}
                  name="city"
                  id="cityInput"
                  options={optionsCity}
                  className={this.state.cityValidation ? ' error-input' : ' '}
                  placeholder="Selectionner une ville"

                />
                <p className="validation-style" id="cityValidation"> <small>{this.state.cityValidation}</small></p>
              </div>

            </section>
            <section className="col-md-12 col-sm-12 col-xs-12 d-flex section-style justify-content-center" >

              <div className="col-md-4 col-sm-12 col-xs-12">
                <Input
                  label="Titre *"
                  type="text"
                  name="title"
                  id="titleInput"
                  placeholder='Intitulé de la promotion'
                  validation={this.state.titreValidation}
                  value={this.state.title}
                  onChange={(e) => this.setState({ title: e.target.value })}
                />
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">

                <label htmlFor="programme" className="label-style">Programme * </label>
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
                <label htmlFor="programme" className="label-style">Choix formateur(s) * </label>
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
                <label htmlFor="programme" className="label-style">Élèves * </label>
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
            <section className="col-md-6 col-sm-12 col-xs-12 d-flex obligatoire-style justify-content-center  " >

              <small>*  Champs obligatoires</small>
            </section>

          </form>
          <section className=" col-md-10 col-sm-12 col-xs-12  d-flex mt-5 justify-content-end">
            <Button clicked={this.onShowRecapForm} id="recap-button" btnType="valider" >
              Valider le formulaire
            </Button>
          </section>
          <section className="col-md-12 col-sm-12 col-xs-12 text-right" >
            <Modal titleModal="Demande de confirmation" show={this.state.showModal} onClose={this.handleClose} recapitulation={recapPromotion} />
          </section>
        </article>
      </Page>
    )
  }
}

export default CreaPromotion
