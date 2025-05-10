// src/pages/Admin.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Admin.css';
import AuthModal from '../components/AuthModal';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [portfolios, setPortfolios] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [liveDemoLink, setLiveDemoLink] = useState('');
  const [image, setImage] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsAuthenticated(isLoggedIn);
  }, []);
  
  useEffect(() => {
    if (isAuthenticated) {
      fetchPortfolios();
    }
  }, [isAuthenticated]);

  const fetchPortfolios = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('http://localhost:5000/api/portfolios', {
        headers: {
          'admin-username': 'techtwirl',
          'admin-password': 'admin'
        }
      });
      setPortfolios(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching portfolios:', error);
      setError('Failed to fetch projects. Please try again.');
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');
    
    const formData = new FormData();
    formData.append('projectName', projectName);
    formData.append('description', description);
    formData.append('technologies', technologies);
    formData.append('githubLink', githubLink);
    formData.append('liveDemoLink', liveDemoLink);
    if (image) formData.append('image', image);

    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/portfolios/${editingId}`, formData, {
          headers: { 
            'Content-Type': 'multipart/form-data',
            'admin-username': 'techtwirl',
            'admin-password': 'admin'
          }
        });
        setSuccessMessage('Project updated successfully!');
      } else {
        await axios.post('http://localhost:5000/api/portfolios', formData, {
          headers: { 
            'Content-Type': 'multipart/form-data',
            'admin-username': 'techtwirl',
            'admin-password': 'admin'
          }
        });
        setSuccessMessage('Project created successfully!');
      }
      fetchPortfolios();
      resetForm();
    } catch (error) {
      console.error('Error submitting project:', error);
      setError('Failed to save project. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setProjectName('');
    setDescription('');
    setTechnologies('');
    setGithubLink('');
    setLiveDemoLink('');
    setImage(null);
    setEditingId(null);
  };

  const handleEdit = (project) => {
    setProjectName(project.projectName);
    setDescription(project.description);
    setTechnologies(project.technologies?.join(', '));
    setGithubLink(project.githubLink || '');
    setLiveDemoLink(project.liveDemoLink || '');
    setEditingId(project._id);
    
    // Scroll to the top of the form
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    try {
      setLoading(true);
      await axios.delete(`http://localhost:5000/api/portfolios/${id}`, {
        headers: {
          'admin-username': 'techtwirl',
          'admin-password': 'admin'
        }
      });
      fetchPortfolios();
      setSuccessMessage('Project deleted successfully!');
    } catch (error) {
      console.error('Error deleting project:', error);
      setError('Failed to delete project. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsAuthenticated(false);
  };
  
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  if (!isAuthenticated) {
    return <AuthModal onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="admin-dashboard">
      <button onClick={handleLogout} style={{ float: 'right', margin: '1rem', padding: '0.5rem 1rem' }}>Logout</button>
      
      <section className="form-section">
        <h2>{editingId ? 'Update Project' : 'Upload New Project'}</h2>
        
        {error && <div className="error-message">{error}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
        
        <form onSubmit={handleSubmit} className="login-form" encType="multipart/form-data">
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Project Name" 
              value={projectName} 
              onChange={(e) => setProjectName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <textarea 
              placeholder="Description" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Technologies (comma separated)" 
              value={technologies} 
              onChange={(e) => setTechnologies(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <input 
              type="url" 
              placeholder="GitHub Link" 
              value={githubLink} 
              onChange={(e) => setGithubLink(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <input 
              type="url" 
              placeholder="Live Demo Link" 
              value={liveDemoLink} 
              onChange={(e) => setLiveDemoLink(e.target.value)} 
            />
          </div>
          <div className="form-group file-input">
            <input 
              type="file" 
              onChange={handleImageChange} 
              accept="image/*"
            />
          </div>
          <button 
            type="submit" 
            className="btn-primary"
            disabled={loading}
          >
            {loading ? 'Processing...' : (editingId ? 'Update Project' : 'Upload Project')}
          </button>
          {editingId && (
            <button 
              type="button" 
              className="btn-secondary" 
              onClick={resetForm}
            >
              Cancel Edit
            </button>
          )}
        </form>
      </section>

      <section className="projects-section">
        <h2>Existing Projects</h2>
        {loading && <p className="loading-message">Loading projects...</p>}
        <div className="portfolio-list">
          {portfolios.length > 0 ? (
            portfolios.map((p) => (
              <article key={p._id} className="portfolio-card">
                <div className="portfolio-info">
                  <h4>{p.projectName}</h4>
                  <p>{p.description}</p>
                  <p><strong>Technologies:</strong> {p.technologies?.join(', ')}</p>
                  <div className="link-group">
                    {p.githubLink && (
                      <a href={p.githubLink} target="_blank" rel="noreferrer" className="link">GitHub</a>
                    )}
                    {p.liveDemoLink && (
                      <a href={p.liveDemoLink} target="_blank" rel="noreferrer" className="link">Live Demo</a>
                    )}
                  </div>
                </div>
                {p.imageUrl && (
                  <div className="portfolio-image">
                    <img 
                      src={`http://localhost:5000${p.imageUrl}`} 
                      alt={p.projectName}
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/100x100?text=NA";
                        e.target.style.opacity = "0.5";
                      }}
                    />
                  </div>
                )}
                <div className="btn-group">
                  <button onClick={() => handleEdit(p)} className="btn-edit">Edit</button>
                  <button onClick={() => handleDelete(p._id)} className="btn-delete">Delete</button>
                </div>
              </article>
            ))
          ) : (
            <p>No projects found.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Admin;
