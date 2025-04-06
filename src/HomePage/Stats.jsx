import React, { useEffect, useState, useRef } from "react";
import { FaCheckCircle, FaSmile, FaCogs, FaTrophy } from "react-icons/fa";
import '../styles/';

const statsData = [
  { icon: <FaCheckCircle />, number: 107, text: "Completed Projects" },
  { icon: <FaSmile />, number: 52, text: "Happy Clients" },
  { icon: <FaCogs />, number: 71, text: "Multi Services" },
  { icon: <FaTrophy />, number: 19, text: "Winning Awards" },
];

const Stats = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible) {
      statsData.forEach((stat, index) => {
        let start = 0;
        const increment = Math.ceil(stat.number / 50);
        const interval = setInterval(() => {
          start += increment;
          if (start >= stat.number) {
            start = stat.number;
            clearInterval(interval);
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = start;
            return newCounts;
          });
        }, 30);
      });
    }
  }, [visible]);

  return (
    <div className="stats-section">
      <h2>
        We Have Completed <span className="highlight">100+</span> Projects{" "}
        <span className="highlight">Successfully</span>
      </h2>
      <div className="stats-container" ref={ref}>
        {statsData.map((stat, index) => (
          <div key={index} className="stat-box">
            <div className="stat-icon">{stat.icon}</div>
            <h3>{counts[index]}</h3>
            <p>{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
