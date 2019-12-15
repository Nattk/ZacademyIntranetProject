
import Page from '../../../layouts/classic'
import React from 'react'
import Modal from '../../../components/Modal/modal'
import axios from 'axios'
import CardContact from '../../../components/CardContact/cardContact'
import { handleCloseSwitch } from '../../../components/Modal/function-modal'
import { ContentDetails } from './function-contact-utile'
import '../../../styles/sass/styles.scss'
class ContactsUtiles extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showContacts: false
    }
  }

  componentDidMount () {
    const user = window.localStorage.getItem('user')
    const promotionID = JSON.parse(user).promotion
    const role = JSON.parse(user).role
    if (role === 'admin') {
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
      })
      .catch(err => console.log(err))
  }

  render () {
    const { showModal, showButtons } = this.state
    console.log(this.state)
    return (
      <Page title="Contact Utiles" contextePage="Contact Utiles">
        <article id="contact-utiles" className="col-md-12 col-sm-12 col-xs-12 section-card" >

          <section className="col-md-12 col-sm-12 col-xs-12 section-article" >
            {this.state.contacts ? this.state.contacts.map((user, id) => (

              <CardContact
                key={user.id}
                image
                avatar={user.avatar}
                firstName={user.firstName}
                lastName={user.lastName}
                title={user.title}
                content={user.help.length > 70 ? user.help.substring(0, 70) + '...' : user.help}
                mail={user.email}
                phone={user.phone}
                showButton={showButtons}
                update={() => this.setState({ showModal: true, formulaire: true, recap: false, formulaireUpdate: true, descriptionDelete: false, formulaireTitleAdd: '', title: user.title, content: user.content, id: user.id, avatar: user.avatar, github: user.github, twitter: user.twitter, medium: user.medium, titleValidation: '', contentValidation: '', showDetails: false })}
                showDetails={() => this.setState({ showModal: true, formulaire: false, recap: false, showDetails: true, formulaireUpdate: false, descriptionDelete: false, formulaireTitleAdd: '', lastName: user.lastName, firstName: user.firstName, help: user.help, id: user.id, avatar: user.avatar, phone: user.phone, email: user.email })}
              />
            )) : null}

            <Modal
              show={showModal}
              onClose={() => handleCloseSwitch(this.setState.bind(this))}
            >

              <ContentDetails
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                help={this.state.help}
                phone={this.state.phone}
                email={this.state.email}
                onClose={() => handleCloseSwitch(this.setState.bind(this))}
              />
            </Modal>
          </section>
        </article>
      </Page>
    )
  }
}

export default ContactsUtiles
