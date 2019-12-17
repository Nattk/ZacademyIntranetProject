import React, { Component } from 'react'
import Page from '../../../layouts/admin'
import Button from '../../../components/Boutons/Boutons'
import userService from '../../../services/users'
import UserModal from '../../../components/Modal/UserModal'
import CSVReader from 'react-csv-reader'
import AllNotification from '../../../components/Notifications/notifications'

class CreaUtilisateur extends Component {
  state = {
    promotions: [],
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    role: 'eleve',
    phone: '',
    help: '',
    promotion: '',
    promotionName: '',
    important: false,
    avatar: '',
    modalShow: false,
    notifShow: false,
    errorStyle: false,
    notifMessage: ''
  }

  handlefirstnameChange = (event) => {
    this.setState({ firstName: event.value })
  }

  handlelastnameChange = (event) => {
    this.setState({ lastName: event.value })
  }

  handleemailChange = (event) => {
    this.setState({ email: event.value })
  }

  handlepasswordChange = (event) => {
    this.setState({ password: event.value })
  }

  handlephoneChange = (event) => {
    this.setState({ phone: event.value })
  }

  handleroleChange (event) {
    this.setState({ role: event.target.value })
  }

  handlehelpChange = (event) => {
    this.setState({ help: event.value })
  }

  handleContactUtileChange = (event) => {
    this.setState({ important: event.value })
  }

  handleProfileImgChange = (event) => {
    this.setState({ avatar: event.value })
  }

  handlepromotionChange (event) {
    fetch(`http://localhost:3333/api/promotions/${event.target.value}`)
      .then(response => response.json())
      .then(data => this.setState({ promotionName: data.title }))

    this.setState({ promotion: event.target.value })
  }

  handleChangeChk (e) {
    this.setState({ important: !this.state.important })
  }

  componentDidMount () {
    fetch('http://localhost:3333/api/promotions')
      .then(response => response.json())
      .then(data => this.setState({ promotions: data }))
  }

  handleOpenModal = () => {
    this.setState({ modalShow: true })
  }

  handleNotif = (error, message) => {
    error
      ? this.setState({ errorStyle: true, notifMessage: `${error.response.data.error}` })
      : this.setState({ errorStyle: false, notifMessage: `${message}` })
    this.setState({ notifShow: true })
    setTimeout(() => this.setState({ notifShow: false }), 10000)
  }

  handleConfirmForm = async (e) => {
    e.preventDefault()
    try {
      await userService.create({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        role: this.state.role,
        phone: this.state.phone,
        help: this.state.help,
        important: this.state.important,
        avatar: this.state.avatar,
        promotionId: this.state.promotion
      })
      this.handleClose()
      this.handleNotif(null, `L'utilisateur ${this.state.firstName} ${this.state.lastName} a bien été créé`)
    } catch (error) {
      this.handleClose()
      this.handleNotif(error)
    }
    this.setState({ firstName: '' })
    this.setState({ lastName: '' })
    this.setState({ email: '' })
    this.setState({ password: '' })
    this.setState({ help: '' })
    this.setState({ phone: '' })
    this.setState({ avatar: '' })
  }

  handleClose = () => {
    this.setState({ modalShow: false })
  }

