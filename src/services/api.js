import axios from 'axios';

const getApiBase = () => {
  // 1. Check for deployment environment variable
  if (import.meta.env.VITE_API_BASE) {
    return import.meta.env.VITE_API_BASE;
  }
  
  // 2. Development fallback
  if (import.meta.env.VITE_API_URL) {
    console.log('Running in development mode, using localhost API');
    //read form .env file
    if (import.meta.env.VITE_API_URL) {
      return import.meta.env.VITE_API_URL;
    }
    //return 'http://localhost:5000';
  }
  
  // 3. Production fallback (replace with your actual production API URL)
  return 'https://your-production-api.com';
};

const API_BASE = getApiBase();



// const API_URL = process.env.API_URL || 'http://localhost:5000';

export const sendEmail = async (data) => {
  return axios.post(`${API_BASE}/contact`, data);
};
