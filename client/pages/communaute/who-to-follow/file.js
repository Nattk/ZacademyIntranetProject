import axios from 'axios'
import Button from '../../../components/Boutons/Boutons'
import FormulaireComponent from '../../../components/Formulaire/formulaireComponent'
import { Fragment } from 'react'
export const configuration = (state) => {
  const user = window.localStorage.getItem('user')

  const elements = {
    title: state.title,
    content: state.content,
    promotionId: JSON.parse(user).promotion
  }

  return elements
}

export const handleSubmit = (state, updateState) => {
  axios.post('http://localhost:3333/api/follows', configuration(state))
    .then((data) => {
      updateState({ showModal: false, contacts: [...state.contacts, data.data] })
    })
    .catch((err) => console.log('err', err))
}
export const handleUpdate = (state, id, updateState) => {
  axios.put(`http://localhost:3333/api/follows/${id}`, configuration(state))
    .then((data) => {
      const index = state.contacts.findIndex((e) => e.id === id)
      state.contacts[index] = data.data
      updateState({ showModal: false, contacts: [...state.contacts] })
    })
    .catch((err) => console.log('err', err))
}

export const handleRemove = (state, id, updateState) => {
  const data = state.contacts.filter(el => el.id !== id)
  const newData = [...data]
  axios.delete(`http://localhost:3333/api/follows/${id}`)
    .then(() => {
      updateState({ showModal: false, contacts: newData })
    }).catch((err) => console.error(err))
}
export const newData = (state, id) => {
  const data = state.contacts.filter(el => el.id !== id)
  const newArray = [...data]
  return newArray
}
export const handleClose = (updateState) => {
  updateState({ showModal: false, title: '', content: '', titleValidation: '', contentValidation: '' })
}
export const handleModalAdd = (updateState) => {
  updateState({
    showModal: true, formulaire: true, formulaireTitleAdd: true, recap: false, formulaireUpdate: false, descriptionDelete: false, showDetails: false, title: '', content: '', titleValidation: '', contentValidation: ''
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
}
export const showDetails = (state) =>
  <Fragment>
    <section className="title-style-modal">
      <p><span className="promotion-p-style"></span> {state.title}</p>
      <p><span className="promotion-p-style">Description</span>&nbsp; {state.content}</p>
    </section>
  </Fragment>

{ /* <footer className="text-right">
      <Button clicked={() => handleClose(state)}
        id="confirm-creation-promotion" btnType="valider">
        Revenir
      </Button>
    </footer> */ }
