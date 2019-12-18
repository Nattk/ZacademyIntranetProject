import React from 'react'
import axios from 'axios'
import Page from '../../../layouts/classic'
import Header from '../../../components/Header/header-button-add'
import CardContact from '../../../components/CardContact/cardContact'
import Modal from '../../../components/Modal/modal'
import FormulaireComponent from '../../../components/Formulaire/formulaireComponent'
import { DeleteDescription } from '../../../components/Modal/SectionModal'
import { onShowRecapFormWho2Follow } from '../../../components/Methods/function-validation'
import { handleModalAdd, handleCloseSwitch, handleModalReturnAdd, handleModalReturnUpdate } from '../../../components/Modal/function-modal'
import { getAllPromotions, getWhoFollow } from '../../../services/creation-promotion'
import { handleUpdate, handleSubmit, handleRemove, ContentDetails, ConfirmationDetails } from '../../../components/Methods/function-who-to-follow'
import userService from '../../../services/users'
class WhoFollow extends React.Component {
  constructor (props) {
    super(props)
    this.state = { recap: false, contacts: '', promotions: '', urlValidation: '', showButtons: '' }
    this.onChangePromotion = this.onChangePromotion.bind(this)
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

    axios.all([getWhoFollow(), getAllPromotions()])
      .then(axios.spread((follow, promotions) => {
        this.setState({
          contacts: follow.data.filter(el => el.promotion === JSON.parse(localStorage.getItem('user')).promotion), promotions: promotions.data, id: JSON.parse(localStorage.getItem('user'))
        })
      }))
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onChangePromotion (selectedPromotion) {
    this.setState({ selectedPromotion })
  }

  render () {
    console.log(this.state)
    const { showDetails, contacts, formulaireTitleAdd, formulaireUpdate, showModal, descriptionDelete, github, medium, twitter, title, content, avatar, selectedPromotion } = this.state
    const card = (
      contacts ? contacts.map((user) =>
        <CardContact
          key={user.id}
          title={user.title} image
          avatar={user.avatar}
          content={user.content.length > 70 ? user.content.substring(0, 70) + '...' : user.content}
          showButton={this.state.user === 'admin' || this.state.user === 'superadmin'}
          twitter={user.twitter} github={user.github} medium={user.medium}
          remove={() => this.setState({ showModal: true, descriptionDelete: true, formulaire: false, recap: false, formulaireTitleAdd: '', formulaireUpdate: '', id: user.id, showDetails: false })}
          update={() => this.setState({
            showModal: true,
            formulaire: true,
            recap: false,
            formulaireUpdate: true,
            descriptionDelete: false,
            formulaireTitleAdd: '',
            title: user.title,
            content: user.content,
            id: user.id,
            avatar: user.avatar,
            github: user.github,
            twitter: user.twitter,
            medium: user.medium,
            titleValidation: '',
            contentValidation: '',
            githubValidation: '',
            twitterValidation: '',
            mediumValidation: '',
            urlSocialMediaValidation: '',
            showDetails: false
          })}
          showDetails={() => this.setState({ showModal: true, formulaire: false, recap: false, showDetails: true, formulaireUpdate: false, descriptionDelete: false, formulaireTitleAdd: '', title: user.title, content: user.content, id: user.id, avatar: user.avatar, github: user.github, twitter: user.twitter, medium: user.medium, titleValidation: '', contentValidation: '' })}

        />) : null
    )
    const formulaire = (
      <FormulaireComponent
        handleClose={() => handleCloseSwitch(this.setState.bind(this))}
        buttonName={this.state.formulaireUpdate ? 'Mettre à jour' : 'Ajouter'}
        clicked={() => onShowRecapFormWho2Follow(this.state, this.setState.bind(this))}
        onChange={this.onChange.bind(this)}
        title={this.state.title}
        urlSocialMediaValidation={this.state.urlSocialMediaValidation}
        contentDescription
        content={this.state.content}
        avatar={this.state.avatar}
        twitter={this.state.twitter}
        github={this.state.github}
        medium={this.state.medium}
        titleValidation={this.state.titleValidation}
        twitterValidation={this.state.twitterValidation}
        mediumValidation={this.state.mediumValidation}
        githubValidation={this.state.githubValidation}
        contentValidation={this.state.contentValidation}
        influenceur contact identity
      />
    )

    return (
      <Page title=" Influenceurs" contextePage="Who-to-follows" >
        <article id="who-to-follow" className="col-md-12 col-sm-12 col-xs-12 section-card" >
          {this.state.user === 'admin' || this.state.user === 'superadmin'

            ? <Header title="Ajouter un contact" clicked={() => handleModalAdd(this.setState.bind(this))} showAlertSuccess={this.state.showAlertSuccess} showAlertDelete={this.state.showAlertDelete} showAlertUpdate={this.state.showAlertUpdate} />
            : null}
          <section className="col-md-12 col-sm-12 col-xs-12 section-article" >
            {card}
            <Modal show={showModal} onClose={() => handleCloseSwitch(this.setState.bind(this))} titleModal={formulaireTitleAdd ? "Ajout d'un contact" : '' || formulaireUpdate ? 'Modification du contact' : '' || showDetails ? this.state.title : ''}>
              {this.state.formulaire ? formulaire : ''}
              {this.state.recap
                ? <ConfirmationDetails title={title} content={content} avatar={avatar} medium={medium} github={github} twitter={twitter} urlSocialMediaValidation={this.state.urlSocialMediaValidation}

                  formulaireUpdate={this.state.formulaireUpdate}
                  onReturnUpdate={() => handleModalReturnUpdate(this.setState.bind(this))}
                  onReturnAdd={() => handleModalReturnAdd(this.setState.bind(this))}
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
