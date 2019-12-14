import axios from 'axios'

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

export const handleSubmit = (state, updateState) => {
  axios.post('http://localhost:3333/api/follows', configuration(state))
    .then((data) => {
      console.log(data.data)
      updateState({ showModal: false, contacts: [...state.contacts, data.data], showAlertSuccess: true })
    })
    .catch((err) => console.log('err', err))
  setTimeout(() => {
    updateState({ showAlertSuccess: false })
  }, 3000)
}
export const handleUpdate = (state, id, updateState) => {
  axios.put(`http://localhost:3333/api/follows/${id}`, configuration(state))
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
  const data = state.contacts.filter(el => el.id !== id)
  const newData = [...data]
  axios.delete(`http://localhost:3333/api/follows/${id}`)
    .then(() => {
      updateState({ showModal: false, contacts: newData, showAlertDelete: true })
    }).catch((err) => console.error(err))
  setTimeout(() => {
    updateState({ showAlertDelete: false })
  }, 3000)
}
