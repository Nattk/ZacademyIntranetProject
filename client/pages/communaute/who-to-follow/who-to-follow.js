import React from 'react'
import axios from 'axios'
import Page from '../../../layouts/classic'
import Header from '../../../components/Header/header-button-add'
import CardContact from '../../../components/CardContact/cardContact'
import Modal from '../../../components/Modal/modal'
import FormulaireComponent from '../../../components/Formulaire/formulaireComponent'
import { DeleteDescription } from '../../../components/Modal/SectionModal'
import { onShowRecapForm } from '../../../components/Methods/function-validation'
import { handleModalAdd, handleCloseSwitch } from '../../../components/Modal/function-modal'
import { getAllPromotions, getWhoFollow } from '../../../services/creation-promotion'
import { handleUpdate, handleSubmit, handleRemove, ContentDetails, ConfirmationDetails } from './function-who-to-follow'

class WhoFollow extends React.Component {
  constructor (props) {
    super(props)
    this.state = { recap: false, contacts: '', promotions: '' }
    this.onChangePromotion = this.onChangePromotion.bind(this)
  }

  componentDidMount () {
    const user = window.localStorage.getItem('user')
    const role = JSON.parse(user).role
    const PromotionID = JSON.parse(user).promotion

    if (role === 'admin' || role === 'superadmin') {
      this.setState({ showButtons: true })
    }
    axios.all([getWhoFollow(), getAllPromotions()])
      .then(axios.spread((follow, promotions) => {
        this.setState({ contacts: follow.data.filter(el => el.promotion === PromotionID), promotions: promotions.data })
      }))

      .catch(err => console.log(err))
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onChangePromotion (selectedPromotion) {
    this.setState({ selectedPromotion })
  }

  render () {
    const { showButtons, showDetails, contacts, formulaireTitleAdd, formulaireUpdate, showModal, descriptionDelete, github, medium, twitter, title, content, avatar, selectedPromotion } = this.state

    const card = (
      contacts ? contacts.map((user) =>
        <CardContact
          key={user.id}
          title={user.title} image
          avatar={user.avatar}
          content={user.content.length > 70 ? user.content.substring(0, 70) + '...' : user.content}
          showButton={showButtons}
          twitter={user.twitter} github={user.github} medium={user.medium}
          remove={() => this.setState({ showModal: true, descriptionDelete: true, formulaire: false, recap: false, formulaireTitleAdd: '', formulaireUpdate: '', id: user.id, showDetails: false })}
          update={() => this.setState({ showModal: true, formulaire: true, recap: false, formulaireUpdate: true, descriptionDelete: false, formulaireTitleAdd: '', title: user.title, content: user.content, id: user.id, avatar: user.avatar, github: user.github, twitter: user.twitter, medium: user.medium, titleValidation: '', contentValidation: '', showDetails: false })}
          showDetails={() => this.setState({ showModal: true, formulaire: false, recap: false, showDetails: true, formulaireUpdate: false, descriptionDelete: false, formulaireTitleAdd: '', title: user.title, content: user.content, id: user.id, avatar: user.avatar, github: user.github, twitter: user.twitter, medium: user.medium, titleValidation: '', contentValidation: '' })}

        />) : null
    )
    const formulaire = (
      <FormulaireComponent
        handleClose={() => handleCloseSwitch(this.setState.bind(this))}
        buttonName={this.state.formulaireUpdate ? 'Mettre à jour' : 'Ajouter'}
        clicked={() => onShowRecapForm(this.state, this.setState.bind(this))}
        onChange={this.onChange.bind(this)}
        title={this.state.title}
        contentDescription
        content={this.state.content}
        avatar={this.state.avatar}
        twitter={this.state.twitter}
        github={this.state.github}
        medium={this.state.medium}
        titleValidation={this.state.titleValidation}
        contentValidation={this.state.contentValidation}
        influenceur contact identity
      />
    )

    return (
      <Page title=" Influenceurs" contextePage="Who-to-follows" >
        <article id="who-to-follow" className="col-md-12 col-sm-12 col-xs-12 section-card" >
          {showButtons ? <Header title="Ajouter un contact" clicked={() => handleModalAdd(this.setState.bind(this))} showAlertSuccess={this.state.showAlertSuccess} showAlertDelete={this.state.showAlertDelete} showAlertUpdate={this.state.showAlertUpdate} /> : null}
          <section className="col-md-12 col-sm-12 col-xs-12 section-article" >
            {card}
            <Modal show={showModal} onClose={() => handleCloseSwitch(this.setState.bind(this))} titleModal={formulaireTitleAdd ? "Ajout d'un contact" : '' || formulaireUpdate ? 'Modification du contact' : '' || showDetails ? this.state.title : ''}>
              {this.state.formulaire ? formulaire : ''}
              {this.state.recap
                ? <ConfirmationDetails title={title} content={content} avatar={avatar} medium={medium} github={github} twitter={twitter} promotion={selectedPromotion.title}
                  onClose={() => handleCloseSwitch(this.setState.bind(this))}
                  clicked={this.state.formulaireUpdate
                    ? () => handleUpdate(this.state, this.state.id, this.setState.bind(this)) : () => handleSubmit(this.state, this.setState.bind(this))}
                /> : null}
              {showDetails ? <ContentDetails title={title} content={content} github={github} medium={medium} twitter={twitter} promotion={selectedPromotion ? selectedPromotion.title : selectedPromotion} onClose={() => handleCloseSwitch(this.setState.bind(this))} /> : null}
              {descriptionDelete ? <DeleteDescription handleDelete={() => handleRemove(this.state, this.state.id, this.setState.bind(this))} handleClose={() => handleCloseSwitch(this.setState.bind(this))} title="Êtes-vous sûr de vouloir supprimer ce profil" /> : false}
            </Modal>

          </section>
        </article>
      </Page>
    )
  }
}

export default WhoFollow
