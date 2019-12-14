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
export const onShowRecapForm = (state, updateState) => {
  if (state.title && state.content !== '') {
    updateState({ recap: true, formulaire: false })
  } else {
    handleValidation(state, updateState)
  }
}
