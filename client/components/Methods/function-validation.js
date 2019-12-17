import axios from 'axios'
import { getAllPromotions, getPromotionByID } from '../../services/creation-promotion'
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
  state.twitter === '' || state.medium === '' || state.github === ''
    ? updateState({
      urlSocialMediaValidation: 'Veuillez insérer un ou plusieurs liens ',
      githubValidation: ' Veuillez entrer une URL github ou gitlab valide',
      twitterValidation: ' Veuillez entrer une URL twitter valide',
      mediumValidation: ' Veuillez entrer une URL medium valide'
    })
    : updateState({
      urlSocialMediaValidation: '', githubValidation: ' ', twitterValidation: ' ', mediumValidation: ' '
    })
}
export const handleValidationPromotion = (state, updateState, error) => {
  state.title === '' ? updateState({ titreValidation: 'Un titre est réquis', titreUniqueValidation: 'Le titre  doit être unique' }) : updateState({ titreValidation: '', titreUniqueValidation: '' })
  state.content === '' ? updateState({ contentValidation: 'Une description est requise' }) : updateState({ contentValidation: '' })
  state.selectedProgramme === '' ? updateState({ programmeValidation: 'Un programme est réquis' }) : updateState({ programmeValidation: '' })
  state.formateursOption === '' || state.formateursOption === null ? updateState({ formateursValidation: 'Veuillez selectionné un ou plusieurs formateurs ' }) : updateState({ formateursValidation: '' })
  state.studentsOption === '' || state.studentsOption === null ? updateState({ studentsValidation: 'Veuillez selectionné des futurs consultants ' }) : updateState({ studentsValidation: '' })
  state.selectedCity === '' ? updateState({ cityValidation: 'Veuillez selectionné une ville ' }) : updateState({ cityValidation: '' })
  state.startDate === undefined || state.startDate === null ? updateState({ startdateValidation: 'Veuillez selectionné une date de début de formation ' }) : updateState({ startdateValidation: '' })
  state.endDate === undefined || state.endDate === null ? updateState({ enddateValidation: 'Veuillez selectionné une date  de fin de formation ' }) : updateState({ enddateValidation: '' })
  state.startDate === undefined && state.endDate === undefined ? updateState({ dateValidation: 'Veuillez selectionné une période de formation ' }) : updateState({ dateValidation: '' })
}
export const onShowRecapForm = (state, updateState) => {
  if (state.title && state.content !== '') {
    updateState({ recap: true, formulaire: false })
  } else {
    handleValidation(state, updateState)
  }
}
export const onShowRecapFormWho2Follow = (state, updateState) => {
  const socialLink = state.twitter || state.medium || state.github
  if (state.title && state.content && socialLink !== '') {
    updateState({ recap: true, formulaire: false, urlSocialMediaValidation: '' })
  } else {
    handleValidation(state, updateState)
  }
}
export const onShowRecapCreationPromotion = (state, updateState) => {
  if (state.title && state.selectedProgramme && state.selectedCity && state.formateursOption && state.studentsOption && state.endDate && state.startDate !== '') {
    axios.get('http://localhost:3333/api/promotions')
      .then((data) => {
        if (state.title === '') {
          updateState({
            titreUniqueValidation: 'Le titre  doit être unique', showModal: false
          })
        }
        if (data.data.filter(el => el.title === state.title).length > 0) {
          updateState({ titreUniqueValidation: 'Le titre  doit être unique', showModal: false })
        }
        if (data.data.filter(el => el.title === state.title).length === 0 && state.title !== '') {
          updateState({
            showModal: true,
            slackValidation: '',
            titreValidation: '',
            titreUniqueValidation: '',
            programmeValidation: '',
            phoneValidation: '',
            cityValidation: '',
            emailValidation: '',
            lastNameValidation: '',
            firstNameValidation: '',
            formateursValidation: '',
            studentsValidation: '',
            enddateValidation: '',
            startdateValidation: '',
            dateValidation: ''
          })
        }
      })
  } else {
    handleValidationPromotion(state, updateState)
  }
}
export const onShowRecapUpdatePromotion = (state, updateState) => {
  if (state.title && state.selectedProgramme && state.selectedCity && state.formateursOption && state.studentsOption && state.endDate && state.startDate !== '') {
    axios.all([getAllPromotions(), getPromotionByID(state.id)])
      .then(axios.spread((promotions, promotion) => {
        if (state.title === '') {
          updateState({
            titreUniqueValidation: 'Le titre  doit être unique', showModal: false
          })
        }
        if (promotions.data.filter(el => el.title === state.title).length > 0 && promotion.data.title !== state.title) {
          updateState({ titreUniqueValidation: 'Le titre  doit être unique', showModal: false })
        }
        if (promotions.data.filter(el => el.title === state.title).length === 0 && state.title !== '') {
          updateState({ showModal: true, titreUniqueValidation: '' })
        }
        if (promotion.data.title === state.title) {
          updateState({
            showModal: true,
            slackValidation: '',
            titreValidation: '',
            titreUniqueValidation: '',
            programmeValidation: '',
            phoneValidation: '',
            cityValidation: '',
            emailValidation: '',
            lastNameValidation: '',
            firstNameValidation: '',
            formateursValidation: '',
            studentsValidation: '',
            enddateValidation: '',
            startdateValidation: '',
            dateValidation: ''
          })
        }
      })
      )
  } else {
    handleValidationPromotion(state, updateState)
  }
}
