
import React, { Fragment } from 'react'
import FormComponent from './methods'
import { Form } from './c'
import '../../../styles/sass/styles.scss'
class Formulaire extends FormComponent {
  render () {
    return (
      <Fragment>
        <Form
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          fonction={this.state.fonction}
          description={this.state.description}
          linkGithub={this.state.linkGithub}
          linkTwitter={this.state.linkTwitter}
          linkLinkedin={this.state.linkLinkedin}
          firstNameValidation={this.state.firstNameValidation}
          lastNameValidation={this.state.lastNameValidation}
          fonctionValidation={this.state.fonctionValidation}
          descriptionValidation={this.state.descriptionValidation}
          mailValidation={this.state.mailValidation}
          phoneValidation={this.state.phoneValidation}
          handleClose={this.props.handleClose}
          clicked={this.props.clicked}
          buttonName={this.props.buttonName}
          onChange={this.props.onChange}
        />

      </Fragment>
    )
  }
}

export default Formulaire
