import axios from 'axios'
const baseUrl = 'http://localhost:3333'

export const getAllFormateurs = () => {
  return axios.get(`${baseUrl}/api/users`)
}
export const getAllStudents = () => {
  return axios.get('http://localhost:3333/api/users')
}
export const getAllProgrammes = () => {
  return axios.get('http://localhost:3333/api/programmes')
}
export const getAllPromotions = () => {
  return axios.get('http://localhost:3333/api/promotions')
}
export const getPromotionByID = (id) => {
  return axios.get(`http://localhost:3333/api/promotions/${id}`)
}
export const getUserByID = (id) => {
  return axios.get(`http://localhost:3333/api/users/${id}`)
}
export const getByID = (id) => {
  return axios.get(`http://localhost:3333/api/users/${id}`)

}
export const optionsCity =
  [

    { value: 'Paris', label: 'Paris' },
    { value: 'Lyon', label: 'Lyon' },
    { value: 'Nantes', label: 'Nantes' },
    { value: 'Rennes', label: 'Rennes' },
    { value: 'Lille', label: 'Lille' },
    { value: 'Toulouse', label: 'Toulouse' },
    { value: 'Singapour', label: 'Singapour' },
    { value: 'Montreal', label: 'Montreal' },
    { value: 'Casablanca', label: 'Casablanca' }

  ]
