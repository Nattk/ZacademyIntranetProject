import React, { Component } from 'react'
import Page from '../../../layouts/classic'
import Header from '../../../components/whoToFollow/header-who-to-follow'
import Modal from '../../../components/Modal/modal'
import DeleteCard from '../../../components/Modal/sectionDeleteModal'
import FollowCard from '../../../components/whoToFollow/card/who-to-follow-card'
import Formulaire from '../../../components/Formulaire/formulaire'
import Data from '../../../components/whoToFollow/data.json'

import '../../../styles/sass/styles.scss'

class Follow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fakeData: Data,
      id: '',
      firstName: '',
      lastName: '',
      fonction: '',
      description: '',
      linkGithub: '',
      linkLinkedin: '',
      linkTwitter: '',
      img: '',
      firstNameValidation: '',
      lastNameValidation: '',
      fonctionValidation: '',
      descriptionValidation: '',
      imgValidation: '',
      descriptionDelete: false,
      formulaire: false,
      showModal: false,
      showModalDelete: false,
      showModalUpdate: false,
      showAlertSuccess: false,
      showAlertUpdate: false,
      formulaireUpdate: false,
      showAlertDelete: false,
      formulaireTitleAdd: false

    }
    this.handleClose = this.handleClose.bind(this)
    this.handleModalAdd = this.handleModalAdd.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleValidation = this.handleValidation.bind(this)
  }

  handleClose () {
    this.setState({ showModal: false, firstNameValidation: '', lastNameValidation: '', fonctionValidation: '', descriptionValidation: '' })
  }

  handleModalAdd () {
    this.setState({
      showModal: true, formulaire: true, formulaireTitleAdd: true, formulaireUpdate: false, descriptionDelete: false, firstName: '', lastName: '', fonction: '', description: '', linkGithub: '', linkLinkedin: '', linkTwitter: ''
    })
  }

  handleDelete (id) {
    const users = this.state.fakeData.filter((user) => user.id !== id)
    const index = this.state.fakeData.findIndex((user) => user.id === id)
    if (index === -1) { this.state.fakeData.push('something') } else {
      this.setState({ fakeData: users, lastName: this.state.fakeData[index].lastName, firstName: this.state.fakeData[index].firstName, showModal: false, showAlertDelete: true })
    }
    setTimeout(() => {
      this.setState({ showAlertDelete: false })
    }, 5000)
  }

  handleValidation () {
    this.state.firstName === '' ? this.setState({ firstNameValidation: 'Un prénom est requis' }) : this.setState({ firstNameValidation: '' })
    this.state.lastName === '' ? this.setState({ lastNameValidation: 'Un nom de famille est requis' }) : this.setState({ lastNameValidation: '' })
    this.state.fonction === '' ? this.setState({ fonctionValidation: 'Une fonction  est requise' }) : this.setState({ fonctionValidation: '' })
    this.state.description === '' ? this.setState({ descriptionValidation: 'Une description est requise' }) : this.setState({ descriptionValidation: '' })
  }

  handleSubmit () {
    const elements = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      fonction: this.state.fonction,
      img: this.state.img,
      description: this.state.description.length > 70 ? this.state.description.substring(0, 70) + '...' : this.state.description,
      linkGithub: this.state.linkGithub,
      linkReddit: this.state.linkReddit,
      linkLinkedin: this.state.linkLinkedin,
      linkTwitter: this.state.linkTwitter,
      id: Math.random().toString(36).substr(2, 9)
    }
    const data = this.state.fakeData
    const newdata = [...data, elements]
    console.log(this.state.img)
    if (this.state.firstName && this.state.lastName && this.state.fonction && this.state.description !== '') {
      this.setState({ fakeData: newdata, showAlertSuccess: true, showModal: false })
      setTimeout(() => {
        this.setState({
          showAlertSuccess: false
        })
      }, 5000)
    } else { this.handleValidation() }
  }

  handleUpdate (id) {
    const elements = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      fonction: this.state.fonction,
      description: this.state.description.length > 70 ? this.state.description.substring(0, 70) + '...' : this.state.description,
      linkGithub: this.state.linkGithub,
      linkReddit: this.state.linkReddit,
      linkLinkedin: this.state.linkLinkedin,
      linkTwitter: this.state.linkTwitter,
      id: this.state.id

    }
    const index = this.state.fakeData.findIndex((e) => e.id === id)
    if (index === -1) {
      this.state.fakeData.push(elements)
    } else { this.state.fakeData[index] = elements }

    const updatedObj = { ...this.state.fakeData[index] }
    const updatedProjects = [
      ...this.state.fakeData.slice(0, index),
      updatedObj,
      ...this.state.fakeData.slice(index + 1)
    ]
    if (this.state.firstName && this.state.lastName && this.state.fonction && this.state.description !== '') {
      this.setState({ showModal: false, fakeData: updatedProjects, showAlertUpdate: true })
    } else {
      this.handleValidation()
    }
    setTimeout(() => {
      this.setState({ showAlertUpdate: false })
    }, 5000)
  }

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    const deleteDescription = (
      <DeleteCard handleDelete={() => this.handleDelete(this.state.id)} handleClose={this.handleClose} title="Êtes-vous sûr de vouloir supprimer ce profil" />
    )
    const formulaire = (
      <Formulaire
        handleClose={this.handleClose}
        clicked={this.state.formulaireUpdate ? () => this.handleUpdate(this.state.id) : this.handleSubmit}
        buttonName={this.state.formulaireUpdate ? 'Mettre à jour' : 'Ajouter'}
        onChange={this.onChange}
        uploadPicture={this.state.img}
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        fonction={this.state.fonction}
        description={this.state.description}
        linkGithub={this.state.linkGithub}
        linkTwitter={this.state.linkTwitter}
        linkLinkedin={this.state.linkLinkedin}
        firstNameValidation={this.state.firstNameValidation}
        lastNameValidation={this.state.lastNameValidation}
        fonctionValidation={this.state.fonctionValidation}
        descriptionValidation={this.state.descriptionValidation} />
    )

    const modal = (
      <Modal
        show={this.state.showModal}
        onClose={this.handleClose}
        titleModal={this.state.formulaireTitleAdd ? "Ajout d'un utilisateur" : '' || this.state.formulaireUpdate ? 'Modification de l\'influenceur' : ''}
        formulaire={this.state.formulaire ? formulaire : false}
        deleteDescription={this.state.descriptionDelete ? deleteDescription : false} />
    )

    return (
      <Page title=" Influenceurs" contextePage="Influenceurs" >
        <article id="who-to-follow" className="col-md-12 col-sm-12 col-xs-12 section-card" >
          <Header clicked={this.handleModalAdd} showAlertSuccess={this.state.showAlertSuccess} showAlertDelete={this.state.showAlertDelete} showAlertUpdate={this.state.showAlertUpdate} firstName={this.state.firstName} lastName={this.state.lastName} />
          <section className="col-md-12 col-sm-12 col-xs-12 section-article" >
            {this.state.fakeData.map((user, id) => (
              <FollowCard
                key={id}
                firstName={user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1).toLowerCase()}
                lastName={user.lastName.toUpperCase()}
                fonction={user.fonction.length > 80 ? user.fonction.charAt(0).toUpperCase() + user.fonction.slice(2).toLowerCase().substring(0, 80) + '...' : user.fonction.charAt(0).toUpperCase() + user.fonction.slice(1).toLowerCase()}
                description={user.description.length > 80 ? user.description.charAt(1).toUpperCase() + user.description.slice(2).toLowerCase().substring(0, 80) + '...' : user.description.charAt(0).toUpperCase() + user.description.slice(1).toLowerCase()}
                linkGithub={user.linkGithub}
                linkLinkedin={user.linkLinkedin}
                linkTwitter={user.linkTwitter}
                remove={() => this.setState({ showModal: true, descriptionDelete: true, formulaire: false, id: user.id })}
                update={() => this.setState({
                  showModal: true, formulaire: true, formulaireUpdate: true, descriptionDelete: false, formulaireTitleAdd: false, id: user.id, firstName: user.firstName, lastName: user.lastName, fonction: user.fonction, description: user.description, linkGithub: user.linkGithub, linkLinkedin: user.linkLinkedin, linkTwitter: user.linkTwitter
                })}
              />
            ))}

            {modal}
          </section>
        </article>
      </Page>
    )
  }
}

export default Follow
