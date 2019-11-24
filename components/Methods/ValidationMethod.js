
import OnChangeMethod from './onChangeMethod'
export default class ValidationMethod extends OnChangeMethod {
  constructor (props) {
    super(props)
    this.handleValidation = this.handleValidation.bind(this)
  }

  handleValidation () {
    this.state.firstName === '' ? this.setState({ firstNameValidation: 'Un prénom est requis' }) : this.setState({ firstNameValidation: '' })
    this.state.lastName === '' ? this.setState({ lastNameValidation: 'Un nom de famille est requis' }) : this.setState({ lastNameValidation: '' })
    this.state.fonction === '' ? this.setState({ fonctionValidation: 'Une fonction  est requise' }) : this.setState({ fonctionValidation: '' })
    this.state.description === '' ? this.setState({ descriptionValidation: 'Une description est requise' }) : this.setState({ descriptionValidation: '' })
    this.state.phone === '' ? this.setState({ phoneValidation: 'Un téléphone  est requis' }) : this.setState({ phoneValidation: '' })
    this.state.mail === '' ? this.setState({ mailValidation: 'Un mail est requis' }) : this.setState({ mailValidation: '' })
  }
}
