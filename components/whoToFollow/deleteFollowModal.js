import React from 'react'
import Modal from 'react-responsive-modal'
import Button from '../Boutons/Boutons'

const ModalDeleteFollow = (props) => {
  return (
    <Modal open={props.show} center>

      <header className="header-modal-delete-who2follow">

        <Button clicked={props.handleClose} btnType="close-button-icon" >
          <span aria-hidden="true">&times;</span>
        </Button>

      </header>
      <section>
        <p className="description-modal-delete-who2follow">
          Êtes-vous sûr de vouloir supprimer ce profil  ?
        </p>
      </section>

      <footer className='footer-style'>

        <Button clicked={props.handleClose} btnType="annuler">
          Annuler
        </Button>
        <Button clicked={props.handleConfirmDelete} btnType="valider">
          Supprimer
        </Button>

      </footer>

    </Modal>
  )
}
export default ModalDeleteFollow
