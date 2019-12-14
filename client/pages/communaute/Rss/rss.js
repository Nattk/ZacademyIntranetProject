import React from 'react'
import axios from 'axios'
import Page from '../../../layouts/classic'
import Header from '../../../components/Header/header-button-add'
import CardContact from '../../../components/CardContact/cardContact'
import Modal from '../../../components/Modal/modal'
import FormulaireComponent from '../../../components/Formulaire/formulaireComponent'
import { DeleteDescription } from '../../../components/Modal/SectionModal'

import { handleUpdate, handleSubmit, handleRemove, handleClose, handleModalAdd, onShowRecapForm } from './method-rss'
import Button from '../../../components/Boutons/Boutons'
class Follow extends React.Component {
  constructor (props) {
    super(props)
    this.state = { recap: false }
  }

  componentDidMount () {
    axios.get('http://localhost:3333/api/rss')
      .then((data) => {
        this.setState({ rss: data.data })
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
    const { showButtons, rss, formulaireTitleAdd, formulaireUpdate, showModal, descriptionDelete } = this.state

    const card = (
      rss ? rss.map((user) =>
        <CardContact
          key={user.id}
          title={user.title}
          content={user.content.length > 70 ? user.content.substring(0, 70) + '...' : user.content}
          showButton={!!showButtons}
          linkFluxRss={user.url}
          remove={() => this.setState({ showModal: true, descriptionDelete: true, formulaire: false, recap: false, formulaireTitleAdd: '', formulaireUpdate: '', id: user.id, showDetails: false })}
          update={() => this.setState({ showModal: true, formulaire: true, recap: false, formulaireUpdate: true, descriptionDelete: false, formulaireTitleAdd: '', title: user.title, content: user.content, id: user.id, url: user.url, titleValidation: '', contentValidation: '', urlValidation: '', showDetails: false })}
          showDetails={() => this.setState({ showModal: true, formulaire: false, recap: false, showDetails: true, formulaireUpdate: false, descriptionDelete: false, formulaireTitleAdd: '', title: user.title, content: user.content, url: user.url, id: user.id, titleValidation: '', contentValidation: '', urlValidation: '' })}

        />) : null
    )
    const formulaire = (

      <FormulaireComponent
        handleClose={() => handleClose(this.setState.bind(this))}
        buttonName={this.state.formulaireUpdate ? 'Mettre à jour' : 'Ajouter'}
        clicked={() => onShowRecapForm(this.state, this.setState.bind(this))}
        onChange={this.onChange.bind(this)}
        rss
        title={this.state.title}
        content={this.state.content}
        url={this.state.url}
        titleValidation={this.state.titleValidation}
        contentValidation={this.state.contentValidation}
        urlValidation={this.state.urlValidation}

      />
    )

    const recap =
      <article>
        <section className="title-style-modal">
          <p><span className="promotion-p-style"></span> {this.state.title}</p>
          <p><span className="promotion-p-style">Description</span>&nbsp; {this.state.content}</p>
          <p><span className="promotion-p-style">Lien</span>&nbsp; {this.state.url}</p>
        </section>
        <section>
          {this.state.formulaireUpdate
            ? <p>Êtes vous sur de vouloir modifier ce flux rss  ?</p>
            : <p>Êtes vous sur de vouloir créer ce flux rss  ?</p>}
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
        <section className="title-style-modal">
          <p><span className="promotion-p-style"></span> {this.state.title}</p>
          <p><span className="promotion-p-style">Description</span>&nbsp; {this.state.content}</p>
          <p><span className="promotion-p-style">Lien</span>&nbsp; {this.state.url}</p>
        </section>

        <footer className="text-right">
          <Button clicked={() => handleClose(this.setState.bind(this))}
            id="confirm-creation-promotion" btnType="valider">
            Revenir
          </Button>
        </footer>
      </article>
    return (
      <Page title="Rss" contextePage="Rss" >
        <article id="who-to-follow" className="col-md-12 col-sm-12 col-xs-12 section-card" >
          {showButtons ? <Header title="Ajouter un contact" clicked={() => handleModalAdd(this.setState.bind(this))} showAlertSuccess={this.state.showAlertSuccess} showAlertDelete={this.state.showAlertDelete} showAlertUpdate={this.state.showAlertUpdate} /> : null}
          <section className="col-md-12 col-sm-12 col-xs-12 section-article" >
            {card}
            <Modal show={showModal} onClose={() => handleClose(this.setState.bind(this))} titleModal={formulaireTitleAdd ? "Ajout d'un flux rss" : '' || formulaireUpdate ? 'Modification du flux rss' : '' || showDetails ? this.state.title : ''}>
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

export default Follow
