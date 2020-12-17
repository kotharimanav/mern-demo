export const login = async data => {
  return await new Promise((resolve, reject) => {
    if (data.username === 'test' && data.password === '123456') {
      resolve({
        isLogin: true,
        accessToken: 'dummyToken'
      });
    }
    reject(null);
  });
};

export const logout = () => {
  return {
    isLogin: false,
    accessToken: ''
  };
};
