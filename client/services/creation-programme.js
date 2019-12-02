import axios from 'axios'
const baseUrl = 'http://localhost:3333/api/'

export const getModules = (name) => {
  console.log(`${baseUrl}${name}`)
  return axios.get(`${baseUrl}${name}`)
}

export const addToProgram = (nameId, name, progId) => {
  console.log(`${baseUrl}${name}/${nameId}`)
  return axios.put(`${baseUrl}${name}/${nameId}`, { programmeId: progId })
}

export const create = (name, title) => {
  console.log(name, title)
  return axios.post(`${baseUrl}${name}`, { title: title })
}
