import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/contactstyles.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!formData.name.trim()) formErrors.name = "Please enter your name";
    if (!formData.email.trim()) formErrors.email = "Please enter your email";
    if (!formData.subject.trim())
      formErrors.subject = "Please enter your subject";
    if (!formData.message.trim()) formErrors.message = "Write your message";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("Submitted Data:", formData);
      setSubmitted(true);

      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Contact Us</h1>
      </div>

      {/* Contact Section */}
      <section className="contact-section">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          We'll Be Glad To Assist You!
        </motion.h2>
        <p>
          If there's anything you would like to know, feel free to reach out!
        </p>

        <div className="contact-container">
          {/* Form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && (
              <span style={{ color: "red" }}>{errors.subject}</span>
            )}

            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <span style={{ color: "red" }}>{errors.message}</span>
            )}

            <button type="submit" disabled={submitted}>
              {submitted ? "Message Sent!" : "Send Message"}
            </button>
          </motion.form>

          {/* Image */}
          <motion.div
            className="contact-image"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <img
              src="https://img.freepik.com/free-vector/call-center-design_24877-49643.jpg"
              alt="Contact Illustration"
            />
          </motion.div>
        </div>
      </section>

      {/* Map Section - moved to the end */}
      <motion.div
        className="map-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{
            width: "100%",
            height: "350px",
            border: "none",
            borderRadius: "8px",
            marginTop: "40px",
          }}
        ></iframe>
      </motion.div>
    </div>
  );
}

export default Contact;
