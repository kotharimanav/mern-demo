const axios = require('axios');
const { setHeadersWithAccessToken } = require('./index');

export const getUsers = async (token, data) => {
  setHeadersWithAccessToken(token);
  return await axios.get(`/user/`).then(res => {
    return res.data
  });
};

export const addUser = async (token, data) => {
  console.log(token, data);
  setHeadersWithAccessToken(token);
  return await axios.post(`/user/`, data).then(res => {
    return res.data
  });
};
