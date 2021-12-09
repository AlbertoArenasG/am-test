import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://localhost:5000/'
});

export const API = () => {
  const get = async (endpoint) => {
    try {
      const res = await Axios.get(endpoint);
      const result = {
        status: `${res.status}-${res.statusText}`,
        headers: res.headers,
        data: res.data,
      };
      return result;
    } catch (error) {
      return error.response?.data || error
    }
  }

  const post = async (endpoint, body = {}) => {
    try {
      const res = await Axios.post(endpoint, JSON.stringify(body));
      const result = {
        status: `${res.status}-${res.statusText}`,
        headers: res.headers,
        data: res.data,
      };
      return result;
    } catch (error) {
      return error.response?.data || error
    }
  }
  
  const remove = async (endpoint) => {
    try {
      const res = await Axios.delete(endpoint);
      const result = {
        status: `${res.status}-${res.statusText}`,
        headers: res.headers,
        data: res.data,
      };
      return result;
    } catch (error) {
      return error.response?.data || error
    }
  }

  return {
    get,
    post,
    remove,
  }
}
