// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Divider,
} from '@mui/material';
import { Link, useNavigate } from 'react-router';

import { loginType } from 'src/types/auth/auth';
import CustomCheckbox from '../../../components/forms/theme-elements/CustomCheckbox';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';

import AuthSocialButtons from './AuthSocialButtons';
//import { useNavigate } from "react-router-dom";

//api
import ApiConfig  from "src/constants/apiConstants";
import { useEffect } from 'react';
//import axios from 'axios';
//const apiUrl = ApiConfig.apiUrl;

import axios from 'src/api/axios';

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
  const navigate = useNavigate();
  const [txtEmail, setTxtEmail] = React.useState("");

  const handleTxtEmail = (event: any) => {
    setTxtEmail(event.target.value as string);
  };

  const [txtPassword, setTxtPassword] = React.useState("");
  const handleTxtPassword = (event: any) => {
    setTxtPassword(event.target.value as string);
  };

  const handleLogin = () => {
    console.log("Login: ",txtEmail,txtPassword); 
    axios.post("users/login", {
        username: txtEmail,
        password: txtPassword,
      })
      .then((res) => {
        console.log(res.data);
        const response = res.data;
        console.log("login: ",response);

        if(response.success === false) {
          alert(response.message);
        }else{
          const resData = response.users;
          console.log("Login Response: ", resData);
          //localStorage.setItem(ACCESS_TOKEN_NAME, response.access_token);
          //<Navigate to="/dashboards/modern" />
          //localStorage.setItem("data_success_login", JSON.stringify(resData));
          localStorage.setItem('token', res.data.token);
          //window.location.href = "/dashboards/modern";
          navigate("/dashboard");
        }
      })
      .catch((error) =>
        console.error(
          `There was an error login the ${txtEmail} contact: ${error}`
        )
      );
  }
  return (
  <>
    {title ? (
      <Typography fontWeight="700" variant="h3" mb={1}>
        {title}
      </Typography>
    ) : null}

    {subtext}
    {/*
    <AuthSocialButtons title="Sign in with" />
    <Box mt={3}>
      <Divider>
        <Typography
          component="span"
          color="textSecondary"
          variant="h6"
          fontWeight="400"
          position="relative"
          px={2}
        >
          or sign in with
        </Typography>
      </Divider>
    </Box>
    */}  
    <Stack>
      <Box>
        <CustomFormLabel htmlFor="username">Username</CustomFormLabel>
        <CustomTextField 
          id="username" 
          variant="outlined" 
          fullWidth
          value={txtEmail}
          onChange={handleTxtEmail}
           />
      </Box>
      <Box>
        <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
        <CustomTextField 
          id="password"
          type="password"
          variant="outlined"
          fullWidth
          value={txtPassword}
          onChange={handleTxtPassword}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleLogin();
            }
          }}
           />
      </Box>
      <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
        <FormGroup>
          <FormControlLabel
            control={<CustomCheckbox defaultChecked />}
            label="Remeber this Device"
          />
        </FormGroup>
        <Typography
          component={Link}
          to="/auth/forgot-password"
          fontWeight="500"
          sx={{
            textDecoration: 'none',
            color: 'primary.main',
          }}
        >
          Forgot Password ?
        </Typography>
      </Stack>
    </Stack>
    <Box>
      <Button
        color="primary"
        variant="contained"
        size="large"
        fullWidth
        onClick={handleLogin}
      >
        Sign In
      </Button>
    </Box>
    {subtitle}
  </>
  );
};

export default AuthLogin;
