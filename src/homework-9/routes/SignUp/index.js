import React from 'react';
import {Button, Input, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import {withSignUpForm} from "../../hocs/withSignUpForm";
import {Link} from "react-router-dom";
import {Alert} from "@material-ui/lab";


export const SignUpRender = (
  {
    handleLogin,
    handlePassChange,
    handleEmailChange,
    email,
    password,
    error
  }
) => {
  return (
    <Grid justifyContent="center" container spacing={3}>
      <Grid item xs={6}>
        <br/>
        <Typography variant="h3" component="h3">
          Sign Up
        </Typography>
        <br/>
        <br/>
        <form onSubmit={handleLogin}>
          <Grid justifyContent="center" container spacing={3}>
            <Grid item xs={12}>
              <Input fullWidth onChange={handleEmailChange} value={email} placeholder={"Email"}/>
            </Grid>
            <Grid item xs={12}>
              <Input fullWidth onChange={handlePassChange} value={password} placeholder={"Password"}/>
            </Grid>
            <Grid item xs={12}>
              {error && <Alert severity="error">{error.toString()}</Alert>}
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth type={"button"} to="/login" component={Link}>
                Login
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth color="primary" variant="contained" type={"submit"}>
                Sign up
              </Button>
            </Grid>
          </Grid>

        </form>
      </Grid>
    </Grid>
  );
};


export const SignUp = withSignUpForm(SignUpRender)
