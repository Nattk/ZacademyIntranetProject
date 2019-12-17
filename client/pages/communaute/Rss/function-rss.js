import axios from 'axios'
import Button from '../../../components/Boutons/Boutons'
import { NotificationErrorBack } from '../../../components/Notifications/notifications'
export const configuration = (state) => {
  const user = window.localStorage.getItem('user')

  const elements = {
    title: state.title,
    content: state.content,
    url: state.url,
    promotionId: JSON.parse(user).promotion
  }

  return elements
}

export const handleSubmit = (state, updateState) => {
  axios.post('http://localhost:3333/api/rss', configuration(state))
    .then((data) => {
      updateState({ showModal: false, rss: [...state.rss, data.data], showAlertSuccess: true })
    })
    .catch(() => updateState({ urlValidation: 'Veuillez entrer une url RSS valide' }))

  setTimeout(() => {
    updateState({ showAlertSuccess: false })
  }, 3000)
}
export const handleUpdate = (state, id, updateState) => {
  axios.put(`http://localhost:3333/api/rss/${id}`, configuration(state))
    .then((data) => {
      const index = state.rss.findIndex((e) => e.id === id)
      state.rss[index] = data.data
      updateState({ showModal: false, rss: [...state.rss], showAlertUpdate: true })
    })
    .catch(() => updateState({ urlValidation: 'Veuillez entrer une url RSS valide' }))
  setTimeout(() => {
    updateState({ showAlertUpdate: false })
  }, 3000)
}

export const handleRemove = (state, id, updateState) => {
  const data = state.rss.filter(el => el.id !== id)
  const newData = [...data]
  axios.delete(`http://localhost:3333/api/rss/${id}`)
    .then(() => {
      updateState({ showModal: false, rss: newData, showAlertDelete: true })
    }).catch((err) => console.error(err))
  setTimeout(() => {
    updateState({ showAlertDelete: false })
  }, 3000)
}
export const newData = (state, id) => {
  const data = state.rss.filter(el => el.id !== id)
  const newArray = [...data]
  return newArray
}
export const handleClose = (updateState) => {
  updateState({ showModal: false, title: '', content: '', url: '', titleValidation: '', contentValidation: '', urlValidation: '' })
}
export const handleModalAdd = (updateState) => {
  updateState({
    showModal: true, formulaire: true, formulaireTitleAdd: true, recap: false, formulaireUpdate: false, descriptionDelete: false, showDetails: false, title: '', content: '', url: '', titleValidation: '', contentValidation: '', urlValidation: ''
  })
}
export const handleValidation = (state, updateState) => {
  state.title === '' ? updateState({ titleValidation: 'Un titre est requis' }) : updateState({ titleValidation: '' })
  state.content === '' ? updateState({ contentValidation: 'Une description est requise' }) : updateState({ contentValidation: '' })
  state.selectedProgramme === '' ? updateState({ programmeValidation: 'Un programme est réquis' }) : updateState({ programmeValidation: '' })
  state.formateursOption === '' ? updateState({ formateursValidation: 'Veuillez selectionné un ou plusieurs formateurs ' }) : updateState({ formateursValidation: '' })
  state.studentsOption === '' ? updateState({ studentsValidation: 'Veuillez selectionné des futurs consultants ' }) : updateState({ studentsValidation: '' })
  state.selectedCity === '' ? updateState({ cityValidation: 'Veuillez selectionné une ville ' }) : updateState({ cityValidation: '' })
  state.startDate === undefined || state.startDate === null ? updateState({ startdateValidation: 'Veuillez selectionné une date de début de formation ' }) : updateState({ startdateValidation: '' })
  state.endDate === undefined || state.endDate === null ? updateState({ enddateValidation: 'Veuillez selectionné une date  de fin de formation ' }) : updateState({ enddateValidation: '' })
  state.startDate === undefined && state.endDate === undefined ? updateState({ dateValidation: 'Veuillez selectionné une période de formation ' }) : updateState({ dateValidation: '' })
  state.url === '' ? updateState({ urlValidation: 'Insérer un lien flux rss valide' }) : updateState({ urlValidation: '' })
}

export const onShowRecapForm = (state, updateState) => {
  if (state.title && state.content && state.url !== '') {
    updateState({ recap: true, formulaire: false, urlValidation: '', titleValidation: '', contentValidation: '' })
  } else {
    handleValidation(state, updateState)
  }
}
export const ConfirmationDetails = (state) => (
  <article>
    {state.urlValidation ? <NotificationErrorBack title={state.urlValidation} />

      : <div>
        <section className="title-style-modal">
          <p><span className="promotion-p-style"></span> {state.title}</p>
          <p><span className="promotion-p-style">Description</span>&nbsp; {state.content}</p>
          <p><span className="promotion-p-style">Lien</span>&nbsp; {state.url}</p>
        </section>
        <section>
          {state.formulaireUpdate
            ? <p>Êtes vous sur de vouloir modifier ce flux rss  ?</p>
            : <p>Êtes vous sur de vouloir créer ce flux rss  ?</p>}
        </section>
      </div>}
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
export const ContentDetails = (state) =>
  <article>
    <section className="title-style-modal">
      <p><span className="promotion-p-style"></span> {state.title}</p>
      <p><span className="promotion-p-style">Description</span>&nbsp; {state.content}</p>
      <p><span className="promotion-p-style">Lien</span>&nbsp; {state.url}</p>
    </section>

    <footer className="text-right">
      <Button clicked={state.onClose}
        id="confirm-creation-promotion" btnType="valider">
        Revenir
      </Button>
    </footer>
  </article>
