
import React, { useState, useContext, useEffect } from 'react';
import { AgentContext } from 'src/context/AgentContext';
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
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { join } from 'path';
import { jwtDecode } from 'jwt-decode';

const CreatePartner = () => {
  //const [userLevel, setUserLevel] = React.useState('');
  //const [userSession, setUserSession] = React.useState('');
  const { addAgent, agents } = useContext(AgentContext);
  const [showAlert, setShowAlert] = useState(false);
  const router = useNavigate();
  const [formData, setFormData] = useState({
    seq: 0,
    agent_code: '',
    agent_id: '',
    id_type: '',
    name: '',
    address: '',
    kelurahan: '',
    kecamatan: '',
    city: '',
    province: '',
    office_phone: '',
    contact_person: '',
    contact_phone: '',
    email: '',
    commission_pct: 0,
    join_date: '',
    status: 'Active',
    note: '',
    account_manager: '',
    contract_no: '',
    payment_note: '',
    bank_name: '',
    bank_acc_no: '',
    bank_acc_name: '',
    cobrand_id: ''
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
    const token = localStorage.getItem('token');
    if (token) {
        const decodedToken:any = jwtDecode(token);
        console.log('session_name:', decodedToken.session_name);
        console.log('session_level:', decodedToken.session_level);
        setFormData((prevData: any) => ({
          ...prevData,
          cobrand_id: decodedToken.session_name
        }));

    }
    
    if (agents.length > 0) {
      const lastId = agents[agents.length - 1].seq;
      setFormData((prevData: any) => ({
        ...prevData,
        seq: lastId + 1,
        join_date: new Date().toISOString().slice(0, 10),
      }));
    } else {
      setFormData((prevData: any) => ({
        ...prevData,
        seq: 1,
        join_date: new Date().toISOString().slice(0, 10),
      }));
    }
    
  }, [agents]);

  
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
      console.log("formData: ", formData);
      await addAgent(formData);
      setFormData({
        seq: 0,
        agent_code: '',
        agent_id: '',
        id_type: '',
        name: '',
        address: '',
        kelurahan: '',
        kecamatan: '',
        city: '',
        province: '',
        office_phone: '',
        contact_person: '',
        contact_phone: '',
        email: '',
        commission_pct: 0,
        join_date: '',
        status: 'Active',
        note: '',
        account_manager: '',
        contract_no: '',
        payment_note: '',
        bank_name: '',
        bank_acc_no: '',
        bank_acc_name: '',
        cobrand_id: ''
      });
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      
      router('/agent/list');
      
    } catch (error) {
      console.error('Error adding agent:', error);
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
          <Typography variant="h5"># {formData.seq}</Typography>
          <Box display="flex" gap={1}>
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                router('/agent/list');
              }}
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Save Agent
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
            <CustomFormLabel htmlFor="cobrand_id">Agent Code</CustomFormLabel>
            <CustomTextField
              id="agent_code"
              name="agent_code"
              onChange={handleChange}
              value={formData.agent_code}
              fullWidth
            />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 6
            }}>
            <CustomFormLabel
              htmlFor="cobrand_name"
              sx={{
                mt: {
                  xs: 0,
                  sm: 3,
                },
              }}
            >
              Agent Identity 
            </CustomFormLabel>
            <CustomTextField
                id="agent_id"
                name="agent_id"
                value={formData.agent_id}
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
              htmlFor="pic"
              sx={{
                mt: {
                  xs: 0,
                  sm: 3,
                },
              }}
            >
              ID Type 
            </CustomFormLabel>
            <CustomSelect
                labelId="id_type"
                id="id_type"
                name="id_type"
                value={formData.id_type}
                onChange={handleChange}
                fullWidth
                >
                    <MenuItem value="KTP">KTP</MenuItem>
                    <MenuItem value="Passport">Passport</MenuItem>
                </CustomSelect>
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 6
            }}>
            <CustomFormLabel
              htmlFor="cobrand_name"
              sx={{
                mt: {
                  xs: 0,
                  sm: 3,
                },
              }}
            >
              Name
            </CustomFormLabel>
            <CustomTextField
                id="name"
                name="name"
                value={formData.name}
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
              htmlFor="cobrand_name"
              sx={{
                mt: {
                  xs: 0,
                  sm: 3,
                },
              }}
            >
              Address
            </CustomFormLabel>
            <CustomTextField
                id="address"
                name="address"
                value={formData.address}
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
              htmlFor="cobrand_name"
              sx={{
                mt: {
                  xs: 0,
                  sm: 3,
                },
              }}
            >
              Kelurahan
            </CustomFormLabel>
            <CustomTextField
                id="kelurahan"
                name="kelurahan"
                value={formData.kelurahan}
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
              htmlFor="cobrand_name"
              sx={{
                mt: {
                  xs: 0,
                  sm: 3,
                },
              }}
            >
              Kecamatan
            </CustomFormLabel>
            <CustomTextField
                id="kecamatan"
                name="kecamatan"
                value={formData.kecamatan}
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
              htmlFor="pic"
              sx={{
                mt: {
                  xs: 0,
                  sm: 3,
                },
              }}
            >
              City
            </CustomFormLabel>
            <CustomSelect
                labelId="city"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                fullWidth
                >
                    <MenuItem value="Jakarta Barat">Jakarta Barat</MenuItem>
                    <MenuItem value="Jakarta Pusat">Jakarta Pusat</MenuItem>
                    <MenuItem value="Jakarta Selatan">Jakarta Selatan</MenuItem>
                    <MenuItem value="Jakarta Timur">Jakarta Timur</MenuItem>
                    <MenuItem value="Jakarta Utara">Jakarta Utara</MenuItem>
                </CustomSelect>
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 6
            }}>
            <CustomFormLabel
              htmlFor="pic"
              sx={{
                mt: {
                  xs: 0,
                  sm: 3,
                },
              }}
            >
              Province
            </CustomFormLabel>
            <CustomSelect
                labelId="province"
                id="province"
                name="province"
                value={formData.province}
                onChange={handleChange}
                fullWidth
                >
                    <MenuItem value="DKI Jakarta">DKI Jakarta</MenuItem>
                    <MenuItem value="Banten">Banten</MenuItem>
                    <MenuItem value="Jawa Barat">Jawa Barat</MenuItem>
                    <MenuItem value="Jawa Tengah">Jakarta Tengah</MenuItem>
                    <MenuItem value="Jawa Timur">Jawa Timur</MenuItem>
                    <MenuItem value="Sumatera Barat">Sumatera Barat</MenuItem>
                </CustomSelect>
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 6
            }}>
            <CustomFormLabel
              htmlFor="cobrand_name"
              sx={{
                mt: {
                  xs: 0,
                  sm: 3,
                },
              }}
            >
              Office Phone
            </CustomFormLabel>
            <CustomTextField
                id="office_phone"
                name="office_phone"
                value={formData.office_phone}
                onChange={handleChange}
                type="phone"
                fullWidth
              />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 6
            }}>
            <CustomFormLabel
              htmlFor="cobrand_name"
              sx={{
                mt: {
                  xs: 0,
                  sm: 3,
                },
              }}
            >
              Contact Person
            </CustomFormLabel>
            <CustomTextField
                id="contact_person"
                name="contact_person"
                value={formData.contact_person}
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
              htmlFor="cobrand_name"
              sx={{
                mt: {
                  xs: 0,
                  sm: 3,
                },
              }}
            >
              Contact Phone
            </CustomFormLabel>
            <CustomTextField
                id="contact_phone"
                name="contact_phone"
                value={formData.contact_phone}
                onChange={handleChange}
                type="phone"
                fullWidth
              />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 6
            }}>
            <CustomFormLabel
              htmlFor="cobrand_name"
              sx={{
                mt: {
                  xs: 0,
                  sm: 3,
                },
              }}
            >
              Email
            </CustomFormLabel>
            <CustomTextField
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                fullWidth
              />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 6
            }}>
            <CustomFormLabel
              htmlFor="cobrand_name"
              sx={{
                mt: {
                  xs: 0,
                  sm: 3,
                },
              }}
            >
              Commission %
            </CustomFormLabel>
            <CustomTextField
                id="commission_pct"
                name="commission_pct"
                value={formData.commission_pct}
                onChange={handleChange}
                type="number"
                fullWidth
              />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 6
            }}>
            <CustomFormLabel
              htmlFor="cobrand_name"
              sx={{
                mt: {
                  xs: 0,
                  sm: 3,
                },
              }}
            >
              Bank ID
            </CustomFormLabel>
            <CustomSelect
                labelId="bank_name"
                id="bank_name"
                name="bank_name"
                value={formData.bank_name}
                onChange={handleChange}
                fullWidth
                >
                    <MenuItem value="BCA">BCA</MenuItem>
                    <MenuItem value="Bank Mandiri">Bank Mandiri</MenuItem>
                    <MenuItem value="BRI">BRI</MenuItem>
                    <MenuItem value="BNI">BNI</MenuItem>
                    <MenuItem value="Bank Danamon">Bank Danamon</MenuItem>
                    <MenuItem value="Bank CIMB Niaga">Bank CIMB Niaga</MenuItem>
                    <MenuItem value="Bank OCBC">Bank OCBC</MenuItem>
                    <MenuItem value="Bank Permata">Bank Permata</MenuItem>
                </CustomSelect>
          </Grid> 
          <Grid
            size={{
              xs: 12,
              sm: 6
            }}>
            <CustomFormLabel
              htmlFor="cobrand_name"
              sx={{
                mt: {
                  xs: 0,
                  sm: 3,
                },
              }}
            >
              Account No
            </CustomFormLabel>
            <CustomTextField
                id="bank_acc_no"
                name="bank_acc_no"
                value={formData.bank_acc_no}
                onChange={handleChange}
                type="number"
                fullWidth
              />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 6
            }}>
            <CustomFormLabel
              htmlFor="cobrand_name"
              sx={{
                mt: {
                  xs: 0,
                  sm: 3,
                },
              }}
            >
              Account Name
            </CustomFormLabel>
            <CustomTextField
                id="bank_acc_name"
                name="bank_acc_name"
                value={formData.bank_acc_name}
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
              htmlFor="cobrand_name"
              sx={{
                mt: {
                  xs: 0,
                  sm: 3,
                },
              }}
            >
              Payment
            </CustomFormLabel>
            <CustomSelect
                labelId="payment_note"
                id="payment_note"
                name="payment_note"
                value={formData.payment_note}
                onChange={handleChange}
                fullWidth
                >
                    <MenuItem value="Cash">Cash / Transfer</MenuItem>
                    <MenuItem value="Credit">Credit Term 7 days</MenuItem>
                </CustomSelect>
          </Grid> 
          <Grid
            size={{
              xs: 12,
              sm: 6
            }}>
            <CustomFormLabel
              htmlFor="cobrand_name"
              sx={{
                mt: {
                  xs: 0,
                  sm: 3,
                },
              }}
            >
              Contract Number 
            </CustomFormLabel>
            <CustomTextField
                id="contract_no"
                name="contract_no"
                value={formData.contract_no}
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
              htmlFor="cobrand_name"
              sx={{
                mt: {
                  xs: 0,
                  sm: 3,
                },
              }}
            >
              Special Note
            </CustomFormLabel>
            <CustomTextField
                id="note"
                name="note"
                value={formData.note}
                onChange={handleChange}
                fullWidth
              />
          </Grid>        
        </Grid>
        
        {showAlert && (
          <Alert severity="success" sx={{ position: 'fixed', top: 16, right: 16 }}>
            Agent added successfully.
          </Alert>
        )}
      </Box>
    </form>
  </>);
};

export default CreatePartner;
