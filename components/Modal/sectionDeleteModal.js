import React, { Component, Fragment } from 'react'
import Button from '../Boutons/Boutons'

class DeleteCard extends Component {
  render () {
    return (
      <Fragment>
        <div>
          <p className="description-modal-delete-who-to-follow">
            {this.props.title}
          </p>
        </div>
        <section className="text-right" >
          <Button clicked={this.props.handleClose} btnType="annuler">
            Annuler
          </Button>
          <Button clicked={this.props.handleDelete} btnType="valider">
            Supprimer
          </Button>
        </section>
      </Fragment>
    )
  }
}

export default DeleteCard
