import axios from 'axios'
const baseUrl = 'http://localhost:3333/api/'

export const getItem = (name, id) => {
  return axios.get(`${baseUrl}${name}/${id}`)
}

export const getModules = (name) => {
  console.log(`${baseUrl}${name}`)
  return axios.get(`${baseUrl}${name}`)
}

export const addToProgram = (nameId, name, parentId, title) => {
  if (name === 'modules') {
    return axios.put(`${baseUrl}${name}/${nameId}`, { programmeId: parentId })
  } else if (name === 'sousmodules') {
    return axios.put(`${baseUrl}${name}/${nameId}`, { moduleId: parentId })
  } else {
    return axios.put(`${baseUrl}${name}/${nameId}`, { title: title, sousmoduleId: parentId })
  }
}

export const create = (name, title) => {
  return axios.post(`${baseUrl}${name}`, { title: title })
}
