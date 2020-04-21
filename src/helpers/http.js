import axios from 'axios';

const defaultURL = 'http://localhost:3000/api/';

export const get = (path = '', data = {}, url = defaultURL) =>
  axios.get(`${url}${path}`, { params: data });

export const post = (path = '', data = {}, url = defaultURL) =>
  axios.post(`${url}${path}`, data);
