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
          phone={this.props.phone}
          mail={this.props.mail}
          contact={this.props.contact}
          influenceur={this.props.influenceur}
          picture={this.props.picture}
          linkGithub={this.props.linkGithub}
          linkTwitter={this.props.linkTwitter}
          linkLinkedin={this.props.linkLinkedin}
          uploadPicture={this.props.uploadPicture}
          onChange={this.props.onChange}
          firstNameValidation={this.props.firstNameValidation}
          lastNameValidation={this.props.lastNameValidation}
          fonctionValidation={this.props.fonctionValidation}
          descriptionValidation={this.props.descriptionValidation}
          mailValidation={this.props.mailValidation}
          phoneValidation={this.props.phoneValidation}
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
