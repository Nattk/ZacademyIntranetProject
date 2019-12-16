
import Page from '../../../layouts/classic'
import React from 'react'
import Modal from '../../../components/Modal/modal'
import axios from 'axios'
import CardContact from '../../../components/CardContact/cardContact'
import { handleCloseSwitch, handleClose } from '../../../components/Modal/function-modal'
import FormulaireComponent from '../../../components/Formulaire/formulaireComponent'
import { ContentDetails, ConfirmationDetails, handleUpdate, handleRemove, onShowRecapForm } from './function-contact-utile'
import { DeleteDescription } from '../../../components/Modal/SectionModal'
import '../../../styles/sass/styles.scss'
class ContactsUtiles extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showContacts: false,
      recap: false

    }
  }

  componentDidMount () {
    const user = window.localStorage.getItem('user')
    const promotionID = JSON.parse(user).promotion
    const role = JSON.parse(user).role
    if (role === 'superadmin' || role === 'admin') {
      this.setState({ showContacts: true })
    }
    axios.get('http://localhost:3333/api/users')
      .then((data) => {
        const promotionUser = data.data.filter(el => el.promotion !== null)
        promotionUser.filter(el => el.id === promotionID)
        const userImportant = data.data.filter(el => el.important === true && el.promotion !== null)
        userImportant.filter(el => el.promotion !== null)
        const ContactsUtiles = userImportant.filter(el => el.promotion.id === promotionID)
        if (this.state.showContacts === false) {
          this.setState({ contacts: ContactsUtiles })
        } else {
          this.setState({ contacts: userImportant })
        }
        if (role !== 'eleve' || role !== 'formateur') {
          this.setState({ showButtons: true })
        }
        return this.state.showButtons
      })
      .catch(err => console.log(err))
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target)
  }

  render () {
    const { showModal, showButtons, firstName, lastName, help, email, phone, descriptionDelete, showDetails } = this.state
    console.log(this.state)

    const formulaire = (

      <FormulaireComponent
        handleClose={() => handleClose(this.setState.bind(this))}
        buttonName={this.state.formulaireUpdate ? 'Mettre à jour' : 'Ajouter'}
        clicked={() => onShowRecapForm(this.state, this.setState.bind(this))}
        onChange={this.onChange.bind(this)}
        contactUtil
        contactDetail
        helpDescription
        picture
        avatar={this.state.avatar}
        lastName={this.state.lastName}
        firstName={this.state.firstName}
        help={this.state.help}
        phone={this.state.phone}
        mail={this.state.email}
        lastNameValidation={this.state.lastNameValidation}
        firstNameValidation={this.state.firstNameValidation}
        phoneValidation={this.state.phoneValidation}
        contentValidation={this.state.contentValidation}
        mailValidation={this.state.mailValidation}

      />
    )

    return (
      <Page title="Contact Utiles" contextePage="Contact Utiles" >
        <article id="contact-utiles" className="col-md-12 col-sm-12 col-xs-12 section-card" >

          <section className="col-md-12 col-sm-12 col-xs-12 section-article" >
            {this.state.contacts ? this.state.contacts.map((user, id) => (

              <CardContact
                key={user.id}
                image
                avatar={user.avatar}
                firstName={user.firstName}
                lastName={user.lastName}
                content={user.length && user.help.length > 70 ? user.help.substring(0, 70) + '...' : user.help}
                mail={user.email}
                phone={user.phone}
                showButton={showButtons}
                remove={() => this.setState({ showModal: true, descriptionDelete: true, formulaire: false, recap: false, formulaireTitleAdd: '', formulaireUpdate: '', id: user.id, important: false, showDetails: false })}
                update={() => this.setState({ showModal: true, formulaire: true, recap: false, formulaireUpdate: true, descriptionDelete: false, formulaireTitleAdd: '', lastName: user.lastName, firstName: user.firstName, help: user.help, id: user.id, avatar: user.avatar, phone: user.phone, email: user.email, lastNameValidation: '', firstNameValidation: '', contentValidation: '', phoneValidation: '', mailValidation: '', showDetails: false })}
                showDetails={() => this.setState({ showModal: true, formulaire: false, recap: false, showDetails: true, formulaireUpdate: false, descriptionDelete: false, formulaireTitleAdd: '', lastName: user.lastName, firstName: user.firstName, help: user.help, id: user.id, avatar: user.avatar, phone: user.phone, email: user.email })}
              />
            )) : null}

            <Modal
              show={showModal}
              onClose={() => handleCloseSwitch(this.setState.bind(this))}
            >
              {this.state.formulaire ? formulaire : ''}
              {this.state.recap
                ? <ConfirmationDetails firstName={firstName} lastName={lastName} help={help} email={email} phone={phone}
                  onClose={() => handleClose(this.setState.bind(this))}
                  clicked={
                    () => handleUpdate(this.state, this.state.id, this.setState.bind(this))}
                /> : null}
              {showDetails
                ? <ContentDetails
                  firstName={this.state.firstName}
                  lastName={this.state.lastName}
                  help={this.state.help}
                  phone={this.state.phone}
                  email={this.state.email}
                  onClose={() => handleCloseSwitch(this.setState.bind(this))}
                /> : null}
              {descriptionDelete ? <DeleteDescription handleDelete={() => handleRemove(this.state, this.state.id, this.setState.bind(this))} handleClose={() => handleClose(this.setState.bind(this))} title="Êtes-vous sûr de vouloir supprimer ce profil" /> : false}
            </Modal>
          </section>
        </article>
      </Page>
    )
  }
}

export default ContactsUtiles
