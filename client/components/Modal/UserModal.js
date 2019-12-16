import React from 'react'
import Modal from 'react-responsive-modal'
import Button from '../Boutons/Boutons'
import AllNotification from '../Notifications/notifications'

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
          <p>Avatar : {props.avatar}</p>
          <p>Contact Utile : {props.important ? 'oui' : 'non'}</p>
          <p>Téléphone : {props.phone}</p>
          <p>Description : {props.help}</p>
          <p>Promotion : {props.promotionName}</p>
        </article>

      </main>

      <footer className='footerStyle'>
        <Button btnType="valider" clicked={props.onClose} > Fermer </Button>
        <Button btnType="valider" type="submit" clicked={props.onSubmit} > Valider les choix </Button>

      </footer>

    </Modal >
  )
}
export default userModal
