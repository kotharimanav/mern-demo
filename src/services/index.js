import axios from "axios";

export const setHeadersWithAccessToken = (token) => {
  if(token)axios.defaults.headers.common["x-access-token"] = token;
  axios.defaults.baseURL = 'http://localhost:3001';
  console.log(axios.defaults);
};
