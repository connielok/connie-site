import React, { useState } from 'react';
import Form from './Form';
import { Typography, Container } from '@material-ui/core';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    if (e.target.id === 'name') {
      setName(e.target.value);
    }
    if (e.target.id === 'email') {
      setEmail(e.target.value);
    }
    if (e.target.id === 'message') {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <Container maxWidth="md">
        <Typography variant="h3">Get in Touch</Typography>
        <div className="contact">
          <p>I am currently looking for new opportunities.</p>
          <p>
            If you are interested in working together, please send me a message
            here or through{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/conniehlok/"
            >
              Linkedin
            </a>
            .
          </p>
        </div>
        <Form
          name={name}
          email={email}
          message={message}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </Container>
    </div>
  );
};

export default Contact;
