import React from 'react';
import Form from './Form';
import { Typography, Container } from '@material-ui/core';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      name: '',
      email: '',
      message: '',
    });
  }

  render() {
    return (
      <div>
        <Container maxWidth="md">
          <Typography variant="h3">Get in Touch</Typography>
          <div className="contact">
            <p>I am currently looking for new opportunities.</p>
            <p>
              If you are interested in working together, please send me a
              message here or through{' '}
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
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </Container>
      </div>
    );
  }
}

export default Contact;
