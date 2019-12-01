import axios from 'axios'
const baseUrl = 'http://localhost:3333/api/modules/'

export const addModuleToProgram = (modId, progId) => {
  console.log(`${baseUrl}${modId}`)
  return axios.put(`${baseUrl}${modId}`, { programmeId: progId })
}
