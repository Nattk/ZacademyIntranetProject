import React from 'react'
import Modal from 'react-responsive-modal'
import Button from '../Boutons/Boutons'

const ModalAddFollow = (props) => {
  return (
    <Modal open={props.show} >

      <header className="header-modal-add-who2follow">

        <section>
          <h1 className="customTitle-H1" >Ajout d'un influenceur</h1>
        </section>
        <section className="containerModalHeaderRight" >
          <Button clicked={props.handleClose} btnType="close-button-icon" >
            <span aria-hidden="true">&times;</span>
          </Button>
        </section>

      </header>

      <main>
        <article>

          <form className="form-group-who2follow" >

            <label for="username">Prenom</label>
            <input
              type="text"
              name="firstName"
              required
              placeholder="Inserer un prénom"
              className="form-control who2follow-input"
              value={props.user2followFirstName}
              onChange={props.handleChangeFirstName}
            />
            <label for="username">Nom de famille</label>
            <input
              type="text"
              name="lastName"
              required
              placeholder="Inserer un nom de famille"
              className="form-control who2follow-input"
              value={props.user2followLastName}
              onChange={props.handleChangeLastName}
            />

            <label for="username">Telephone</label>
            <input
              type="number"
              name="phone"
              required
              placeholder="Inserer un numero de téléphone"
              className="form-control who2follow-input"
              value={props.user2followPhone}
              onChange={props.handleChangePhone}
            />
            <label for="username">Email</label>
            <input
              type="text"
              name="mail"
              required
              placeholder="Inserer un email"
              className="form-control who2follow-input"
              value={props.user2followMail}
              onChange={props.handleChangeMail}
            />

            <label for="username">Fonction</label>
            <input
              type="text"
              name="fonction"
              required
              placeholder="Poste ou fonction de l'utilisateur"
              className="form-control who2follow-input"
              value={props.user2followFonction}
              onChange={props.handleChangeFonction}
            />
            <label for="username">Description</label>
            <textarea
              type="text"
              name="who2follow"
              required
              cols="40" rows="3"
              placeholder="description de l'utilisateur, (limiter à 8O caractères)"
              className="form-control"
              value={props.who2followDescription}
              onChange={props.handleChangeDescription}
            />
            {/* <label for="username">Lien GitHub</label>
            <input
              type="text"
              name="linkGithub"

              placeholder="Inserer l'adresse du flux who2follow"
              className="form-control who2follow-input"
              value={props.who2followLinkGithub}
              onChange={props.handleChangeLinkGithub}
            /> */}

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
export default ModalAddFollow
