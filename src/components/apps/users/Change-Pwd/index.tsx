
import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from 'src/context/UserContext';
import {
  Alert,
  Button,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  Tooltip,
  Box,
  Stack,
  Divider,
  Grid2 as Grid,
  InputAdornment,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router';
//import { format, isValid } from 'date-fns';
//import { IconPlus, IconSquareRoundedPlus, IconTrash } from '@tabler/icons-react';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
//import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import axios from 'axios';
import ApiConfig  from "src/constants/apiConstants";
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import { VisibilityOff, Visibility } from '@mui/icons-material';
const apiUrl = ApiConfig.apiUrl;


const ChangePwdUser = () => {
  const { seq } = useParams();  
  const { resetPasswordUser, users } = useContext(UserContext);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [editedUser, setEditedUser]: any = useState(null);
  const [editing, setEditing] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const router = useNavigate();
    
  const [formData, setFormData] = useState({
      seq: 0,
      user_name: '',
      password: ''
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newFormData = { ...prevData, [name]: value };
      return {
        ...newFormData
      };
    });
  };

  //show hide password
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    console.log("seq : ",seq);
    if (users.length > 0) {
        if (seq) {
          const user = users.find((item) => item.seq === parseInt(seq));
          console.log("found: ",user); 
  
          if (user) {
              setSelectedUser(user);
              setFormData(user);
              setEditedUser({ ...user });
              setEditing(true);
          } else {
            // If specific item not found, fallback to default
            setSelectedUser(users[0]);
            setFormData(users[0]);
            setEditedUser({ ...users[0] });
            setEditing(true);
          }
        } else {
          // No specific item, default to the first users
          setSelectedUser(users[0]);
          setFormData(users[0]);
          setEditedUser({ ...users[0] });
          setEditing(true);
        }
      }
      
  }, [users]);

  
  const handleSave = async () => {
    try {
      const newPass = formData.password;
      console.log("newPass: ",newPass);  
      await resetPasswordUser(seq, newPass);
      //setSelectedUser({ ...editedUser });
      setEditing(false); // Exit editing mode
      setShowAlert(true);

      // Navigate to the list page
      router('/user/list');
    } catch (error) {
      console.error('Error change password:', error);
    }

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  
  
  //const parsedDate = isValid(new Date(formData.date)) ? new Date(formData.date) : new Date();
  //const formattedOrderDate = format(parsedDate, 'EEEE, MMMM dd, yyyy');

  return (<>
    <Box>
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="space-between"
          mb={3}
        >
          <Typography variant="h5"># {seq}</Typography>
          <Box display="flex" gap={1}>
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                router('/user/list');
              }}
            >
              Cancel
            </Button>
            <Button 
                variant="contained" 
                color="primary"
                onClick={handleSave}>
              Save
            </Button>
          </Box>
        </Stack>
        <Divider></Divider>
        <Grid container spacing={3} mb={4}>
          <Grid
            size={{
              xs: 12,
              sm: 12
            }}>
            <CustomFormLabel htmlFor="userName">User Name</CustomFormLabel>
            <CustomTextField
                fullWidth
                value={formData.user_name}
                InputProps={{
                    readOnly: true,
                }}
            />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 12
            }}>
            <CustomFormLabel
              htmlFor="userPass"
              sx={{
                mt: 0,
              }}
            >
              Reset Password
            </CustomFormLabel>
            <CustomTextField
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              value={formData.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        
        {showAlert && (
          <Alert severity="success" sx={{ position: 'fixed', top: 16, right: 16 }}>
            Users reset password successfully.
          </Alert>
        )}
      </Box>
  </>);
};

export default ChangePwdUser;
