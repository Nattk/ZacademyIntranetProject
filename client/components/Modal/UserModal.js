import React from 'react'
import Modal from 'react-responsive-modal'
import Button from '../Boutons/Boutons'

const userModal = (props) => {
  return (
    <Modal open={props.modalShow} center>
      <main>

        <article>
          <h2>L'utilisateur suivant sera créé</h2>
          <p>Prénom : {props.firstName}</p>
          <p>Nom : {props.lastName}</p>
          <p>Email : {props.email}</p>
          <p>Mot de passe :{props.password}</p>
          <p>Role : {props.role}</p>
          <p>Téléphone : {props.phone}</p>
          <p>Description : {props.help}</p>
          <p>Promotion : {props.promotionName}</p>
        </article>

      </main>

      <footer className='footerStyle'>
        <Button btnType="Annuler" btnType={'btn-danger'} clicked={props.onClose} > Annuler </Button>
        <Button btnType="valider" type="submit" btnType={'btn-danger'} clicked={props.onSubmit} > Valider les choix </Button>

      </footer>

    </Modal >
  )
}
export default userModal
