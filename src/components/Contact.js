import React, { useState } from 'react';
import Form from './Form';
import { Typography, Container, Link } from '@material-ui/core';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sentVerification, setSentVerification] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('/api/contact', {
      name,
      email,
      message,
    });
    setSentVerification(data.reply);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <Container maxWidth="md">
        <Typography variant="h3">Let's Connect</Typography>
        {sentVerification ? (
          <div>
            <Container maxWidth="md">
              <Typography variant="body2">
                <span role="img" aria-label="sparkles">
                  ✨✨✨
                </span>
                {sentVerification}
                <span role="img" aria-label="sparkles">
                  ✨✨✨
                </span>
              </Typography>
            </Container>
          </div>
        ) : (
          <div>
            <div className="contact">
              <Typography variant="body2">
                I am currently looking for new opportunities.
              </Typography>
              <Typography variant="body2">
                If you are interested in working together, please send me a
                message here or through{' '}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/conniehlok/"
                >
                  Linkedin
                </Link>
                .
              </Typography>
            </div>
            <Form
              name={name}
              email={email}
              message={message}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Contact;
