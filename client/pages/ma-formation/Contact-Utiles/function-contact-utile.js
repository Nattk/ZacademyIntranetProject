import Button from '../../../components/Boutons/Boutons'
import axios from 'axios'

export const configuration = (state) => {
  const user = window.localStorage.getItem('user')

  const elements = {
    firstName: state.firstName,
    lastName: state.lastName,
    help: state.help,
    phone: state.phone,
    email: state.email,
    avatar: state.avatar,
    promotionId: JSON.parse(user).promotion
  }
  console.log(elements)
  return elements
}
export const handleUpdate = (state, id, updateState) => {
  axios.put(`http://localhost:3333/api/users/${id}`, configuration(state))
    .then((data) => {
      const index = state.contacts.findIndex((e) => e.id === id)
      state.contacts[index] = data.data
      updateState({ showModal: false, contacts: [...state.contacts], showAlertUpdate: true })
    })
    .catch((err) => console.log('err', err))
  setTimeout(() => {
    updateState({ showAlertUpdate: false })
  }, 3000)
}
export const handleRemove = (state, id, updateState) => {
  const user = window.localStorage.getItem('user')
  const elements = {
    firstName: state.firstName,
    lastName: state.lastName,
    help: state.help,
    phone: state.phone,
    email: state.email,
    avatar: state.avatar,
    promotionId: JSON.parse(user).promotion,
    important: false
  }
  axios.put(`http://localhost:3333/api/users/${id}`, elements)

    .then((data) => {
      const index = state.contacts.findIndex((e) => e.id === id)
      state.contacts[index] = data.data
      updateState({ showModal: false, contacts: [...state.contacts], showAlertDelete: true, showDetails: false })
    })
    .catch((err) => console.log('err', err))

  setTimeout(() => {
    updateState({ showAlertDelete: false })
  }, 3000)
}

export const ContentDetails = (state) => (
  <article>
    <section className="title-style-modal " >
      <p><span className="promotion-p-style"></span>Nom:  {state.lastName}</p>
      <p><span className="promotion-p-style"></span>Prénom: {state.firstName}</p>
      <p><span className="promotion-p-style">Description</span>&nbsp; {state.help}</p>
      {state.phone ? <p><span className="promotion-p-style">Numero de téléphone</span>&nbsp; {state.phone}</p> : null}
      {state.email ? <p><span className="promotion-p-style">Email</span>&nbsp; {state.email}</p> : null}

    </section>

    <footer className="text-right">
      <Button clicked={state.onClose}
        id="confirm-creation-promotion" btnType="valider">
        Revenir
      </Button>
    </footer>
  </article>
)

export const ConfirmationDetails = (state) => (
  <article>
    <section className="title-style-modal">
      <p><span className="promotion-p-style"></span>Nom:  {state.lastName}</p>
      <p><span className="promotion-p-style"></span>Prénom: {state.firstName}</p>
      <p><span className="promotion-p-style">Description</span>&nbsp; {state.help}</p>
      <p><span className="promotion-p-style">Numero de téléphone</span>&nbsp; {state.phone}</p>
      <p><span className="promotion-p-style">Email</span>&nbsp; {state.email}</p>

    </section>
    <section>

      <p>Êtes vous sur de vouloir modifier ce contact  ?</p>

    </section>
    <footer className="text-right">
      <Button clicked={state.onClose}
        id="confirm-creation-promotion" btnType="valider">
        Revenir
      </Button>
      <Button clicked={state.clicked} id="confirm-creation-promotion" btnType="valider">
        Confirmer
      </Button>
    </footer>
  </article>
)
export const handleValidation = (state, updateState) => {
  state.firstName === '' ? updateState({ firstNameValidation: 'Un prénom est requis' }) : updateState({ firstNameValidation: '' })
  state.lastName === '' ? updateState({ lastNameValidation: 'Un nom est requis' }) : updateState({ lastNameValidation: '' })
  state.content === '' ? updateState({ contentValidation: 'Une description est requise' }) : updateState({ contentValidation: '' })
  state.phone === '' ? updateState({ phoneValidation: 'Un téléphone est réquis' }) : updateState({ phoneValidation: '' })
  state.mail === '' ? updateState({ mailValidation: 'Insérer un email valide' }) : updateState({ mailValidation: '' })
}

export const onShowRecapForm = (state, updateState) => {
  if (state.lastName && state.firstName && state.help && state.phone && state.mail !== '') {
    updateState({ recap: true, formulaire: false })
  } else {
    handleValidation(state, updateState)
  }
}
