import axios from 'axios';

const http = axios.create();

http.interceptors.response.use(function(resp) {
  const { data } = resp;
  if (data.success) {
    return data;
  }
  return Promise.reject(resp);
});

export default http;