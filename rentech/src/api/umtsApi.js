import axios from 'axios';



export const umtsApi= () =>{

  return axios.create({
  baseURL : 'https://umts-backend.herokuapp.com/api',
    headers: { 'Content-Type': 'application/json'}

  })
 
};


















