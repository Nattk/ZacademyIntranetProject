import React from 'react'
import Modal from 'react-responsive-modal'
import Button from '../Boutons/Boutons'
const Modals = (props) => {
  return (
    <Modal open={props.show} onClose={props.onClose} >
      <article>
        <header className="header-modal-add">
          <p className="custom-title-H1" >{props.titleModal} </p>
          <Button clicked={props.onClose} btnType="close-button-icon" >
            <span aria-hidden="true">&times;</span>
          </Button>
        </header>
        <main>
          <section>
            {props.formulaire ? (
              props.formulaire) : null}

            {props.deleteDescription ? (
              props.deleteDescription) : null}
          </section>
        </main>
      </article>
    </Modal>
  )
}

export default Modals
