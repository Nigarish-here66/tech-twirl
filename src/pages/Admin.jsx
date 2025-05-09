import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import '../styles/Admin.css';
import AuthModal from '../components/AuthModal';

// Default hardcoded projects (mapped to match database fields)
// const defaultProjects = [
  // {
  //   projectName: "AI-Powered Analytics Dashboard",
  //   description: "Real-time data visualization platform with machine learning insights",
  //   category: "web",
  //   technologies: ["React", "TensorFlow.js", "Node.js", "WebGL"],
  //   liveDemoLink: "#",
  //   githubLink: "#",
  //   color: "#28569a",
  //   imageUrl: "https://images.datalanguage.com/39Kv06WnQuoWbQeKsA4uof/explainable-ai-dashboard.jpg"
  // },
  // {
  //   projectName: "Crypto Trading Platform",
  //   description: "Advanced cryptocurrency trading platform with real-time market data",
  //   category: "enterprise",
  //   technologies: ["React Native", "WebSocket", "Redux", "Firebase"],
  //   liveDemoLink: "#",
  //   githubLink: "#",
  //   color: "#28569a",
  //   imageUrl: "https://assets.devfolio.co/hackathons/c64ccd2fb8d54398bfe3bb913b2012a9/projects/31d9e7bb7b0e459babeffd39c2765a53/f5f6b525-370e-4297-a224-a9190ab3539e.png"
  // },
  // {
  //   projectName: "Smart Home IoT Hub",
  //   description: "Centralized IoT control system for smart home devices",
  //   category: "mobile",
  //   technologies: ["Flutter", "MQTT", "GraphQL", "AWS IoT"],
  //   liveDemoLink: "#",
  //   githubLink: "#",
  //   color: "#28569a",
  //   imageUrl: "https://bs-uploads.toptal.io/blackfish-uploads/uploaded_file/file/39332/image-1566402184774-80ed60aba9fd255bac32ecc38c477780.jpg"
  // },
  // {
  //   projectName: "E-Commerce Platform with AI Recommendations",
  //   description: "A web-based e-commerce platform offering personalized product recommendations using AI algorithms.",
  //   category: "web",
  //   technologies: ["Angular", "Node.js", "MongoDB", "TensorFlow.js"],
  //   liveDemoLink: "#",
  //   githubLink: "#",
  //   color: "#28569a",
  //   imageUrl: "https://www.queppelin.com/wp-content/uploads/2021/08/ai-recommendation-system.jpg"
  // },
  // {
  //   projectName: "Mobile Health Monitoring App",
  //   description: "A mobile application that tracks user health metrics and provides real-time feedback.",
  //   category: "mobile",
  //   technologies: ["Swift", "HealthKit", "CoreData", "Firebase"],
  //   liveDemoLink: "#",
  //   githubLink: "#",
  //   color: "#28569a",
  //   imageUrl: "https://www.shutterstock.com/image-vector/medicine-smartphone-interface-vector-templates-260nw-1545547160.jpg"
  // },
  // {
  //   projectName: "Enterprise Resource Planning System",
  //   description: "An integrated enterprise application for managing company resources and operations.",
  //   category: "enterprise",
  //   technologies: ["Java", "Spring Boot", "PostgreSQL", "RabbitMQ"],
  //   liveDemoLink: "#",
  //   githubLink: "#",
  //   color: "#28569a",
  //   imageUrl: "https://t3.ftcdn.net/jpg/02/19/92/40/360_F_219924013_YH64nzKBC00zq2TI75uXS3riW5yPXHPw.jpg"
  // },
  // {
  //   projectName: "Mobile Payment Solution",
  //   description: "A secure mobile application facilitating seamless peer-to-peer payments.",
  //   category: "mobile",
  //   technologies: ["Kotlin", "Firebase", "Stripe API", "Realm"],
  //   liveDemoLink: "#",
  //   githubLink: "#",
  //   color: "#28569a",
  //   imageUrl: "https://images.ctfassets.net/iwafom9nwg8j/2KnAio2P2jzUN4Cp0DJSrO/b938e7b7cfc02ddeb59118d20bc07361/Best_Mobile_Payment_Solutions_For_Online_Business__1__2_.webp"
  // },
  // {
  //   projectName: "Web-Based Project Management Tool",
  //   description: "A collaborative web application for project planning and team communication.",
  //   category: "web",
  //   technologies: ["React", "Node.js", "GraphQL", "MySQL"],
  //   liveDemoLink: "#",
  //   githubLink: "#",
  //   color: "#28569a",
  //   imageUrl: "https://cdn.wedevs.com/uploads/2021/04/Best-project-management-software-for-web-designers.png"
  // }
// ];



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

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsAuthenticated(isLoggedIn);
  }, []);

  const fetchPortfolios = useCallback(async () => {
    try {
      const { data } = await axios.get('/api/portfolio');
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
        await axios.put(`/api/portfolio/${editingId}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      } else {
        await axios.post('/api/portfolio', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
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
      await axios.delete(`/api/portfolio/${id}`);
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


