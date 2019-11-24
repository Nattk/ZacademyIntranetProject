import React from 'react'
import Page from '../../../layouts/classic'
import Header from '../../../components/Header/header-button-add'
import Modal from '../../../components/Modal/modal'
import { state } from './state'
import ValidationMethod from '../../../components/Methods/ValidationMethod'
import { Form, ShowCard, DeleteDescription } from '../../../components/Modal/SectionModal'
import '../../../styles/sass/styles.scss'
class Follow extends ValidationMethod {
  constructor (props) {
    super(props)
    this.state = { ...state }
    this.handleModalAdd = this.handleModalAdd.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleModalAdd () {
    this.setState({
      showModal: true, formulaire: true, formulaireTitleAdd: true, formulaireUpdate: false, descriptionDelete: false, titleRss: '', description: '', linkFluxRss: ''
    })
  }

  handleClose () {
    this.setState({
      showModal: false, titleValidation: '', descriptionValidation: '', linkFluxRssValidation: ''
    })
  }

  handleSubmit () {
    const elements = {
      titleRss: this.state.titleRss,
      description: this.state.description.length > 70 ? this.state.description.substring(0, 70) + '...' : this.state.description,
      linkFluxRss: this.state.linkFluxRss,
      id: Math.random().toString(36).substr(2, 9)
    }
    const data = this.state.fakeData
    const newdata = [...data, elements]

    if (this.state.titleRss && this.state.description && this.state.linkFluxRss !== '') {
      this.setState({ fakeData: newdata, showAlertSuccess: true, showModal: false, titleValidation: '', descriptionValidation: '', linkFluxRssValidation: '' })
      setTimeout(() => {
        this.setState({
          showAlertSuccess: false
        })
      }, 5000)
    } else {
      this.handleValidation()
      this.state.titleRss === '' ? this.setState({ titleValidation: 'Un titre  est requis' }) : this.setState({ titleValidation: '' })
      this.state.linkFluxRss === '' ? this.setState({ linkFluxRssValidation: 'Un lien est requis' }) : this.setState({ linkFluxRssValidation: '' })
    }
    console.log(this.state.contact)
  }

  handleUpdate (id) {
    const elements = {
      titleRss: this.state.titleRss,
      description: this.state.description.length > 70 ? this.state.description.substring(0, 70) + '...' : this.state.description,
      linkFluxRss: this.state.linkFluxRss,
      id: this.state.id

    }
    console.log(elements)
    const index = this.state.fakeData.findIndex((e) => e.id === id)
    if (index === -1) {
      this.state.fakeData.push(elements)
    } else { this.state.fakeData[index] = elements }

    const updatedObj = { ...this.state.fakeData[index] }
    const updatedProjects = [
      ...this.state.fakeData.slice(0, index),
      updatedObj,
      ...this.state.fakeData.slice(index + 1)
    ]
    if (this.state.titleRss && this.state.linkFluxRss && this.state.description !== '') {
      this.setState({
        showModal: false, fakeData: updatedProjects, showAlertUpdate: true, titleValidation: '', linkFluxRssValidation: '', descriptionValidation: ''
      })
    } else {
      this.setState({ fakeData: this.state.fakeData })
      this.handleValidation()
      this.state.titleRss === '' ? this.setState({ titleValidation: 'Un titre  est requis' }) : this.setState({ titleValidation: '' })
      this.state.linkFluxRss === '' ? this.setState({ linkFluxRssValidation: 'Un lien est requis' }) : this.setState({ linkFluxRssValidation: '' })
    }
    setTimeout(() => {
      this.setState({ showAlertUpdate: false })
    }, 5000)
  }

  render () {
    const Formul = (
      <Form handleClose={this.handleClose}
        buttonName={this.state.formulaireUpdate ? 'Mettre à jour' : 'Ajouter'}
        clicked={this.state.formulaireUpdate ? () => this.handleUpdate(this.state.id) : this.handleSubmit}
        onChange={this.onChange}
        rss
        titleRss={this.state.titleRss}
        description={this.state.description}
        linkFluxRss={this.state.linkFluxRss}
        titleValidation={this.state.titleValidation}
        descriptionValidation={this.state.descriptionValidation}
        linkFluxRssValidation={this.state.linkFluxRssValidation}
      />
    )
    return (
      <Page title="Rss" contextePage="Rss" >
        <article id="who-to-follow" className="col-md-12 col-sm-12 col-xs-12 section-card" >
          <Header clicked={this.handleModalAdd} showAlertSuccess={this.state.showAlertSuccess} showAlertDelete={this.state.showAlertDelete} showAlertUpdate={this.state.showAlertUpdate} titleRss={this.state.titleRss} title="Ajouter un flux" />
          <section className="col-md-12 col-sm-12 col-xs-12 section-article" >
            {this.state.fakeData.map((user, id) => (
              <ShowCard
                key={id}
                rss
                titleRss={user.titleRss}
                description={user.description}
                description={user.description}
                linkFluxRss={user.linkFluxRss}
                remove={() => this.setState({ showModal: true, descriptionDelete: true, formulaire: false, id: user.id })}
                update={() => this.setState({
                  showModal: true, formulaire: true, formulaireUpdate: true, descriptionDelete: false, formulaireTitleAdd: false, id: user.id, titleRss: user.titleRss, description: user.description, linkFluxRss: user.linkFluxRss
                })}
              />
            ))}
            <Modal
              show={this.state.showModal}
              onClose={this.handleClose}
              titleModal={this.state.formulaireTitleAdd ? "Ajout d'un flux rss" : '' || this.state.formulaireUpdate ? 'Modification du fluxt' : ''}
              formulaire={this.state.formulaire
                ? Formul : false}
              deleteDescription={this.state.descriptionDelete ? <DeleteDescription handleDelete={() => this.handleDelete(this.state.id)} handleClose={this.handleClose} title="Êtes-vous sûr de vouloir supprimer ce flux rss" /> : false} />
          </section>
        </article>
      </Page>
    )
  }
}
export default Follow
