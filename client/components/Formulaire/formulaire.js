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
          contactDetail={this.props.contactDetail}
          influenceur={this.props.influenceur}
          rss={this.props.rss}
          image={this.props.image}
          titleRss={this.props.titleRss}
          linkGithub={this.props.linkGithub}
          linkTwitter={this.props.linkTwitter}
          linkLinkedin={this.props.linkLinkedin}
          linkFluxRss={this.props.linkFluxRss}
          onChange={this.props.onChange}
          titleValidation={this.props.titleValidation}
          firstNameValidation={this.props.firstNameValidation}
          lastNameValidation={this.props.lastNameValidation}
          fonctionValidation={this.props.fonctionValidation}
          descriptionValidation={this.props.descriptionValidation}
          linkFluxRssValidation={this.props.linkFluxRssValidation}
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
