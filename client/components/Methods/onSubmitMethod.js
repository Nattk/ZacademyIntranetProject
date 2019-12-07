
import { Component } from 'react'
import Data from '../Contacts/data.json'
export default class OnSubmitMethod extends Component {
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
      linkLinkedin: '',
      linkTwitter: '',
      img: '',
      phone: '',
      mail: '',
      firstNameValidation: '',
      lastNameValidation: '',
      fonctionValidation: '',
      descriptionValidation: '',
      contactDetail: false,
      contact: false,
      mailValidation: '',
      phoneValidation: '',
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
      formulaireTitleAdd: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit () {
    const elements = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      fonction: this.state.fonction,
      mail: this.state.mail,
      phone: this.state.phone,
      img: this.state.img,
      description: this.state.description.length > 70 ? this.state.description.substring(0, 70) + '...' : this.state.description,
      linkGithub: this.state.linkGithub,
      linkReddit: this.state.linkReddit,
      linkLinkedin: this.state.linkLinkedin,
      linkTwitter: this.state.linkTwitter,
      id: Math.random().toString(36).substr(2, 9)
    }
    const data = this.state.fakeData
    const newdata = [...data, elements]

    if (this.state.firstName && this.state.lastName && this.state.fonction && this.state.description !== '' && this.state.contact ? this.state.mail && this.state.phone !== '' : null) {
      this.setState({ fakeData: newdata, showAlertSuccess: true, showModal: false, firstNameValidation: '', lastNameValidation: '', fonctionValidation: '', descriptionValidation: '', phoneValidation: '', mailValidation: '' })
      setTimeout(() => {
        this.setState({
          showAlertSuccess: false
        })
      }, 5000)
    } else {
      this.handleValidation()
    }
  }
}
