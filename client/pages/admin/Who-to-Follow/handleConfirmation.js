export const handleValidation = (props) => {
  props.firstName === '' ? this.setState({ firstNameValidation: 'Un prénom est requis' }) : this.setState({ firstNameValidation: '' })
  props.lastName === '' ? this.setState({ lastNameValidation: 'Un nom de famille est requis' }) : this.setState({ lastNameValidation: '' })
  props.fonction === '' ? this.setState({ fonctionValidation: 'Une fonction  est requise' }) : this.setState({ fonctionValidation: '' })
  props.description === '' ? this.setState({ descriptionValidation: 'Une description est requise' }) : this.setState({ descriptionValidation: '' })
  props.phone === '' ? this.setState({ phoneValidation: 'Un téléphone  est requis' }) : this.setState({ phoneValidation: '' })
  props.mail === '' ? this.setState({ mailValidation: 'Un mail est requis' }) : this.setState({ mailValidation: '' })
}
