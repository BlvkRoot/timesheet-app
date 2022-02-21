import axios from 'axios';

const authenticate = (loginParams) => {
  return axios.post('http://localhost:4141/api/v1/users/login', loginParams);
};

export { authenticate }
