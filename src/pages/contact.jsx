import React from "react";
import styles from '../styles/contact.module.css';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white py-4 fixed w-full top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Exytex" className="h-8" />
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 transform transition duration-200 ease-in-out"
            >
              Home
            </a>
            <a
              href="/services"
              className="text-gray-700 hover:text-blue-600 transform transition duration-200 ease-in-out"
            >
              Services
            </a>
            <a
              href="/blog"
              className="text-gray-700 hover:text-blue-600 transform transition duration-200 ease-in-out"
            >
              Blog
            </a>
            <a
              href="/portfolio"
              className="text-gray-700 hover:text-blue-600 transform transition duration-200 ease-in-out"
            >
              Portfolio
            </a>
            <a
              href="/team"
              className="text-gray-700 hover:text-blue-600 transform transition duration-200 ease-in-out"
            >
              Team
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transform transition duration-200 ease-in-out"
            >
              Contact
            </a>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Get In Touch
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div>
          <h1>Contact Us</h1>
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span> → </span>
            <span>Contact</span>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.104192756675!2d88.42600661441787!3d22.576377685181897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275927f0024ef%3A0x496c2c8a9ac0c5c9!2sNew%20Town%2C%20Kolkata%2C%20West%20Bengal%20700156!5e0!3m2!1sen!2sin!4v1708089433619!5m2!1sen!2sin"
          style={{ border: 0 }}
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">
              We'll Be Glad To Assist You!
            </h2>
            <p className="text-gray-600 text-center mb-12">
              If there's anything you would like to know, please do not hesitate
              to contact us.
            </p>

            <div className="flex flex-col md:flex-row gap-12">
              {/* Contact Form */}
              <div className="w-full md:w-1/2">
                <form className="space-y-6 contact-form">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Message"
                      className="w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Illustration */}
              <img
                src="https://img.freepik.com/free-vector/call-center-design_24877-49643.jpg"
                alt="Contact illustration"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
