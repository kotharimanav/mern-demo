const axios = require('axios');
const {setHeadersWithAccessToken} = require('./index');

export const login = async data => {
  setHeadersWithAccessToken(null);
  return await axios.post(`/admin/login`, data).then(res=>{
  console.log(res);
    return res.data
  });
};



export const logout = () => {
  return {
    isLogin: false,
    accessToken: ''
  };
};
