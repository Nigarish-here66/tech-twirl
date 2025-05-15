import { useState } from "react";
import { FaHome, FaServicestack, FaBriefcase, FaUsers, FaEnvelope, FaBars } from "react-icons/fa"; 
import "../styles/SideBar.css"; 

// Sidebar component definition
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <div 
      className={`sidebar ${isOpen ? "open" : "closed"}`} 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Button that shows the menu icon */}
      <button className="menu-btn">
        <FaBars />
      </button>

      {/* Sidebar navigation list */}
      <ul>
        <li><FaHome /><span>Home</span></li>
        <li><FaServicestack /><span>Services</span></li>
        <li><FaBriefcase /><span>Portfolio</span></li>
        <li><FaUsers /><span>Team</span></li>
        <li><FaEnvelope /><span>Contact</span></li>
      </ul>

      {/* Optional "Hire Us" prompt, visible only when sidebar is open */}
      {isOpen && <div className="hire-us">Hire Us</div>}
    </div>
  );
};

export default Sidebar; 
