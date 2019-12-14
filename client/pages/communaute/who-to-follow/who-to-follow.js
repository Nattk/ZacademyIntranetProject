import React from 'react'
import axios from 'axios'
import Page from '../../../layouts/classic'
import Header from '../../../components/Header/header-button-add'
import CardContact from '../../../components/CardContact/cardContact'
import Modal from '../../../components/Modal/modal'
import FormulaireComponent from '../../../components/Formulaire/formulaireComponent'
import { DeleteDescription } from '../../../components/Modal/SectionModal'
import { onShowRecapForm } from '../../../components/Methods/function-validation'
import { handleClose, handleModalAdd } from '../../../components/Methods/function-modal'
import { handleUpdate, handleSubmit, handleRemove } from './file'
import Button from '../../../components/Boutons/Boutons'
class WhoFollow extends React.Component {
  constructor (props) {
    super(props)
    this.state = { recap: false }
  }

  componentDidMount () {
    axios.get('http://localhost:3333/api/follows')
      .then((data) => {
        this.setState({ contacts: data.data })
      })
      .catch(err => console.log(err))

    const user = window.localStorage.getItem('user')
    const role = JSON.parse(user).role

    if (role !== 'eleve' || role !== 'formateur') {
      this.setState({ showButtons: true })
    }
    return this.state.showButtons
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    const { showButtons, contacts, formulaireTitleAdd, formulaireUpdate, showModal, descriptionDelete } = this.state

    const card = (
      contacts ? contacts.map((user) =>
        <CardContact
          key={user.id}
          title={user.title} image
          avatar={user.avatar}
          content={user.content.length > 70 ? user.content.substring(0, 70) + '...' : user.content}
          showButton={!!showButtons}
          twitter={user.twitter} github={user.github} medium={user.medium}
          remove={() => this.setState({ showModal: true, descriptionDelete: true, formulaire: false, recap: false, formulaireTitleAdd: '', formulaireUpdate: '', id: user.id, showDetails: false })}
          update={() => this.setState({ showModal: true, formulaire: true, recap: false, formulaireUpdate: true, descriptionDelete: false, formulaireTitleAdd: '', title: user.title, content: user.content, id: user.id, avatar: user.avatar, github: user.github, twitter: user.twitter, medium: user.medium, titleValidation: '', contentValidation: '', showDetails: false })}
          showDetails={() => this.setState({ showModal: true, formulaire: false, recap: false, showDetails: true, formulaireUpdate: false, descriptionDelete: false, formulaireTitleAdd: '', title: user.title, content: user.content, id: user.id, avatar: user.avatar, github: user.github, twitter: user.twitter, medium: user.medium, titleValidation: '', contentValidation: '' })}

        />) : null
    )
    const formulaire = (
      <FormulaireComponent
        handleClose={() => handleClose(this.setState.bind(this))}
        buttonName={this.state.formulaireUpdate ? 'Mettre à jour' : 'Ajouter'}
        clicked={() => onShowRecapForm(this.state, this.setState.bind(this))}
        onChange={this.onChange.bind(this)}
        title={this.state.title}
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
    const recap =
      <article>
        <section className="title-style-modal">
          <p><span className="promotion-p-style"></span> {this.state.title}</p>
          <p><span className="promotion-p-style">Description</span>&nbsp; {this.state.content}</p>
          <p><span className="promotion-p-style">Lien Avatar</span>&nbsp; {this.state.avatar}</p>
        </section>
        <section>
          {this.state.formulaireUpdate
            ? <p>Êtes vous sur de vouloir modifier ce contact "Who-to-follow"  ?</p>
            : <p>Êtes vous sur de vouloir créer ce contact "Who-to-follow"  ?</p>}
        </section>
        <footer className="text-right">
          <Button clicked={() => handleClose(this.setState.bind(this))}
            id="confirm-creation-promotion" btnType="valider">
            Revenir
          </Button>
          <Button clicked={this.state.formulaireUpdate
            ? () => handleUpdate(this.state, this.state.id, this.setState.bind(this)) : () => handleSubmit(this.state, this.setState.bind(this))} id="confirm-creation-promotion" btnType="valider">
            Confirmer
          </Button>
        </footer>
      </article>
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
      <Page title=" Influenceurs" contextePage="Who-to-follows" >
        <article id="who-to-follow" className="col-md-12 col-sm-12 col-xs-12 section-card" >
          {showButtons ? <Header title="Ajouter un contact" clicked={() => handleModalAdd(this.setState.bind(this))} showAlertSuccess={this.state.showAlertSuccess} showAlertDelete={this.state.showAlertDelete} showAlertUpdate={this.state.showAlertUpdate} /> : null}
          <section className="col-md-12 col-sm-12 col-xs-12 section-article" >
            {card}
            <Modal show={showModal} onClose={() => handleClose(this.setState.bind(this))} titleModal={formulaireTitleAdd ? "Ajout d'un contact" : '' || formulaireUpdate ? 'Modification du contact' : '' || showDetails ? this.state.title : ''}>
              {this.state.formulaire ? formulaire : ''}
              {this.state.recap ? recap : null}
              {this.state.showDetails ? showDetails : null}
              {descriptionDelete ? <DeleteDescription handleDelete={() => handleRemove(this.state, this.state.id, this.setState.bind(this))} handleClose={() => handleClose(this.setState.bind(this))} title="Êtes-vous sûr de vouloir supprimer ce profil" /> : false}
            </Modal>

          </section>
        </article>
      </Page>
    )
  }
}

export default WhoFollow
