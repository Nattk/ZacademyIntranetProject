import React, { Fragment } from 'react'
import FormulaireComponent from '../../../components/Formulaire/formulaireComponent'
import Modal from '../../../components/Modal/modal'
import axios from 'axios'
import '../../../styles/sass/styles.scss'
class Formulaire extends React.Component {
  constructor (props) {
    super(props)
    this.state = { showModal: true, formulaire: true }
    this.handleModalAdd = this.handleModalAdd.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  handleClose () {
    this.setState({ showModal: false })
  }

  handleModalAdd () {
    this.setState({
      showModal: true, formulaire: true, formulaireTitleAdd: true, formulaireUpdate: false, descriptionDelete: false, firstName: '', lastName: '', fonction: '', description: '', linkLinkedin: '', linkGithub: '', linkTwitter: '', image: ''
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const user = window.localStorage.getItem('user')
    const elements = {
      title: this.state.title,
      content: this.state.content,
      promotionId: JSON.parse(user).promotion

    }

    axios.post('http://localhost:3333/api/follows', elements)
      .then((data) => {
        console.log(data)
        this.setState({ contacts: data, showModal: false })
      }).catch((err) => console.log('err', err))
  }

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value })
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
      phone: this.state.phone,
      mail: this.state.mail,
      id: this.state.id

    }
  }

  render () {
    return (
      <Fragment>

        <Modal show={this.state.showModal} onClose={this.handleClose} titleModal={this.state.formulaireTitleAdd ? "Ajout d'un contact" : '' || this.state.formulaireUpdate ? 'Modification du contact' : ''}>
          {this.state.formulaire

            ? <FormulaireComponent
              handleClose={this.handleClose}
              buttonName={this.state.formulaireUpdate ? 'Mettre à jour' : 'Ajouter'}
              clicked={this.state.formulaireUpdate ? () => this.handleUpdate(this.state.id) : this.handleSubmit}
              onChange={this.onChange}
              influenceur contact identity

            />
            : false}
          {this.state.descriptionDelete ? <DeleteDescription handleDelete={() => this.handleRemove(this.state.id)} handleClose={this.handleClose} title="Êtes-vous sûr de vouloir supprimer ce profil" /> : false}
        </Modal>
      </Fragment>
    )
  }
}

export default Formulaire
