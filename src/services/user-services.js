const axios = require('axios');
const { setHeadersWithAccessToken } = require('./index');

export const getUsers = async (token, data) => {
  setHeadersWithAccessToken(token);
  return await axios.get(`/user/`).then(res => {
    return res.data
  });
};

export const addUser = async (token, data) => {
  setHeadersWithAccessToken(token);
  return await axios.post(`/user/`, data).then(res => {
    return res.data
  });
};

export const removeUser = async (token, id) => {
  setHeadersWithAccessToken(token);
  return await axios.delete(`/user/${id}`).then(res => {
    return res.data
  });
};

export const editUser = async (token,id,data)=>{
  setHeadersWithAccessToken(token);
  return await axios.put(`/user/${id}`,data).then(res => {
    return res.data
  });
}