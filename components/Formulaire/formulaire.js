import React, { Component, Fragment } from 'react'
import FormulaireComponent from './formulaireComponent'
import Button from '../Boutons/Boutons'

class Formulaire extends Component {
  render () {
    return (
      <Fragment>
        <FormulaireComponent
          firstName={this.props.firstName}
          lastName={this.props.lastName}
          fonction={this.props.fonction}
          description={this.props.description}
          linkGithub={this.props.linkGithub}
          linkTwitter={this.props.linkTwitter}
          linkLinkedin={this.props.linkLinkedin}
          uploadPicture={this.props.uploadPicture}
          onChange={this.props.onChange}
          firstNameValidation={this.props.firstNameValidation}
          lastNameValidation={this.props.lastNameValidation}
          fonctionValidation={this.props.fonctionValidation}
          descriptionValidation={this.props.descriptionValidation}
        />
        <section className="text-right" >
          <Button clicked={this.props.handleClose} btnType="annuler">
            Annuler
          </Button>
          <Button clicked={this.props.clicked} btnType="valider">
            {this.props.buttonName}
          </Button>
        </section>
      </Fragment>
    )
  }
}

export default Formulaire
