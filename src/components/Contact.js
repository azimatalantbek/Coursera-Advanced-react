import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Your Name" 
          required 
        />
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Your Email" 
          required 
        />
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          placeholder="Your Message" 
          required 
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
