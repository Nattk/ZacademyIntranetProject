import React from 'react'
import Page from '../../../layouts/classic'
import Header from '../../../components/Header/header-button-add'
import Modal from '../../../components/Modal/modal'

import ValidationMethod from '../../../components/Methods/ValidationMethod'
import { Form, ShowCard, DeleteDescription } from '../../../components/Modal/SectionModal'
import Data from '../../../components/whoToFollow/data.json'
import '../../../styles/sass/styles.scss'
class Follow extends ValidationMethod {
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
    this.handleModalAdd = this.handleModalAdd.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleModalAdd () {
    this.setState({
      showModal: true, formulaire: true, formulaireTitleAdd: true, formulaireUpdate: false, descriptionDelete: false, firstName: '', lastName: '', fonction: '', description: '', linkLinkedin: '', linkGithub: '', linkTwitter: ''
    })
  }

  handleClose () {
    this.setState({
      showModal: false, firstNameValidation: '', lastNameValidation: '', fonctionValidation: '', descriptionValidation: ''
    })
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

    if (this.state.firstName && this.state.lastName && this.state.fonction && this.state.description !== '') {
      this.setState({ fakeData: newdata, showAlertSuccess: true, showModal: false, firstNameValidaion: '', lastNameValidation: '', fonctionValidation: '', descriptionValidation: '' })
      setTimeout(() => {
        this.setState({
          showAlertSuccess: false
        })
      }, 5000)
    } else {
      this.handleValidation()
    }
  }

  render () {
    const Formul = (
      <Form handleClose={this.handleClose}
        buttonName={this.state.formulaireUpdate ? 'Mettre à jour' : 'Ajouter'}
        clicked={this.state.formulaireUpdate ? () => this.handleUpdate(this.state.id) : this.handleSubmit}
        onChange={this.onChange} lastName={this.state.lastName}
        influenceur
        contact
        identity
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        fonction={this.state.fonction}
        description={this.state.description}
        linkGithub={this.state.linkGithub}
        linkLinkedin={this.state.linkLinkedin}
        linkTwitter={this.state.linkTwitter}
        firstNameValidation={this.state.firstNameValidation}
        lastNameValidation={this.state.lastNameValidation}
        fonctionValidation={this.state.fonctionValidation}
        descriptionValidation={this.state.descriptionValidation}

      />
    )
    return (
      <Page title=" Influenceurs" contextePage="Influenceurs" >
        <article id="who-to-follow" className="col-md-12 col-sm-12 col-xs-12 section-card" >
          <Header clicked={this.handleModalAdd} showAlertSuccess={this.state.showAlertSuccess} showAlertDelete={this.state.showAlertDelete} showAlertUpdate={this.state.showAlertUpdate} firstName={this.state.firstName} lastName={this.state.lastName} title="Ajouter un influenceur" />
          <section className="col-md-12 col-sm-12 col-xs-12 section-article" >
            {this.state.fakeData.map((user, id) => (
              <ShowCard
                key={id}
                firstName={user.firstName}
                lastName={user.lastName}
                fonction={user.fonction}
                description={user.description}
                linkLinkedin={user.linkLinkedin}
                linkGithub={user.linkGithub}
                linkTwitter={user.linkTwitter}
                picture
                remove={() => this.setState({ showModal: true, descriptionDelete: true, formulaire: false, id: user.id })}
                update={() => this.setState({
                  showModal: true, formulaire: true, formulaireUpdate: true, descriptionDelete: false, formulaireTitleAdd: false, id: user.id, firstName: user.firstName, lastName: user.lastName, fonction: user.fonction, description: user.description, linkLinkedin: user.linkLinkedin, linkGithub: user.linkGithub, linkTwitter: user.linkTwitter
                })}
              />
            ))}
            <Modal
              show={this.state.showModal}
              onClose={this.handleClose}
              titleModal={this.state.formulaireTitleAdd ? "Ajout d'un contact" : '' || this.state.formulaireUpdate ? 'Modification du contact' : ''}
              formulaire={this.state.formulaire
                ? Formul : false}
              deleteDescription={this.state.descriptionDelete ? <DeleteDescription handleDelete={() => this.handleDelete(this.state.id)} handleClose={this.handleClose} title="Êtes-vous sûr de vouloir supprimer ce profil" /> : false} />
          </section>
        </article>
      </Page>
    )
  }
}
export default Follow
