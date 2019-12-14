
import Page from '../../../layouts/classic'
import React from 'react'
import Modal from '../../../components/Modal/modal'
import axios from 'axios'
import CardContact from '../../../components/CardContact/cardContact'
import Button from '../../../components/Boutons/Boutons'
import { handleClose, handleModalAdd } from '../../../components/Modal/function-modal'
import '../../../styles/sass/styles.scss'
class ContactsUtiles extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    axios.get('http://localhost:3333/api/users')
      .then((data) => {
        this.setState({ contacts: data.data })
      })
      .catch(err => console.log(err))
  }

  render () {
    console.log(this.state)
    const { showModal } = this.state
    const showDetails =
      <article>
        <section className="title-style-modal " >
          <p><span className="promotion-p-style"></span> {this.state.title}</p>
          <p><span className="promotion-p-style">Description</span>&nbsp; {this.state.content}</p>
          {this.state.github ? <p><span className="promotion-p-style">Lien Github</span>&nbsp; {this.state.github}</p> : null}
          {this.state.twitter ? <p><span className="promotion-p-style">Lien Twitter</span>&nbsp; {this.state.twitter}</p> : null}
          {this.state.medium ? <p><span className="promotion-p-style">Lien Medium</span>&nbsp; {this.state.medium}</p> : null}
        </section>

        <footer className="text-right">
          <Button clicked={() => handleClose(this.setState.bind(this))}
            id="confirm-creation-promotion" btnType="valider">
            Revenir
          </Button>
        </footer>
      </article>
    return (
      <Page title="Contact Utiles" contextePage="Contact Utiles">
        <article id="contact-utiles" className="col-md-12 col-sm-12 col-xs-12 section-card" >

          <section className="col-md-12 col-sm-12 col-xs-12 section-article" >
            {/* {this.state.fakeData.map((user, id) => (
              <CardContact
                key={id}
                image
                avatar={user.avatar}
                title={user.title}
                content={user.content}
                mail={user.mail}
                phone={user.phone}

              />
            ))} */}
            <Modal
              show={showModal}
              onClose={() => handleClose(this.setState.bind(this))}
            >
              {this.state.showDetails ? showDetails : null}
            </Modal>
          </section>
        </article>
      </Page>
    )
  }
}

export default ContactsUtiles
