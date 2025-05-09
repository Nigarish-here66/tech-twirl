import React, { useState, useEffect, useCallback } from 'react';
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

  const headers = {
    'admin-username': 'techtwirl',
    'admin-password': 'admin'
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsAuthenticated(isLoggedIn);
  }, []);

  const fetchPortfolios = useCallback(async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/portfolio', { headers });
      setPortfolios(data);
    } catch (error) {
      console.error('Error fetching portfolios:', error);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchPortfolios();
    }
  }, [isAuthenticated, fetchPortfolios]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('projectName', projectName);
    formData.append('description', description);
    formData.append('technologies', technologies);
    formData.append('githubLink', githubLink);
    formData.append('liveDemoLink', liveDemoLink);
    if (image) formData.append('image', image);

    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/portfolio/${editingId}`, formData, {
          headers: {
            ...headers,
            'Content-Type': 'multipart/form-data'
          }
        });
      } else {
        await axios.post('http://localhost:5000/api/portfolio', formData, {
          headers: {
            ...headers,
            'Content-Type': 'multipart/form-data'
          }
        });
      }
      fetchPortfolios();
      resetForm();
    } catch (error) {
      console.error('Error submitting project:', error);
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
    setGithubLink(project.githubLink);
    setLiveDemoLink(project.liveDemoLink);
    setEditingId(project._id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/portfolio/${id}`, { headers });
      fetchPortfolios();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AuthModal onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="admin-dashboard">
      <button onClick={handleLogout} style={{ float: 'right', margin: '1rem', padding: '0.5rem 1rem' }}>Logout</button>

      <section className="form-section">
        <h2>{editingId ? 'Update Project' : 'Upload New Project'}</h2>
        <form onSubmit={handleSubmit} className="login-form" encType="multipart/form-data">
          <div className="form-group">
            <input type="text" placeholder="Project Name" value={projectName} onChange={(e) => setProjectName(e.target.value)} required />
          </div>
          <div className="form-group">
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Technologies (comma separated)" value={technologies} onChange={(e) => setTechnologies(e.target.value)} />
          </div>
          <div className="form-group">
            <input type="url" placeholder="GitHub Link" value={githubLink} onChange={(e) => setGithubLink(e.target.value)} />
          </div>
          <div className="form-group">
            <input type="url" placeholder="Live Demo Link" value={liveDemoLink} onChange={(e) => setLiveDemoLink(e.target.value)} />
          </div>
          <div className="form-group file-input">
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <button type="submit" className="btn-primary">{editingId ? 'Update Project' : 'Upload Project'}</button>
          {editingId && <button type="button" className="btn-secondary" onClick={resetForm}>Cancel Edit</button>}
        </form>
      </section>

      <section className="projects-section">
        <h2>Existing Projects</h2>
        <div className="portfolio-list">
          {portfolios.length > 0 ? (
            portfolios.map((p) => (
              <article key={p._id} className="portfolio-card">
                <h4>{p.projectName}</h4>
                <p>{p.description}</p>
                <p><strong>Technologies:</strong> {p.technologies?.join(', ')}</p>
                <div className="link-group">
                  {p.githubLink && <a href={p.githubLink} target="_blank" rel="noreferrer" className="link">GitHub</a>}
                  {p.liveDemoLink && <a href={p.liveDemoLink} target="_blank" rel="noreferrer" className="link">Live Demo</a>}
                </div>
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
