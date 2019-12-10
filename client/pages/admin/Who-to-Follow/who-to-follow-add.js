import React, { Fragment } from 'react'
import Modal from '../../../components/Modal/modal'
import { DeleteDescription } from '../../../components/Modal/SectionModal'
import FormulaireWho2Follow from './formulaire'
import '../../../styles/sass/styles.scss'
import { handleValidation } from './handleConfirmation'
class Who2FollowAdmin extends FormulaireWho2Follow {
  constructor (props) {
    super(props)
    this.state = {
      descriptionDelete: false,
      formulaire: false,
      showModalDelete: false,
      showModalUpdate: false,
      showAlertSuccess: false,
      showAlertUpdate: false,
      formulaireUpdate: false,
      showAlertDelete: false,
      formulaireTitleAdd: false,
      showButton: false,
      showModal: true

    }
    this.handleModalAdd = this.handleModalAdd.bind(this)
  }

  handleModalAdd () {
    this.setState({
      showModal: true, formulaire: true, formulaireTitleAdd: true, formulaireUpdate: false, descriptionDelete: false, titleValidation: '', descriptionValidation: '', title: '', description: '', linkMedium: '', linkGithub: '', linkTwitter: '', image: ''
    })
  }

  componentDidMount () {
    const user = window.localStorage.getItem('user')
    const role = JSON.parse(user).role
    console.log(role === 'superadmin')
    if (role === 'superadmin') {
      this.setState({ showButton: true })
    } else {
      return this.state.showButton
    }
  }

  render () {
    return (
      <Fragment>
        <Modal show={this.state.showModal} onClose={this.handleClose} titleModal={this.state.formulaireTitleAdd ? "Ajout d'un contact" : '' || this.state.formulaireUpdate ? 'Modification du contact' : ''}>
          {/* {this.state.formulaire ? <FormulaireWho2Follow /> : false}
          {this.state.descriptionDelete ? <DeleteDescription handleDelete={() => this.handleDelete(this.state.id)} handleClose={this.handleClose} title="Êtes-vous sûr de vouloir supprimer ce profil" /> : false} */}
        </Modal>

      </Fragment>
    )
  }
}
export default Who2FollowAdmin
