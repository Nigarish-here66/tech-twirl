// api.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add request interceptor to include admin credentials in authenticated requests
api.interceptors.request.use(
  (config) => {
    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (isLoggedIn) {
      // Add admin credentials to the headers
      config.headers['admin-username'] = localStorage.getItem('adminUser');
      config.headers['admin-password'] = localStorage.getItem('adminPass');
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Example API functions
export const fetchPortfolios = () => api.get('/portfolios');
export const createPortfolio = (portfolioData) => api.post('/portfolios', portfolioData);
export const updatePortfolio = (id, portfolioData) => api.put(`/portfolios/${id}`, portfolioData);
export const deletePortfolio = (id) => api.delete(`/portfolios/${id}`);

export const fetchHireRequests = () => api.get('/hireus');
export const fetchContacts = () => api.get('/contact');
export const fetchUserPortfolios = () => api.get('/userportfolios');

export const login = (credentials) => api.post('/admin/login', credentials);

export default api;