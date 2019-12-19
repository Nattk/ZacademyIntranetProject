
import Page from '../../../layouts/classic'
import React from 'react'
import Modal from '../../../components/Modal/modal'
import axios from 'axios'
import CardContact from '../../../components/CardContact/cardContact'
import { handleCloseSwitch, handleClose } from '../../../components/Modal/function-modal'
import FormulaireComponent from '../../../components/Formulaire/formulaireComponent'
import { ContentDetails, ConfirmationDetails, handleUpdate, handleRemove, onShowRecapForm } from '../../../components/Methods/function-contact-utile'
import { DeleteDescription } from '../../../components/Modal/SectionModal'
import '../../../styles/sass/styles.scss'
import userService from '../../../services/users'
class ContactsUtiles extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showContacts: false,
      recap: false

    }
  }

  componentDidMount () {
    const user = JSON.parse(localStorage.getItem('user'))

    userService.setToken(user.token)
    userService.getAll().then(res => {
      this.setState({ user: res.role })
    }
    ).catch(err => {
      alert(err)
    })

    axios.get('http://localhost:3333/api/users')
      .then((data) => {
        const userImportant = data.data.filter(el => el.important === true && el.promotion !== null)
        userImportant.filter(el => el.promotion !== null)
        const ContactsUtiles = userImportant.filter(el => el.promotion.id === JSON.parse(localStorage.getItem('user')).promotion)
        console.log(data.data.filter(el => el.promotion !== null))
        this.setState({
          contacts: ContactsUtiles,
          id: JSON.parse(localStorage.getItem('user')).promotion
        })
      })
      .catch(err => console.log(err))
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    console.log(this.state)

    const { showModal, firstName, lastName, help, email, phone, descriptionDelete, showDetails } = this.state

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
        emailValidation={this.state.emailValidation}

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
                showButton={this.state.user === 'admin' || this.state.user === 'superadmin'}
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
                ? <ConfirmationDetails firstName={firstName} lastName={lastName} help={help} email={email} phone={phone} avatar={this.state.avatar}
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
                  avatar={this.state.avatar}
                  onClose={() => handleCloseSwitch(this.setState.bind(this))}
                /> : null}
              {descriptionDelete ? <DeleteDescription handleDelete={() => handleRemove(this.state, this.state.id, this.setState.bind(this))} handleClose={() => handleClose(this.setState.bind(this))} title="Êtes-vous sûr de vouloir retirer ce profil de la liste des contact utiles?
                PS:  Il ne sera pas supprimé de la liste des utilisateurs." /> : false}
            </Modal>
          </section>
        </article>
      </Page>
    )
  }
}

export default ContactsUtiles
