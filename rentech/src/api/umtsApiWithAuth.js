import axios from 'axios'

const umtsApiWithAuth = () => {

  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://umts-backend.herokuapp.com/api',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  })
};

export default umtsApiWithAuth
