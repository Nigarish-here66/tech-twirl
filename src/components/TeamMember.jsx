import React from "react";
import styles from '../styles/Teams.module.css';
import NigImg from '../assets/nigarish.jpg';
import ManImg from '../assets/manahil.jpg';
import RidImg from '../assets/rida.jpg';
import MadImg from '../assets/madiha.jpg';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';



const teamMembers = [
    {
      name: "Nigarish Muneeb",
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
  

const TeamMember = () => {
  return (
    <div className={styles["team-section"]}>
      <h2 className={styles["team-title"]}>Meet Our Team</h2>
      <div className={styles["team-grid"]}>
        {teamMembers.map((member, index) => (
          <div className={styles["team-card"]} key={index}>
            <div className={styles["team-image"]}>
              <img src={member.image} alt={member.name} />
              <div className={styles["social-icons"]}>
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaInstagram /></a>
              </div>
            </div>
            <h3 className={styles["team-name"]}>{member.name}</h3>
            <p className={styles["team-role"]}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
