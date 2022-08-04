import axios from 'axios'

export const getCatsRequest = async () =>
     await axios.get('http://localhost:3000/api/cats')

export const createCat = async (cat) =>
     await axios.post('http://localhost:3000/api/cats', cat, {
          headers: {
               'Authorization': localStorage.getItem('jwt')
          }
     })

export const getOneCat = async (id) =>
     await axios.get(`http://localhost:3000/api/cats/${id}`, {
          headers: {
               'Authorization': localStorage.getItem('jwt')
          }
     })

export const logIn = async (user) =>
     await axios.post('http://localhost:3000/login', user)
