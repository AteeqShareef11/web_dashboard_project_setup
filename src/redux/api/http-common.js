// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

// const apiUrl = 'http://192.168.11.83:8000/api';
// const apiUrl = 'https://backend.zimdocemr.com/api';
const apiUrl = 'https://api.zimdocemr.com/api';
// export const baseURL = 'https://smartfunstudios.com/emr/public/storage/';

export const socketUrl = 'https://smartfunstudios.com/emr/public';

// export const baseURL = 'http://192.168.11.89:8000/storage/';
const apiUrlForAi = 'https://smartfunstudios.com/emr/public';
export const baseURL = 'https://smartfunstudios.com/emr/public/storage/';

// export const baseURL = 'http://192.168.11.38:8000/storage/';

// export const baseURL = 'http://192.168.11.89:8000/storage/';
// const apiUrl = 'http://192.168.11.38:8000/api';

export const callAiAPi = axios.create({
  baseURL: apiUrlForAi,
  headers: {
    'Content-type': 'application/json',
    'ngrok-skip-browser-warning': '69420', // Adding custom header
  },
});
callAiAPi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('emr_token');
    if (token && token !== undefined) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const callAPi = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-type': 'application/json',
    'ngrok-skip-browser-warning': '69420', // Adding custom header
  },
});
callAPi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('emr_token');
    if (token && token !== undefined) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const registerCallAPi = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-type': 'application/json',
    'ngrok-skip-browser-warning': '69420', // Adding custom header
  },
});
registerCallAPi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token && token !== undefined) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const callAPiMultiPart = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-type': 'multipart/form-data',
    'ngrok-skip-browser-warning': '69420', // Adding custom header
  },
});

callAPiMultiPart.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('emr_token');
    if (token && token !== undefined) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const handleApiError = (error) => {
  if (error.response && error.response.status === 401) {
    // If API response indicates unauthorized, trigger logout
    handleLogout();
  }
  // You can handle other types of errors here as needed
};

const handleLogout = () => {
  // Implement logout functionality
  // Clear authentication state, remove tokens, etc.
  localStorage.removeItem('emr_token');
  if (window.location.pathname !== '/refer') {
    window.location.href = '/login';
  }
};

// Add response error interceptor to all Axios instances
[callAiAPi, callAPi, registerCallAPi, callAPiMultiPart].forEach((instance) => {
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      handleApiError(error);
      return Promise.reject(error);
    }
  );
});
