
import React, { useState, useContext, useEffect } from 'react';
import { ProductPartnerContext } from 'src/context/ProductPartnerContext';
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
import { useNavigate, useParams } from 'react-router';
//import { format, isValid } from 'date-fns';
//import { IconPlus, IconSquareRoundedPlus, IconTrash } from '@tabler/icons-react';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
//import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

const CreateProductPartner = () => {
  const { seq } = useParams(); 
  

  const { addProduct, products } = useContext(ProductPartnerContext);
  const [showAlert, setShowAlert] = useState(false);
  const router = useNavigate();
  const [formData, setFormData] = useState({
    seq: 0,
    package_id: '',
    package_name: '',
    country: '',
    days: 0,
    quota: '',
    selling_price: 0,
    status: '',
    cobrand_id: ''
  });

  useEffect(() => {
    console.log("seq : ",seq);
    if (products.length > 0) {
      const lastId = products[products.length - 1].seq;
      //console.log("lastId : ",lastId);
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
  }, [products]);

  
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
      await addProduct(formData);
      setFormData({
        seq: 0,
        package_id: '',
        package_name: '',
        country: '',
        days: 0,
        quota: '',
        selling_price: 0,
        status: '',
        cobrand_id: ''
      });
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      //router('/apps/invoice/list');
      router('/product/partner');
    } catch (error) {
      console.error('Error adding product:', error);
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
          <Typography variant="h5">SEQ# {seq}</Typography>
          <Box display="flex" gap={1}>
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                //router('/apps/invoice/list');
                router('/product/partner');
              }}
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Save Record
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
            <CustomFormLabel htmlFor="ProductID">Partner ID</CustomFormLabel>
            <CustomTextField
              id="PartnerID"
              name="PartnerID"
              onChange={handleChange}
              value={formData.cobrand_id}
              fullWidth
            />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 6
            }}>
            <CustomFormLabel htmlFor="PackageID">Package ID</CustomFormLabel>
            <CustomTextField
              id="PackageID"
              name="PackageID"
              onChange={handleChange}
              value={formData.package_id}
              fullWidth
            />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 6
            }}>
            <CustomFormLabel
              htmlFor="PackageName"
              sx={{
                mt: {
                  xs: 0,
                  sm: 3,
                },
              }}
            >
              Package Name
            </CustomFormLabel>
            <CustomTextField
              id="PackageName"
              name="PackageName"
              value={formData.package_name}
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
              htmlFor="Country"
              sx={{
                mt: 0,
              }}
            >
              Country
            </CustomFormLabel>
            <CustomTextField
              name="Country"
              value={formData.country}
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
              htmlFor="Days"
              sx={{
                mt: 0,
              }}
            >
              Days
            </CustomFormLabel>
            <CustomTextField
              name="Days"
              value={formData.days}
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
              htmlFor="Quota"
              sx={{
                mt: 0,
              }}
            >
              Quota
            </CustomFormLabel>
            <CustomTextField
              name="Quota"
              value={formData.quota}
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
              htmlFor="SellingPrice"
              sx={{
                mt: 0,
              }}
            >
              Selling Price
            </CustomFormLabel>
            <CustomTextField
              name="SellingPrice"
              value={formData.selling_price}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>
        
        {showAlert && (
          <Alert severity="success" sx={{ position: 'fixed', top: 16, right: 16 }}>
            Product edited successfully.
          </Alert>
        )}
      </Box>
    </form>
  </>);
};

export default CreateProductPartner;
