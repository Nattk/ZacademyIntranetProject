export const handleClose = (updateState) => {
  updateState({
    showModal: false,
    urlSocialMediaValidation: '',
    githubValidation: '',
    mediumValidation: '',
    twitterValidation: ''
  })
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
    formateursValidation: '',
    githubValidation: '',
    mediumValidation: '',
    twitterValidation: ''
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
    formateursValidation: '',
    urlSocialMediaValidation: '',
    githubValidation: '',
    mediumValidation: '',
    twitterValidation: ''

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
export const handleModalReturnUpdate = (updateState) => {
  updateState({
    showModal: true,
    formulaire: true,
    formulaireTitleAdd: false,
    recap: false,
    formulaireUpdate: true,
    descriptionDelete: false,
    showDetails: false,
    urlSocialMediaValidation: ''

  })
}
