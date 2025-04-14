
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
} from '@mui/material';
import { useNavigate } from 'react-router';
//import { format, isValid } from 'date-fns';
//import { IconPlus, IconSquareRoundedPlus, IconTrash } from '@tabler/icons-react';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
//import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

const CreateUser = () => {
  const { addUser, users } = useContext(UserContext);
  const [showAlert, setShowAlert] = useState(false);
  const router = useNavigate();
  const [formData, setFormData] = useState({
    userSeq: 0,
    userName: '',
    userID: '',
    userPass: '',
    userLevel: '',
    userBlocked: '',
    userFailed: 0
  });

  useEffect(() => {
    if (users.length > 0) {
      const lastId = users[users.length - 1].userSeq;
      setFormData((prevData: any) => ({
        ...prevData,
        userSeq: lastId + 1,
      }));
    } else {
      setFormData((prevData: any) => ({
        ...prevData,
        userSeq: 1,
      }));
    }
  }, [users]);

  
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newFormData = { ...prevData, [name]: value };
      //const totals = calculateTotals(newFormData.orders);
      return {
        ...newFormData
      };
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addUser(formData);
      setFormData({
        userSeq: 0,
        userName: '',
        userID: '',
        userPass: '',
        userLevel: '',
        userBlocked: '',
        userFailed: 0
      });
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      
      router('/user/list');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  //const parsedDate = isValid(new Date(formData.date)) ? new Date(formData.date) : new Date();
  //const formattedOrderDate = format(parsedDate, 'EEEE, MMMM dd, yyyy');

  return (<>
    <form onSubmit={handleSubmit}>
      <Box>
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="space-between"
          mb={3}
        >
          <Typography variant="h5"># {formData.userSeq}</Typography>
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
            <Button type="submit" variant="contained" color="primary">
              Save User
            </Button>
          </Box>
        </Stack>
        <Divider></Divider>
        {/*
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Box>
            <CustomFormLabel htmlFor="demo-simple-select">Order Status</CustomFormLabel>

            <CustomSelect
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.status}
              onChange={handleChange}
              disabled
            >
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Shipped">Shipped</MenuItem>
              <MenuItem value="Delivered">Delivered</MenuItem>
            </CustomSelect>
          </Box>
          <Box textAlign="right">
            <CustomFormLabel htmlFor="demo-simple-select">Order Date</CustomFormLabel>
            <Typography variant="body1"> {formattedOrderDate}</Typography>
          </Box>
        </Stack>
        <Divider></Divider>
        */}    
        <Grid container spacing={3} mb={4}>
          <Grid
            size={{
              xs: 12,
              sm: 6
            }}>
            <CustomFormLabel htmlFor="userName">User Name</CustomFormLabel>
            <CustomTextField
              id="userName"
              name="userName"
              onChange={handleChange}
              value={formData.userName}
              fullWidth
            />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 6
            }}>
            <CustomFormLabel
              htmlFor="userID"
              sx={{
                mt: {
                  xs: 0,
                  sm: 3,
                },
              }}
            >
              Partner/Agent ID
            </CustomFormLabel>
            <CustomTextField
              id="userID"
              name="userID"
              value={formData.userID}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 6
            }}>
            <CustomFormLabel
              htmlFor="userPass"
              sx={{
                mt: 0,
              }}
            >
              User Password
            </CustomFormLabel>
            <CustomTextField
              name="userPass"
              type="password"
              value={formData.userPass}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 6
            }}>
            <CustomFormLabel
              htmlFor="userLevel"
              sx={{
                mt: 0,
              }}
            >
              User Level
            </CustomFormLabel>
            <CustomTextField
              name="userLevel"
              value={formData.userLevel}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 6
            }}>
            <CustomFormLabel
              htmlFor="userBlocked"
              sx={{
                mt: 0,
              }}
            >
              User Blocked
            </CustomFormLabel>
            <CustomTextField
              name="userBlocked"
              value={formData.userBlocked}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 6
            }}>
            <CustomFormLabel
              htmlFor="userFailed"
              sx={{
                mt: 0,
              }}
            >
              User Failed
            </CustomFormLabel>
            <CustomTextField
              name="userFailed"
              value={formData.userFailed}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>
        
        {showAlert && (
          <Alert severity="success" sx={{ position: 'fixed', top: 16, right: 16 }}>
            Users added successfully.
          </Alert>
        )}
      </Box>
    </form>
  </>);
};

export default CreateUser;
