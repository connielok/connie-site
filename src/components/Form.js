import React from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const Form = (props) => {
  return (
    <form
      name="contact-form"
      action="/"
      onSubmit={props.handleSubmit}
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <Grid container spacing={2} direction="column">
        <Grid item>
          <TextField
            required
            id="name"
            name="name"
            label="Full Name"
            variant="outlined"
            value={props.name}
            onChange={props.handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            value={props.email}
            onChange={props.handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            required
            multiline
            rows={4}
            fullWidth={true}
            id="message"
            name="message"
            label="Message"
            variant="outlined"
            value={props.message}
            onChange={props.handleChange}
          />
        </Grid>
        <Grid item>
          <Button
            type="submit"
            variant="contained"
            // color="primary"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
