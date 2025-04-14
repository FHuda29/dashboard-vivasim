
import React, { useState, useContext, useEffect } from 'react';
//import { InvoiceContext } from 'src/context/InvoiceContext';
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
//import { format, isValid } from 'date-fns';
//import { IconPlus, IconSquareRoundedPlus, IconTrash } from '@tabler/icons-react';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
//import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

const CreateProduct = () => {
  const { addProduct, products } = useContext(ProductContext);
  const [showAlert, setShowAlert] = useState(false);
  const router = useNavigate();
  const [formData, setFormData] = useState({
    Seq: 0,
    ProductID: '',
    ProductName: '',
    Country: '',
    Days: 0,
    Quota: 0,
    SellingPrice: 0,
    Status: 1
  });

  useEffect(() => {
    if (products.length > 0) {
      const lastId = products[products.length - 1].Seq;
      setFormData((prevData: any) => ({
        ...prevData,
        Seq: lastId + 1,
      }));
    } else {
      setFormData((prevData: any) => ({
        ...prevData,
        Seq: 1,
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
        Seq: 0,
        ProductID: '',
        ProductName: '',
        Country: '',
        Days: 0,
        Quota: 0,
        SellingPrice: 0,
        Status: 1
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
          <Typography variant="h5"># {formData.Seq}</Typography>
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
              Save Product
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
            <CustomFormLabel htmlFor="ProductID">ProductID</CustomFormLabel>
            <CustomTextField
              id="ProductID"
              name="ProductID"
              onChange={handleChange}
              value={formData.ProductID}
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
              id="ProductName"
              name="ProductName"
              value={formData.ProductName}
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
              value={formData.Country}
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
              value={formData.Days}
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
              value={formData.Quota}
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
              value={formData.SellingPrice}
              onChange={handleChange}
              fullWidth
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
