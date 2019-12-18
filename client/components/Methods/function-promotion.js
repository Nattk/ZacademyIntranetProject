import axios from 'axios'
export const handleRemove = (state, id, updateState) => {
  const data = state.promotions.filter(el => el.id !== id)
  const newData = [...data]
  axios.delete(`http://localhost:3333/api/promotions/${id}`)
    .then(() => {
      updateState({ showModal: false, promotions: newData, showAlertDelete: true })
    }).catch((err) => console.error(err))
  setTimeout(() => {
    updateState({ showAlertDelete: false })
  }, 3000)
}
