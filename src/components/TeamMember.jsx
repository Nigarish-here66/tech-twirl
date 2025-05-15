import React from "react";
import styles from '../styles/Teams.module.css'; 

// Import team member images
import NigImg from '../assets/nigarish.jpg';
import ManImg from '../assets/manahil.jpg';
import RidImg from '../assets/rida.jpg';
import MadImg from '../assets/madiha.jpg';

// Import social media icons from react-icons
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

// Array of team member data
const teamMembers = [
  {
    name: "Nigarish Fateh",
    role: "Project Manager",
    image: NigImg,
  },
  {
    name: "Manahil Habib",
    role: "Marketing Team Lead",
    image: ManImg,
  },
  {
    name: "Rida Fatima",
    role: "HR Manager",
    image: RidImg,
  },
  {
    name: "Madiha Abbasi",
    role: "Team Leader",
    image: MadImg,
  },
];

// Functional component to display team members
const TeamMember = () => {
  return (
    <div className={styles["team-section"]}> 
      
      {/* Section title */}
      <h2 className={styles["team-title"]}>Meet Our Team</h2>

      {/* Grid layout for team cards */}
      <div className={styles["team-grid"]}>
        {teamMembers.map((member, index) => (
          <div className={styles["team-card"]} key={index}> 
            
            {/* Image and social overlay */}
            <div className={styles["team-image"]}>
              <img src={member.image} alt={member.name} />
              
              {/* Social media icons overlay on hover */}
              <div className={styles["social-icons"]}>
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaInstagram /></a>
              </div>
            </div>

            {/* Member name and role */}
            <h3 className={styles["team-name"]}>{member.name}</h3>
            <p className={styles["team-role"]}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember; 
