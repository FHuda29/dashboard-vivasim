
import React, { useState, useContext, useEffect } from 'react';
import { PartnerContext } from 'src/context/PartnerContext';
import {
  Alert,
  Button,
  Typography,
  Box,
  Stack,
  Divider,
  Grid2 as Grid,
  InputAdornment,
} from '@mui/material';
import { useNavigate } from 'react-router';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';


const CreatePartner = () => {
  const { addPartner, partners } = useContext(PartnerContext);
  const [showAlert, setShowAlert] = useState(false);
  const router = useNavigate();
  const [formData, setFormData] = useState({
    seq: 0,
    master_id: '',
    cobrand_id: '',
    cobrand_name: '',
    pic: '',
    deposit: 0,
    ar: 0,
    payment_type: 'Pascabayar'
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
    //list partner
    //fetchPartnerList();

    //list levels
    //fetchLevelList();

    if (partners.length > 0) {
      const lastId = partners[partners.length - 1].seq;
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
    
  }, [partners]);

  
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
    const mode = localStorage.getItem('mode');
    e.preventDefault();
    try {
      await addPartner(formData);
      setFormData({
        seq: 0,
        master_id: '',
        cobrand_id: '',
        cobrand_name: '',
        pic: '',
        deposit: 0,
        ar: 0,
        payment_type: 'Pascabayar'
      });
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      
      if(mode === 'move_simcard'){
        localStorage.removeItem('mode');
        router('/inventory/movesim');
      }else{
        router('/partner/list');
      }
      //router('/partner/list');
    } catch (error) {
      console.error('Error adding partner:', error);
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
                router('/partner/list');
              }}
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Save Partner
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
            <CustomFormLabel htmlFor="cobrand_id">Partner ID</CustomFormLabel>
            <CustomTextField
              id="cobrand_id"
              name="cobrand_id"
              onChange={handleChange}
              value={formData.cobrand_id}
              fullWidth
            />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 12
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
              Partner Name
            </CustomFormLabel>
            <CustomTextField
                id="cobrand_name"
                name="cobrand_name"
                value={formData.cobrand_name}
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
              htmlFor="pic"
              sx={{
                mt: {
                  xs: 0,
                  sm: 3,
                },
              }}
            >
              Person In Charge
            </CustomFormLabel>
            <CustomTextField
                id="pic"
                name="pic"
                value={formData.pic}
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

export default CreatePartner;