  render () {
    const villes = [...new Set(this.state.promotions.map(promo => promo.city))]
    const papaparseOptions = {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      transformHeader: header =>
        header
          .toLowerCase()
          .replace(/\W/g, '_')
    }
    return (
      <Page title="Création Utilisateur">
        <form className="container" id="utilisateur">
          <header className="card-header text-center">
            Creation d'un utilisateur
          </header>
          <section className="section">
            <div className="form-group">
              <label htmlFor="userfirstname">Prénom*</label>
              <input type="text" name="userfirstname" className="form-control" id="exampleFormControlInput1" value={this.state.firstName} placeholder="Prénom" onChange={e => this.handlefirstnameChange(e.target)} required></input>
            </div>
            <div className="form-group">
              <label htmlFor="username">Nom*</label>
              <input type="text" name="username" className="form-control" id="exampleFormControlInput1" value={this.state.lastName} placeholder="Nom" onChange={e => this.handlelastnameChange(e.target)} required></input>
            </div>
            <div className="form-group">
              <label htmlFor="useremail">Email*</label>
              <input type="email" name="useremail" className="form-control" id="exampleFormControlInput1" value={this.state.email} placeholder="Email" onChange={e => this.handleemailChange(e.target)} required></input>
            </div>
            <div className="form-group">
              <label htmlFor="userpwd">Mot de Passe*</label>
              <input type="password" name="userpwd" className="form-control" id="exampleFormControlInput1" value={this.state.password} placeholder="Mot de Passe" onChange={e => this.handlepasswordChange(e.target)} required></input>
            </div>
            <div className="form-group">
              <label htmlFor="userphone">Téléphone</label>
              <input type="Telephone" name="userphone" className="form-control" id="exampleFormControlInput1" value={this.state.phone} placeholder="Telephone" onChange={e => this.handlephoneChange(e.target)}></input>
            </div>
            <div className="form-group">
              <label htmlFor="userdescription">Description</label>
              <textarea className="form-control" name="userdescription" value={this.state.help} onChange={e => this.handlehelpChange(e.target)} ></textarea>
            </div><div> Contact Utile ?
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" name="checkbox" id="inlineRadio1" value={this.state.important} onChange={e => this.handleChangeChk(e)} />
                <label className="form-check-label" htmlFor="checkbox"></label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="profileimg">Image de profil</label>
              <input type="text" name="profileimg" className="form-control" id="exampleFormControlInput1" value={this.state.avatar} placeholder="Image de profil" onChange={e => this.handleProfileImgChange(e.target)} />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role*</label>
              <select className="custom-select" multiple defaultValue={this.props.role} onChange={e => this.handleroleChange(e)} required>
                <option value="eleve">Eleve</option>
                <option value="formateur">Formateur</option>
                <option value="admin">Admin</option>
                <option value="superadmin">Super Admin</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="choices-groups">Promotion</label>
              <select className="form-control" name="choices-groups" id="choices-groups" multiple value={this.props.promotion} onChange={e => this.handlepromotionChange(e)}>
                {villes.map(ville => {
                  const promoOfVille = this.state.promotions.filter(promo => promo.city === ville)
                  return (<optgroup label={ville} key={ville}>{promoOfVille.map(promo => {
                    return (
                      <option key={promo.id} value={promo.id}>{promo.title}</option>
                    )
                  })}</optgroup>)
                }
                )}
              </select>
            </div>
            <div className="form-group">
            * Champs obligatoires
              <Button
                btnType="valider"
                clicked={this.handleOpenModal}

              >
                Ajout utilisateur
              </Button>
            </div>
            <div className="form-group">

              <CSVReader label="Ajouter plusieurs utilisateurs par CSV" parserOptions={papaparseOptions} cssClass="csv-reader-input" onFileLoaded={usersCSV => {
                try {
                  usersCSV.map(async userCSV => {
                    if (userCSV) {
                      await userService.create({
                        firstName: userCSV.pr_nom,
                        lastName: userCSV.nom,
                        email: userCSV.mail,
                        password: userCSV.mdp_academy,
                        role: 'eleve',
                        phone: `0${userCSV.tel}`,
                        help: userCSV.description
                      })
                    }
                  })
                  this.handleNotif(null, 'Les utilisateurs ont bien été créés')
                } catch (error) {
                  this.handleNotif(error)
                }
              }} > </CSVReader>
            </div>
            <div className="form-group">

              <UserModal
                onClose={this.handleClose}
                onSubmit={e => this.handleConfirmForm(e)} {...this.state}
                titleModal="Confirmation"></UserModal><br></br>
            </div>

          </section>
          <AllNotification alertType={this.state.errorStyle ? 'danger' : 'success'} show={this.state.notifShow} notifMessage={this.state.notifMessage} />
        </form>
      </Page>
    )
  }
}
export default CreaUtilisateur
