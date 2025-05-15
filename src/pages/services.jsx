import React from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  Database,
  Globe2,
  LayoutGrid,
  MessageSquare,
  MonitorSmartphone,
  Settings2,
} from "lucide-react";
import "../styles/servicepage.css";

// Array of service objects with icons, titles, and descriptions
const services = [
  {
    icon: <Code2 className="w-12 h-12" style={{ color: "#3182ce" }} />,
    title: "Custom Software Development",
    description:
      "We create tailored software solutions that perfectly align with your business needs and objectives.",
  },
  {
    icon: <MonitorSmartphone className="w-12 h-12" style={{ color: "#3182ce" }} />,
    title: "Web & Mobile Development",
    description:
      "End-to-end development of responsive web applications and mobile apps for iOS and Android platforms.",
  },
  {
    icon: <Database className="w-12 h-12" style={{ color: "#3182ce" }} />,
    title: "Database Solutions",
    description:
      "Expert database design, optimization, and management services to ensure your data is secure and efficient.",
  },
  {
    icon: <Globe2 className="w-12 h-12" style={{ color: "#3182ce" }} />,
    title: "Cloud Services",
    description:
      "Comprehensive cloud solutions including migration, hosting, and management on leading platforms.",
  },
  {
    icon: <Settings2 className="w-12 h-12" style={{ color: "#3182ce" }} />,
    title: "IT Consulting",
    description:
      "Strategic technology consulting to help you make informed decisions and optimize your IT infrastructure.",
  },
  {
    icon: <MessageSquare className="w-12 h-12" style={{ color: "#3182ce" }} />,
    title: "24/7 Support",
    description:
      "Round-the-clock technical support and maintenance to keep your systems running smoothly.",
  },
];

function Services() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Services</h1>
        </div>
      </section>

      {/* Services Title Section */}
      <section className="services-section">
        <h2 className="services-heading">Services</h2>
        <div className="heading-underline">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      {/* Services Cards Grid */}
      <div className="container">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Informational Boxes Section */}
      <section className="info-boxes-section">
        {/* Info Box 1 */}
        <div className="info-box">
          <div className="info-icon">
            <LayoutGrid className="info-icon-inner" />
          </div>
          <div className="info-text">
            <h3 className="info-title">Managing All Types Of Digital Projects</h3>
            <p className="info-description">
              Tech Twirl conceptualizes, designs, develops and promotes your
              idea into real, practical, feasible and easy to use solutions...
              {/* Text truncated for brevity */}
            </p>
          </div>
        </div>

        {/* Info Box 2 */}
        <div className="info-box">
          <div className="info-icon">
            <LayoutGrid className="info-icon-inner w-10 h-10" />
          </div>
          <div className="info-text">
            <h3 className="info-title">Tech Twirl Is Your Best Option.</h3>
            <p className="info-description">
              We have extensive experience in Android, integration with REST
              APIs, social network APIs, push notifications, Google maps...
              {/* Text truncated for brevity */}
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Business?</h2>
          <p className="cta-description">
            Let's discuss how our services can help you achieve your goals
          </p>
          {/* CTA Button linking to contact page */}
          <Link to="/contact">
            <button className="cta-button">Contact Us Today</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
