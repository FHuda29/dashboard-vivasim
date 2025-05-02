
import React, { useState, useContext, useEffect } from 'react';
import { ProductContext } from 'src/context/ProductContext';
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
import { format, isValid } from 'date-fns';
//import { IconPlus, IconSquareRoundedPlus, IconTrash } from '@tabler/icons-react';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
//import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';

const CreateProduct = () => {
  const { addProduct, products } = useContext(ProductContext);
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
    status: 'Ready'
  });

  useEffect(() => {
    if (products.length > 0) {
      const lastId = products[products.length - 1].seq;
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
      //return {...newFormData};
      return newFormData;
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
        status: 'Ready'
      });
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      //router('/apps/invoice/list');
      router('/product/master');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const parsedDate = new Date();
  const formattedOrderDate = format(parsedDate, 'EEEE, MMMM dd, yyyy');

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
                //router('/apps/invoice/list');
                router('/product/master');
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
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Box>
            <CustomFormLabel htmlFor="status">Status</CustomFormLabel>
            <CustomSelect
              labelId="status"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <MenuItem value="Ready">Ready</MenuItem>
              <MenuItem value="Used">Used</MenuItem>
              <MenuItem value="Close">Close</MenuItem>
            </CustomSelect>
          </Box>
          <Box textAlign="right">
            <CustomFormLabel htmlFor="demo-simple-select">Create Date</CustomFormLabel>
            <Typography variant="body1"> {formattedOrderDate}</Typography>
          </Box>
        </Stack>
        <Divider></Divider>
        <Grid container spacing={3} mb={4}>
          <Grid
            size={{
              xs: 12,
              sm: 6
            }}>
            <CustomFormLabel htmlFor="ProductID">ProductID</CustomFormLabel>
            <CustomTextField
              id="package_id"
              name="package_id"
              value={formData.package_id}
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
              htmlFor="ProductName"
              sx={{
                mt: {
                  xs: 0,
                  sm: 3,
                },
              }}
            >
              Product Name
            </CustomFormLabel>
            <CustomTextField
              id="package_name"
              name="package_name"
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
              id="country"
              name="country"
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
              id="days"
              name="days"
              value={formData.days}
              onChange={handleChange}
              fullWidth
              inputProps={{ type: 'number' }}
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
              id="quota"
              name="quota"
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
              id="selling_price"
              name="selling_price"
              value={formData.selling_price}
              onChange={handleChange}
              fullWidth
              inputProps={{ type: 'number' }}
            />
          </Grid>
        </Grid>
        
        {showAlert && (
          <Alert severity="success" sx={{ position: 'fixed', top: 16, right: 16 }}>
            Product added successfully.
          </Alert>
        )}
      </Box>
    </form>
  </>);
};

export default CreateProduct;
