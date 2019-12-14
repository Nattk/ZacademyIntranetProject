export const handleClose = (updateState) => {
  updateState({ showModal: false, title: '', content: '', titleValidation: '', contentValidation: '' })
}
export const handleModalAdd = (updateState) => {
  updateState({
    showModal: true, formulaire: true, formulaireTitleAdd: true, recap: false, formulaireUpdate: false, descriptionDelete: false, showDetails: false, title: '', content: '', avatar: '', titleValidation: '', contentValidation: ''
  })
}
