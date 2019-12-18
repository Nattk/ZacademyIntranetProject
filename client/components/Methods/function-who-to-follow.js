import axios from 'axios'
import Button from '../Boutons/Boutons'
import { NotificationErrorBack } from '../Notifications/notifications'
export const configuration = (state) => {
  const user = window.localStorage.getItem('user')

  const elements = {
    title: state.title,
    content: state.content,
    avatar: state.avatar,
    twitter: state.twitter,
    medium: state.medium,
    github: state.github,
    promotionId: JSON.parse(user).promotion
  }
  return elements
}
export const configurationUpdate = (state) => {
  const user = window.localStorage.getItem('user')

  const elements = {
    title: state.title,
    content: state.content,
    avatar: state.avatar,
    twitter: state.twitter,
    medium: state.medium,
    github: state.github,
    id: state.id,
    promotionId: JSON.parse(user).promotion
  }

  return elements
}
export const handleSubmit = (state, updateState) => {
  axios.post('http://localhost:3333/api/follows', configuration(state))
    .then((data) => {
      updateState({ showModal: false, contacts: [...state.contacts, data.data], showAlertSuccess: true, recap: true })
    })
    .catch(err =>
      err.response.data.error
        ? updateState({
          urlSocialMediaValidation: err.response.data.error,
          githubValidation: err.response.data.error.match('github') ? ' Veuillez entrer une URL github ou gitlab valide' : '',
          twitterValidation: err.response.data.error.match('twitter') ? ' Veuillez entrer une URL twitter valide' : '',
          mediumValidation: err.response.data.error.match('medium') ? ' Veuillez entrer une URL medium valide' : ''
        }) : updateState({
          githubValidation: '',
          twitterValidation: '',
          mediumValidation: ''
        }))
  setTimeout(() => {
    updateState({ showAlertSuccess: false })
  }, 3000)
}

export const handleUpdate = (state, id, updateState) => {
  axios.put(`http://localhost:3333/api/follows/${id}`, configurationUpdate(state))
    .then((data) => {
      const index = state.contacts.findIndex((e) => e.id === id)
      state.contacts[index] = data.data
      if (index === -1) {
        state.contacts.push(configurationUpdate(state))
      } else {
        state.contacts[index] = configurationUpdate(state)
      }

      const updatedObj = {
        ...state.contacts[index]
      }
      const updatedWho2follow = [
        ...state.contacts.slice(0, index),
        updatedObj,
        ...state.contacts.slice(index + 1)
      ]
      updateState({ showModal: false, contacts: updatedWho2follow, showAlertUpdate: true })
    })
    .catch((err) => err.response.data.error ? updateState({
      urlSocialMediaValidation: err.response.data.error,
      githubValidation: err.response.data.error.match('github') ? ' Veuillez entrer une URL github ou gitlab valide' : '',
      twitterValidation: err.response.data.error.match('twitter') ? ' Veuillez entrer une URL twitter valide' : '',
      mediumValidation: err.response.data.error.match('medium') ? ' Veuillez entrer une URL medium valide' : ''
    }) : updateState({
      githubValidation: '',
      twitterValidation: '',
      mediumValidation: ''
    }))
  setTimeout(() => {
    updateState({ showAlertUpdate: false })
  }, 3000)
}

export const handleRemove = (state, id, updateState) => {
  const data = state.contacts.filter(el => el.id !== id)
  const newData = [...data]
  axios.delete(`http://localhost:3333/api/follows/${id}`)
    .then(() => {
      updateState({
        showModal: false,
        contacts: newData,
        showAlertDelete: true,
        contentValidation: '',
        titleValidation: ''

      })
    }).catch((err) => console.error(err))
  setTimeout(() => {
    updateState({ showAlertDelete: false })
  }, 3000)
}

export const ContentDetails = (state) => (
  <article>
    <section className="title-style-modal " >
      <p><span className="promotion-p-style"></span> {state.title}</p>
      <p><span className="promotion-p-style">Description</span>&nbsp; {state.content}</p>
      {state.github ? <p><span className="promotion-p-style">Lien Github</span>&nbsp; {state.github}</p> : null}
      {state.twitter ? <p><span className="promotion-p-style">Lien Twitter</span>&nbsp; {state.twitter}</p> : null}
      {state.medium ? <p><span className="promotion-p-style">Lien Medium</span>&nbsp; {state.medium}</p> : null}
    </section>

    <footer className="text-right">
      <Button clicked={state.onClose}
        id="confirm-creation-promotion" btnType="valider">
        Revenir
      </Button>
    </footer>
  </article>)

export const ConfirmationDetails = (state, err) => (
  <article>
    {state.urlSocialMediaValidation ? <NotificationErrorBack title={state.urlSocialMediaValidation} /> : null}
    {state.urlSocialMediaValidation === '' || state.urlSocialMediaValidation === null || state.urlSocialMediaValidation === undefined

      ? <div>
        <section className="title-style-modal">
          <p><span className="promotion-p-style"></span> {state.title}</p>
          <p><span className="promotion-p-style">Description</span>&nbsp; {state.content}</p>
          {state.avatar ? <p><span className="promotion-p-style">Lien Avatar</span>&nbsp; {state.avatar}</p> : null}
          {state.github ? <p><span className="promotion-p-style">Lien Github</span>&nbsp; {state.github}</p> : null}
          {state.medium ? <p><span className="promotion-p-style">Lien Medium</span>&nbsp; {state.medium}</p> : null}
          {state.twitter ? <p><span className="promotion-p-style">Lien Twitter</span>&nbsp; {state.twitter}</p> : null}
        </section>
        <section>
          {state.formulaireUpdate
            ? <p>Êtes vous sur de vouloir modifier ce contact "Who-to-follow"  ?</p>
            : <p>Êtes vous sur de vouloir créer ce contact "Who-to-follow"  ?</p>}
        </section>
      </div>
      : null}
    <footer className="text-right">
      {state.formulaireUpdate
        ? <Button clicked={state.onReturnUpdate} id="confirm-creation-promotion" btnType="valider">
          Revenir
        </Button>
        : <Button clicked={state.onReturnAdd} id="confirm-creation-promotion" btnType="valider">
          Revenir
        </Button>}
      <Button clicked={state.clicked} id="confirm-creation-promotion" btnType="valider">
        Confirmer
      </Button>
    </footer>
  </article>
)
export const Update = (state, updateState) => {
  state.contacts.map(user =>
    updateState({
      showModal: true,
      formulaire: true,
      recap: false,
      formulaireUpdate: true,
      descriptionDelete: false,
      formulaireTitleAdd: '',
      title: user.title,
      content: user.content,
      id: user.id,
      avatar: user.avatar,
      github: user.github,
      twitter: user.twitter,
      medium: user.medium,
      promotionId: user.promotionId,
      titleValidation: '',
      contentValidation: '',
      urlSocialMediaValidation: '',
      githubValidation: '',
      mediumValidation: '',
      twitterValidation: '',
      showDetails: false
    }))
}
