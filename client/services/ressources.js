import axios from 'axios'
const baseUrl = 'http://localhost:3333/api/'

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

export const getAllRSS = () => {
  return axios.get(baseUrl + 'rss')
}

export const getAllFollows = () => {
  return axios.get(baseUrl + 'follows')
}

export const postRessources = (userToken, data) => {
  const token = `bearer ${userToken}`
  const config = {
    headers: { Authorization: token }

  }
  return axios.post(baseUrl + 'ressources', data, config)
}

export const getRessource = (id) => {
  return axios.get(baseUrl + 'ressources/' + id)
}
