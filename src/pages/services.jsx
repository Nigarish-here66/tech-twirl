import React from "react";
import {
  Code2,
  Database,
  Globe2,
  Laptop2,
  LayoutGrid,
  MessageSquare,
  MonitorSmartphone,
  Settings2,
} from "lucide-react";
import "../styles/servicepage.css";

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

function Services() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Services</h1>
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span> → </span>
            <span>Services</span>
          </div>
          <p className="hero-subtitle">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Section Title */}
      <section className="services-section">
        <h2 className="services-heading">Services</h2>
        <div className="heading-underline">
          <span></span>
          <span></span>
          <span></span>
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
      {/* Informational Boxes Section (No Bootstrap, Custom CSS Only) */}
      <section className="info-boxes-section">
        <div className="info-box">
          <div className="info-icon">
            <LayoutGrid className="info-icon-inner" />
          </div>
          <div className="info-text">
            <h3 className="info-title">
              Managing All Types Of Digital Projects
            </h3>
            <p className="info-description">
              Tech Twirl conceptualizes, designs, develops and promotes your
              idea into real, practical, feasible and easy to use solutions that
              help you maximize revenue. We have experience in managing all
              types of digital project design and development that can range
              from small business automation to web-compliant and large
              enterprise ERP systems. Same level of synergy and robust quality
              methods. We offer you customized solutions. With more than three
              years of experience providing technological solutions. It allows
              us to meet the needs of our customers and provide solutions that
              help boost your business. We combine the talents of our highly
              skilled engineering staff with our top-notch marketing team,
              working from Pakistan with a commitment to helping companies build
              great, reliable services in website, applications, digital
              marketing and graphic design. Fast and reliable way.
            </p>
          </div>
        </div>

        <div className="info-box">
          <div className="info-icon">
            <LayoutGrid className="info-icon-inner w-10 h-10" />
          </div>
          <div className="info-text">
            <h3 className="info-title">Tech Twirl Is Your Best Option.</h3>
            <p className="info-description">
              We have extensive experience in Android, integration with REST
              APIs, integrations with social networks (Facebook, Twitter,
              Instagram, Google+), push notifications, Google maps and
              geolocation, analytics, QR codes, video, audio, photos and camera.
              As well as using Java and Kotlin, Android Studio, Material design,
              Gradle, Retrofit, and some other awesome tools. If you are looking
              to have a development team sharing the same time zone, close and
              integrated with yours.
            </p>
          </div>
        </div>
      </section>

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
    </div>
  );
}

export default Services;
