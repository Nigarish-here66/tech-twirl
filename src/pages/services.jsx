import React from "react";
import {Code2,Database,Globe2,MessageSquare,MonitorSmartphone,Settings2} from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-12 h-12" style={{ color: "#3182ce" }} />,
    title: "Custom Software Development",
    description:
      "We create tailored software solutions that perfectly align with your business needs and objectives.",
  },
  {
    icon: (
      <MonitorSmartphone className="w-12 h-12" style={{ color: "#3182ce" }} />
    ),
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

function OurServices() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Our Services</h1>
          <p className="hero-subtitle">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
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

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Business?</h2>
          <p className="cta-description">
            Let's discuss how our services can help you achieve your goals
          </p>
          <button className="cta-button">Contact Us Today</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Exytex. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default OurServices;
