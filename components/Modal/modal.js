import React, { Fragment } from 'react'
import Modal from 'react-responsive-modal'
import Button from '../Boutons/Boutons'

const ModalAddFollow = (props) => {
  return (
    <Modal open={props.show} >

      <header className="header-modal-add">
        <section>
          <h1 className="custom-title-H1" >{props.titleModal} </h1>
        </section>
        <section className="container-modal-header-right" >
          <Button clicked={props.handleClose} btnType="close-button-icon" >
            <span aria-hidden="true">&times;</span>
          </Button>
        </section>

      </header>

      <main>
        <section>
          {props.formulaire ? (
            <form className="form-group-who-to-follow" >

              <label htmlFor="firstName" >Prenom</label>
              <input
                type="text"
                name="firstName"
                required
                placeholder={props.firstName ? props.firstName : 'Inserer un prénom'}
                className="form-control who-to-follow-input"
                value={props.firstName}
                onChange={props.handleChangeFirstName}
              />
              <label htmlFor="lasttName">Nom de famille</label>
              <input
                type="text"
                name="lastName"
                required
                placeholder="Inserer un nom de famille"
                className="form-control who-to-follow-input"
                value={props.lastName}
                onChange={props.handleChangeLastName}
              />

              <label htmlFor="fonction">Fonction</label>
              <input
                type="text"
                name="fonction"
                required
                placeholder="Poste ou fonction de l'utilisateur"
                className="form-control who-to-follow-input"
                value={props.fonction}
                onChange={props.handleChangeFonction}
              />
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                name="description "
                required
                cols="40" rows="2"
                placeholder="description de l'utilisateur, (limiter à 8O caractères)"
                className="form-control who-to-follow-input"
                value={props.description}
                onChange={props.handleChangeDescription}
              />

              <label htmlFor="username">Lien GitHub</label>
              <input
                type="text"
                name="linkGithub"

                placeholder="Inserer l'adresse github"
                className="form-control who-to-follow-input"
                value={props.linkGithub}
                onChange={props.handleChangeLinkGithub}
              />

              <label htmlFor="username">Lien Twiiter</label>
              <input
                type="text"
                name="linkTwitter"

                placeholder="Inserer l'adresse twitter"
                className="form-control who-to-follow-input"
                value={props.linkTwitter}
                onChange={props.handleChangeLinkTwitter}
              />

              <label htmlFor="username">Lien Linkedin</label>
              <input
                type="text"
                name="linkLinkedin"

                placeholder="Inserer l'adresse linkedin"
                className="form-control who-to-follow-input"
                value={props.linkLinkedin}
                onChange={props.handleChangeLinkLinkedin}
              />

            </form>) : null}

          {props.deleteDescription ? (
            <p className="description-modal-delete-who-to-follow">
              Êtes-vous sûr de vouloir supprimer ce profil  ?
            </p>) : null}
        </section>
      </main>

      <footer className='footer-style'>

        <section>

          <Fragment>
            <Button clicked={props.handleClose} btnType="annuler">
              Annuler
            </Button>
            {props.onSubmit ? (
              <Button clicked={props.handleSubmit} btnType="valider">
                Ajouter
              </Button>
            ) : null}
            {props.onDelete ? (

              <Button clicked={props.handleDelete} btnType="valider">
                Supprimer
              </Button>

            ) : null}
            {props.onUpdate ? (

              <Button clicked={props.handleUpdate} btnType="valider">
                Modifier
              </Button>

            ) : null}
          </Fragment>
        </section>

      </footer>

    </Modal>
  )
}
export default ModalAddFollow
