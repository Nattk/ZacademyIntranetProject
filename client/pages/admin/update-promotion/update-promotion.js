import React, { Component } from 'react'
import Page from '../../../layouts/admin'
import Button from '../../../components/Boutons/Boutons'
import Modal from '../../../components/Modal/modal'
import { NotificationSuccess, NotificationError } from '../../../components/Notifications/notifications'
import axios from 'axios'
import { getAllFormateurs, getAllStudents, getAllProgrammes, optionsCity, getPromotionByID } from '../../../services/creation-promotion'
import Input from '../../../components/Formulaire/input'
import Select from 'react-select'
import { capitalize } from '../../index_connecte'
import moment from 'moment'
import { handleClose } from '../../../components/Modal/function-modal'
import { onShowRecapUpdatePromotion } from '../../../components/Methods/function-validation'
import { handleUpdate, RecapPromotion } from './function-update-promotion'

class UpdatePromotion extends Component {
  constructor (props) {
    super(props)

    this.state = {
      promotion: [],
      slack: '',
      selectedCity: '',
      formateursOption: '',
      studentsOption: '',
      selectedProgramme: ''
    }

    this.handleStudents = this.handleStudents.bind(this)
    this.handleFormateurs = this.handleFormateurs.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onChangeProgramme = this.onChangeProgramme.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  handleStudents (studentsOption) {
    this.setState({ studentsOption })
  }

  handleFormateurs (formateursOption) {
    this.setState({ formateursOption })
  }

  handleChange (selectedCity) {
    this.setState({ selectedCity })
  }

  onChangeProgramme (selectedProgramme) {
    this.setState({ selectedProgramme })
  }

  static getInitialProps ({ query }) {
    return { query }
  }

  componentDidMount () {
    getPromotionByID(this.props.query.promotions)
      .then(promotion => {
        return this.setState({ promotion: promotion.data, selectedProgramme: promotion.data.programmes, programmeSelected: promotion.data.programmes[0].title, formateursOption: promotion.data.formateurs, studentsOption: promotion.data.eleves, title: promotion.data.title, startDate: promotion.data.start, endDate: promotion.data.end, selectedCity: promotion.data.city, citySelected: promotion.data.city, slack: promotion.data.slack, id: promotion.data.id })
      })
    axios.all([getAllFormateurs(), getAllStudents(), getAllProgrammes()])
      .then(axios.spread((formateurs, students, programmes) => {
        return this.setState({ formateurs: formateurs.data, eleves: students.data, programmes: programmes.data })
      }))
  }

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    console.log(this.state)
    const startDate = this.state.startDate ? this.state.startDate.substring(0, 10) : this.state.startDate
    const endDate = this.state.endDate ? this.state.endDate.substring(0, 10) : this.state.endDate

    moment.locale('fr')
    const { selectedCity, slack, selectedProgramme } = this.state
    const start = this.state.startDate ? capitalize(moment(this.state.startDate).format('DD MMMM YYYY')) : null
    const end = this.state.endDate ? capitalize(moment(this.state.endDate).format('DD MMMM YYYY')) : null
    const formateurs = this.state.formateursOption ? this.state.formateursOption.map(el => <p>{el.firstName.concat(' ', el.lastName, ', ')}</p>) : this.state.formateursOption

    const students = this.state.studentsOption ? this.state.studentsOption.map(el => el.firstName.concat(' ', el.lastName, ', ')) : this.state.studentsOption
    const optionsEleve = this.state.eleves ? this.state.eleves.filter(el => el.role === 'eleve') : this.state.eleves
    const optionsFormateurs = this.state.formateurs ? this.state.formateurs.filter(el => el.role === 'formateur') : this.state.formateurs
    const optionProgramme = this.state.programmes ? this.state.programmes.filter(el => el.title) : this.state.programmes
    return (
      <Page title={this.state.promotion ? this.state.promotion.title : null} >

        <article className="col-md-12 col-sm-12 col-xs-12 " id="form_creation_promotion" >
          {this.state.showAlertSuccess ? <NotificationSuccess title={`${this.state.title} a été rajouté avec succès`} /> : null}
          {this.state.showAlertError ? <NotificationError title={'Le titre de la promotion doit être unique'} /> : null}

          <h1 className="h1-promotion-style" > {this.state.promotion ? this.state.promotion.title : null} </h1>
          <form className="form-group-who-to-follow " role="form" data-toggle="validator" >

            <section className="col-md-12 col-sm-12 col-xs-12  d-flex section-style justify-content-center" >

              <div className={this.state.dateValidation ? 'col-md-2 col-sm-12 col-xs-12' : 'col-md-2 col-sm-12 col-xs-12 section-style  '} >

                <Input
                  label="Début de formation *"
                  type="date"
                  name="date-start"
                  max={endDate}
                  id="date-start"
                  validation={this.state.startdateValidation}
                  value={startDate}
                  onChange={(e) => this.setState({ startDate: e.target.value })}
                />

                {this.state.startdateValidation && !this.state.enddateValidation ? <p className="validation-style"> <small>{this.state.startdateValidation}</small></p> : null}

              </div>
              <div className={this.state.dateValidation ? 'col-md-2 col-sm-12 col-xs-12' : 'col-md-2 col-sm-12 col-xs-12 custom-file section-style upload-style '}>
                <Input
                  label="Fin de formation *"
                  type="date"
                  name="date-end"
                  min={startDate}
                  id="date-end"
                  validation={this.state.enddateValidation}
                  value={endDate}
                  onChange={(e) => this.setState({ endDate: e.target.value })}
                />

                {this.state.enddateValidation && !this.state.startdateValidation ? <p className="validation-style"> <small>{this.state.enddateValidation}</small></p> : null}
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12 custom-file section-style upload-style ">
                <label htmlFor="ville" className="label-style">Ville * </label>
                <Select
                  value={this.state.selectedCity}
                  onChange={this.handleChange}
                  name="city"
                  id={this.state.cityValidation ? 'villes' : 'cityInput'}
                  options={optionsCity}
                  className={this.state.cityValidation ? 'error-input' : ' '}
                  placeholder={this.state.selectedCity}

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
                <p className="validation-style"> <small>{this.state.titreUniqueValidation}</small></p>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">

                <label htmlFor="programme" className="label-style">Programme * </label>
                <Select
                  value={this.state.selectedProgramme}
                  onChange={this.onChangeProgramme}
                  id={this.state.programmeValidation ? 'programmes' : 'programmeId'}
                  options={optionProgramme}
                  getOptionLabel={(option) => option.title}
                  getOptionValue={(option) => option.id}
                  className={this.state.programmeValidation ? 'error-input' : ' '}
                  placeholder={this.state.selectedProgramme}
                />
                <p className="validation-style"> <small>{this.state.programmeValidation}</small></p>

              </div>
            </section>
            <section className="col-md-12 col-sm-12 col-xs-12 d-flex section-style justify-content-center " >

              <div className="col-md-4 col-sm-12 col-xs-12 formateurs-select">
                <label htmlFor="programme" className="label-style">Choix formateur(s) * </label>
                <Select
                  placeholder={this.state.formateursOption}
                  isMulti={true}
                  name="colors"
                  id={this.state.formateursValidation ? 'formateurs' : 'idformateurs'}
                  value={this.state.formateursOption}
                  options={optionsFormateurs}
                  noOptionsMessage={(inputValues) => `${inputValues.inputValue} n'est pas répertorié`}
                  getOptionLabel={(option) => option.firstName.concat(' ', option.lastName)}
                  getOptionValue={(option) => option.id}
                  onChange={this.handleFormateurs}
                  className={this.state.formateursValidation ? 'formateurs-select' : 'basic-multi-select'}
                  classNamePrefix='select '
                />
                <p className="validation-style"> <small>{this.state.formateursValidation}</small></p>

              </div>
              <div className="col-md-4 col-sm-12 col-xs-12 ">
                <label htmlFor="programme" className="label-style">Élèves * </label>
                <Select
                  placeholder={this.state.studentsOption}
                  isMulti={true}
                  name="colors"
                  value={this.state.studentsOption}
                  id={this.state.studentsValidation ? 'eleves' : 'eleveId'}
                  options={optionsEleve}
                  noOptionsMessage={(inputValues) => `${inputValues.inputValue} n'est pas répertorié`}
                  getOptionLabel={option => option.firstName.concat(' ', option.lastName)}
                  getOptionValue={option => option.id}
                  onChange={this.handleStudents}
                  className={this.state.studentsValidation ? 'error-select' : 'basic-multi-select'}
                  classNamePrefix="select"
                />
                <p className="validation-style"> <small>{this.state.studentsValidation}</small></p>
              </div>
            </section>
            <section className="col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center  " >
              <div className="col-md-4 col-sm-12 col-xs-12">
                <Input
                  label="Lien Slack de la promotion"
                  type="text"
                  name="slack"
                  id="slackInput"
                  placeholder='Insérer un lien slack: https://app.slack.com/...'
                  value={this.state.slack}
                  onChange={(e) => this.setState({ slack: e.target.value })}
                />

              </div>

              <section className="col-md-4 col-sm-12 col-xs-12 d-flex obligatoire-style justify-content-center  " >

                <small>*  Champs obligatoires</small>
              </section>
            </section>

          </form>

          <section className=" col-md-10 col-sm-12 col-xs-12  d-flex justify-content-end">
            <Button clicked={() => onShowRecapUpdatePromotion(this.state, this.setState.bind(this))} id="recap-button" btnType="valider" >
              Valider le formulaire
            </Button>

          </section>
          <section className="col-md-12 col-sm-12 col-xs-12 text-right" >
            <Modal titleModal="Demande de confirmation" show={this.state.showModal} onClose={() => handleClose(this.setState.bind(this))} >
              <RecapPromotion title={this.state.title} start={start} end={end} slack={slack} formateurs={formateurs} students={students} selectedCity={selectedCity.value ? selectedCity.value : this.state.citySelected} selectedProgramme={selectedProgramme.title ? selectedProgramme.title : this.state.programmeSelected} clicked={() => handleUpdate(this.state, this.setState.bind(this))} />
            </Modal>

          </section>
        </article>
      </Page>
    )
  }
}

export default UpdatePromotion
