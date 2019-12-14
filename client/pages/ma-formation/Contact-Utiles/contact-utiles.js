
import Page from '../../../layouts/classic'
import React from 'react'
import Header from '../../../components/Header/header-button-add'
import Modal from '../../../components/Modal/modal'
import ValidationMethod from '../../../components/Methods/ValidationMethod'
import CardContact from '../../../components/CardContact/cardContact'
import { Form, DeleteDescription } from '../../../components/Modal/SectionModal'
import '../../../styles/sass/styles.scss'
class ContactsUtiles extends ValidationMethod {
  constructor (props) {
    super(props)
    this.handleModalAdd = this.handleModalAdd.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleModalAdd () {
    this.setState({
      showModal: true, formulaire: true, contactDetail: true, formulaireTitleAdd: true, formulaireUpdate: false, descriptionDelete: false, firstName: '', lastName: '', fonction: '', description: '', phone: '', mail: ''
    })
  }

  handleClose () {
    this.setState({ showModal: false, firstNameValidation: '', lastNameValidation: '', fonctionValidation: '', descriptionValidation: '', mailValidation: '', phoneValidation: '' })
  }

  render () {
    const Formul = (
      <Form handleClose={this.handleClose}
        buttonName={this.state.formulaireUpdate ? 'Mettre à jour' : 'Ajouter'}
        clicked={this.state.formulaireUpdate ? () => this.handleUpdate(this.state.id) : this.handleSubmit}
        onChange={this.onChange} lastName={this.state.lastName}
        contact
        contactDetail
        picture
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        fonction={this.state.fonction}
        description={this.state.description}
        mail={this.state.mail}
        phone={this.state.phone}
        firstNameValidation={this.state.firstNameValidation}
        lastNameValidation={this.state.lastNameValidation}
        fonctionValidation={this.state.fonctionValidation}
        descriptionValidation={this.state.descriptionValidation}
        phoneValidation={this.state.phoneValidation}
        mailValidation={this.state.mailValidation}
      />
    )
    return (
      <Page title="Contact Utiles" contextePage="Contact Utiles">
        <article id="contact-utiles" className="col-md-12 col-sm-12 col-xs-12 section-card" >
          <Header clicked={this.handleModalAdd} showAlertSuccess={this.state.showAlertSuccess} showAlertDelete={this.state.showAlertDelete} showAlertUpdate={this.state.showAlertUpdate} firstName={this.state.firstName} lastName={this.state.lastName} title="Ajouter un contact" />
          <section className="col-md-12 col-sm-12 col-xs-12 section-article" >
            {this.state.fakeData.map((user, id) => (
              <CardContact
                key={id}
                image
                avatar={user.avatar}
                firstName={user.firstName}
                lastName={user.lastName}
                fonction={user.fonction}
                description={user.description}
                mail={user.mail}
                phone={user.phone}
                remove={() => this.setState({ showModal: true, descriptionDelete: true, formulaire: false, id: user.id })}
                update={() => this.setState({
                  showModal: true, formulaire: true, formulaireUpdate: true, descriptionDelete: false, formulaireTitleAdd: false, id: user.id, firstName: user.firstName, lastName: user.lastName, fonction: user.fonction, description: user.description, mail: user.mail, phone: user.phone
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

export default ContactsUtiles
