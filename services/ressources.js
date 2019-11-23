import axios from 'axios'
const baseUrl = 'http://localhost:3001/'

export const getAllRessources = () => {
  return axios.get(baseUrl + 'ressources')
}

export const getAllModules = () => {
  return axios.get(baseUrl + 'modules')
}

export const getAllSequences = () => {
  return axios.get(baseUrl + 'sequences')
}

export const getAllPromotions = () => {
  return axios.get(baseUrl + 'promotions')
}
