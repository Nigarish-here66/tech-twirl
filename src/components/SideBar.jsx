import { useState } from "react";
import { FaHome, FaServicestack, FaBriefcase, FaUsers, FaEnvelope, FaBars } from "react-icons/fa";
import "../styles/SideBar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`sidebar ${isOpen ? "open" : "closed"}`} 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="menu-btn">
        <FaBars />
      </button>
      <ul>
        <li><FaHome /><span>Home</span></li>
        <li><FaServicestack /><span>Services</span></li>
        <li><FaBriefcase /><span>Portfolio</span></li>
        <li><FaUsers /><span>Team</span></li>
        <li><FaEnvelope /><span>Contact</span></li>
      </ul>
      {isOpen && <div className="hire-us">Hire Us</div>}
    </div>
  );
};

export default Sidebar;
