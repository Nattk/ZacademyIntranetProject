export const handleClose = (updateState) => {
  updateState({ showModal: false })
}
export const handleCloseSwitch = (updateState) => {
  updateState({
    showModal: false,
    title: '',
    content: '',
    twitter: '',
    medium: '',
    github: '',
    help: '',
    avatar: '',
    url: '',
    titleValidation: '',
    contentValidation: '',
    phoneValidation: '',
    emailValidation: '',
    lastNameValidation: '',
    firstNameValidation: '',
    formateursValidation: ''
  })
}
export const handleModalAdd = (updateState) => {
  updateState({
    showModal: true,
    formulaire: true,
    formulaireTitleAdd: true,
    recap: false,
    formulaireUpdate: false,
    descriptionDelete: false,
    showDetails: false,
    title: '',
    content: '',
    twitter: '',
    medium: '',
    github: '',
    help: '',
    avatar: '',
    url: '',
    titleValidation: '',
    contentValidation: '',
    phoneValidation: '',
    emailValidation: '',
    lastNameValidation: '',
    firstNameValidation: '',
    formateursValidation: ''

  })
}

export const handleModalReturnAdd = (updateState) => {
  updateState({
    showModal: true,
    formulaire: true,
    formulaireTitleAdd: true,
    recap: false,
    formulaireUpdate: false,
    descriptionDelete: false,
    showDetails: false

  })
}
