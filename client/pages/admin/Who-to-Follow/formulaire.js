import React, { Fragment } from 'react'
import ValidationMethod from '../../../components/Methods/ValidationMethod'
import Formulaire from '../../../components/Formulaire/formulaire'
import Data from '../../../components/whoToFollow/data.json'
import '../../../styles/sass/styles.scss'
class FormulaireWho2Follow extends ValidationMethod {
  constructor (props) {
    super(props)
    this.state = {
      fakeData: Data,
      id: '',
      firstName: '',
      lastName: '',
      fonction: '',
      description: '',
      linkGithub: '',
      image: '',
      picture: '',
      linkLinkedin: '',
      linkTwitter: '',
      firstNameValidation: '',
      lastNameValidation: '',
      fonctionValidation: '',
      descriptionValidation: '',
      imgValidation: '',
      descriptionDelete: false,
      formulaire: false,
      showModal: false,
      showModalDelete: false,
      showModalUpdate: false,
      showAlertSuccess: false,
      showAlertUpdate: false,
      formulaireUpdate: false,
      showAlertDelete: false,
      formulaireTitleAdd: false,
      showButton: false

    }

    this.handleClose = this.handleClose.bind(this)
  }

  handleClose () {
    this.setState({
      showModal: false, titleValidation: '', descriptionValidation: '', title: '', description: '', linkMedium: '', linkGithub: '', linkTwitter: '', image: ''
    })
  }

  handleSubmit () {
    const elements = {
      title: this.state.title,
      image: this.state.image,
      description: this.state.description.length > 70 ? this.state.description.substring(0, 70) + '...' : this.state.description,
      linkGithub: this.state.linkGithub,
      linkMedium: this.state.linkMedium,
      linkLinkedin: this.state.linkLinkedin,
      id: Math.random().toString(36).substr(2, 9)
    }
    const data = this.state.fakeData
    const newdata = [...data, elements]
    console.log(this.state)
    if (this.state.title && this.state.description !== '') {
      this.setState({ fakeData: newdata, showAlertSuccess: true, showModal: false, titleValidaion: '', descriptionValidation: '' })
      setTimeout(() => {
        this.setState({
          showAlertSuccess: false
        })
      }, 5000)
    } else {
      this.handleValidation()
    }
  }

  render () {
    const { title, description, image, linkGithub, linkTwitter, linkMedium, titleValidation, descriptionValidation } = this.state
    return (
      <Fragment>
        <Formulaire handleClose={this.handleClose}
          buttonName={this.state.formulaireUpdate ? 'Mettre à jour' : 'Ajouter'}
          clicked={this.state.formulaireUpdate ? () => this.handleUpdate(this.state.id) : this.handleSubmit}
          onChange={this.onChange}
          influenceur
          contact
          identity
          image={image}
          title={title}
          description={description}
          linkGithub={linkGithub}
          linkLinkedin={linkMedium}
          linkTwitter={linkTwitter}
          titleValidation={titleValidation}
          descriptionValidation={descriptionValidation}
        />
      </Fragment>
    )
  }
}
export default FormulaireWho2Follow
