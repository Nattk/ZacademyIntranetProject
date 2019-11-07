import React from 'react'
import Modal from 'react-responsive-modal'
import Button from '../Boutons/Boutons'

const Alert = (props) => {
  return (
    <Modal open={props.show} center>
      {props.modalHeader ? (
        <header>

          <section>
            <h1 className="customTitle-H1" >{props.headerTitle}</h1>
          </section>
          <section className="containerModalHeaderRight" >
            <Button clicked={props.handleClose} btnType="close-button-icon" >
              <span aria-hidden="true">&times;</span>
            </Button>
          </section>
          <hr />

        </header>) : null}

      <main>

        <article>

          {props.modalTitle ? (
            <section style={{ marginTop: '1rem' }}>
              <h2 className="customTitle-H2" >
                {props.modalTitle}
              </h2>
            </section>) : null}

          {props.modalDescription ? (
            <section >
              <p className="customTitle-p" >
                {props.modalDescription}
              </p>
            </section>) : null}
          {props.input ? (
            <div className="form-group">
              <label for="username">Flux RSS</label>
              <input
                type="text"
                name="rss"
                placeholder="Inserer l'adresse du flux rss"
                className="form-control"
                id="exampleFormControlInput1"
                value="https://fr.khanacademy.org/computing/computer-programming"

              />
            </div>) : null}

        </article>

      </main>

      <footer className='footerStyle'>

        {props.modalFooter ? (
          <section>
            <Button clicked={props.handleClose} btnType="annuler">
              Annuler
            </Button>
            <Button btnType="valider" clicked={props.handleDelete}>
              Supprimer
            </Button>
          </section>) : null}

        {props.modalFooterRedirection ? (
          <section>
            <Button clicked={props.handleClose} btnType="annuler">
              Revenir
            </Button>
            <Button clicked={props.handleConfirmForm} btnType="valider">
              Confirmer
            </Button>
          </section>) : null}

      </footer>

    </Modal >
  )
}
export default Alert
