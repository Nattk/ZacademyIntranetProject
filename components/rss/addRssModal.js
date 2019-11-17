import React from 'react'
import Modal from 'react-responsive-modal'
import Button from '../Boutons/Boutons'

const ModalRss = (props) => {
  return (
    <Modal open={props.show} center>

      <header className="header-modal-add-rss">

        <section>
          <h1 className="customTitle-H1" >Ajout d'un flux rss</h1>
        </section>
        <section className="containerModalHeaderRight" >
          <Button clicked={props.handleClose} btnType="close-button-icon" >
            <span aria-hidden="true">&times;</span>
          </Button>
        </section>

      </header>

      <main>
        <article>

          <form className="form-group-rss" >

            <label for="username">Titre Flux RSS</label>
            <input
              type="text"
              name="rss"

              placeholder="Inserer un titre, (limiter à 5O caractères)"
              className="form-control rss-input"
              value={props.rssTitle}
              onChange={props.handleChangeTitle}
            />

            <label for="username">Lien Flux RSS</label>
            <input
              type="text"
              name="rss"

              placeholder="Inserer l'adresse du flux rss"
              className="form-control rss-input"
              value={props.rssLink}
              onChange={props.handleChangeLink}
            />

            <label for="username">Description</label>
            <textarea
              type="text"
              name="rss"
              cols="40" rows="5"
              placeholder="Inserer une description du flux rss, (limiter à 7O caractères)"
              className="form-control"
              value={props.rssDescription}
              onChange={props.handleChangeDescription}
            />

          </form>

        </article>
      </main>

      <footer className='footer-style'>

        <section>
          <Button clicked={props.handleClose} btnType="annuler">
            Annuler
          </Button>
          <Button clicked={props.handleConfirmForm} btnType="valider">
            Ajouter
          </Button>
        </section>

      </footer>

    </Modal>
  )
}
export default ModalRss
