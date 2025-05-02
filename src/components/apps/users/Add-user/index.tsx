
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
import { useNavigate } from 'react-router';
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

const CreateUser = () => {
  const [partners, setPartners] = React.useState([]);
  const [agents, setAgents] = React.useState([]);

  const [levels, setLevels] = React.useState([]);
  const [userLevel, setUserLevel] = React.useState('');
  const [userSession, setUserSession] = React.useState('');

  const { addUser, users } = useContext(UserContext);
  const [showAlert, setShowAlert] = useState(false);
  const router = useNavigate();
  const [formData, setFormData] = useState({
    seq: 0,
    user_name: '',
    session_name: '',
    password: '',
    session_level: 'partner',
    blocked: 'N',
    failed: 0
  });

  //show hide password
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    
    const data_success_login = localStorage.getItem('data_success_login');
    if (data_success_login) {
        const parsedData = JSON.parse(data_success_login);
        //console.log('user_name:', parsedData.user_name);
        console.log('session_name:', parsedData.session_name);
        console.log('session_level:', parsedData.session_level);
        //console.log('last_login_time:', parsedData.last_login_time);
        //console.log('blocked:', parsedData.blocked);

        setUserLevel(parsedData.session_level);
        setUserSession(parsedData.session_name);
        setFormData((prevData: any) => ({
          ...prevData,
          session_name: parsedData.session_name
        }));

        if(parsedData.session_level.toLowerCase() === 'partner'){
          fetchAgentListCobrand(parsedData.session_name);
          fetchLevelByCode('AGENT');
        }else{
          //list partner
          fetchPartnerList();
          //list levels
          fetchLevelList();
        }
    }
    
    

    if (users.length > 0) {
      const lastId = users[users.length - 1].seq;
      setFormData((prevData: any) => ({
        ...prevData,
        seq: lastId + 1,
      }));
    } else {
      setFormData((prevData: any) => ({
        ...prevData,
        seq: 1,
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
        seq: 0,
        user_name: '',
        session_name: '',
        password: '',
        session_level: 'PARTNER',
        blocked: 'N',
        failed: 0
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

  
  const fetchPartnerList = async () => {
      let end_point = apiUrl + "partners";
      axios
          .get(end_point)
          .then((response) => {
              //console.log(response);
              setPartners(response.data);
          })
          .catch((error) => {
              console.log(error);
          });
  }

  const fetchAgentListCobrand = async (cobrand_id:string) => {
    let end_point = apiUrl + "agents/cobrand/"+cobrand_id;
    axios
        .get(end_point)
        .then((response) => {
          setAgents(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
  }

  const fetchLevelList = async () => {
    let end_point = apiUrl + "levels";
    axios
        .get(end_point)
        .then((response) => {
            //console.log(response);
            setLevels(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
  }

  const fetchLevelByCode = async (level_code:string) => {
    let end_point = apiUrl + "levels/code/"+level_code;
    axios
        .get(end_point)
        .then((response) => {
            //console.log(response);
            setLevels(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
  }

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
          <Typography variant="h5"># {formData.seq}</Typography>
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
              sm: 12
            }}>
            <CustomFormLabel htmlFor="userName">User Name</CustomFormLabel>
            <CustomTextField
              id="user_name"
              name="user_name"
              onChange={handleChange}
              value={formData.user_name}
              fullWidth
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
              User Password
            </CustomFormLabel>
            <CustomTextField
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              fullWidth
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
          {userLevel.toLowerCase() === 'partner' ? (
            <Grid
            size={{
              xs: 12,
              sm: 12
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
                Agent ID
              </CustomFormLabel>
              <CustomSelect
                id="session_name"
                name="session_name"
                value={formData.session_name}
                onChange={handleChange}
                fullWidth
              >
                {agents.map((agent: any) => (
                  <MenuItem key={agent.seq} value={agent.agent_code}>
                    {agent.agent_code}
                  </MenuItem>
                ))}
            </CustomSelect>
          </Grid>
          ):(
            <Grid
              size={{
                xs: 12,
                sm: 12
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
                  Partner
                </CustomFormLabel>
                <CustomSelect
                  id="session_name"
                  name="session_name"
                  value={formData.session_name}
                  onChange={handleChange}
                  fullWidth
                >
                  {partners.map((partner: any) => (
                    <MenuItem key={partner.seq} value={partner.cobrand_id}>
                      {partner.cobrand_id}
                    </MenuItem>
                  ))}
              </CustomSelect>
            </Grid>
          )
          }
          <Grid
            size={{
              xs: 12,
              sm: 12
            }}>
            <CustomFormLabel
              htmlFor="userLevel"
              sx={{
                mt: 0,
              }}
            >
              User Level
            </CustomFormLabel>
            {/*
            <CustomTextField
              id="session_level"
              name="session_level"
              value={formData.session_level}
              onChange={handleChange}
              fullWidth
            />
            */}
            <CustomSelect
              id="session_level"
              name="session_level"
              value={formData.session_level}
              onChange={handleChange}
              fullWidth
            >
              {levels.map((level: any) => (
                <MenuItem key={level.seq} value={level.level_id}>
                  {level.level_name}
                </MenuItem>
              ))}
            </CustomSelect>
          </Grid>
          {/*
          <Grid
            size={{
              xs: 12,
              sm: 12
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
              id="blocked"
              name="blocked"
              value={formData.blocked}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 12
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
              id="failed"
              name="failed"
              value={formData.failed}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          */}
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
