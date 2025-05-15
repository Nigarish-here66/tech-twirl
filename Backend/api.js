import axios from 'axios';

// Set the base URL for the API, using an environment variable or defaulting to localhost
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create an axios instance with default config
const api = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json', 
  }
});

// ==========================================
// Axios Request Interceptor
// Automatically attaches admin credentials from localStorage to every request
// ==========================================
api.interceptors.request.use(
  (config) => {

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (isLoggedIn) {
      config.headers['admin-username'] = localStorage.getItem('adminUser');
      config.headers['admin-password'] = localStorage.getItem('adminPass');
    }

    return config; 
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ==========================================
// API Function Definitions
// These wrap HTTP requests for use throughout the frontend
// ==========================================

// Portfolio API
export const fetchPortfolios = () => api.get('/portfolios');
export const createPortfolio = (portfolioData) => api.post('/portfolios', portfolioData); 
export const updatePortfolio = (id, portfolioData) => api.put(`/portfolios/${id}`, portfolioData); 
export const deletePortfolio = (id) => api.delete(`/portfolios/${id}`); 

// Hire Us API
export const fetchHireRequests = () => api.get('/hireus'); 

// Contact API
export const fetchContacts = () => api.get('/contact'); 

// User-submitted portfolios
export const fetchUserPortfolios = () => api.get('/userportfolios'); 

// Admin login
export const login = (credentials) => api.post('/admin/login', credentials); 

export default api;
