
import ValidationMethod from './onSubmitMethod'
export default class UpdateMethod extends ValidationMethod {
  constructor (props) {
    super(props)
    this.handleUpdate = this.handleUpdate.bind(this)
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
    if (this.state.firstName && this.state.lastName && this.state.fonction && this.state.description !== '') {
      this.setState({ showModal: false, fakeData: updatedProjects, showAlertUpdate: true, firstNameValidation: '', lastNameValidation: '', fonctionValidation: '', descriptionValidation: '' })
    } else {
      this.handleValidation()
    }
    setTimeout(() => {
      this.setState({ showAlertUpdate: false })
    }, 5000)
  }
}
