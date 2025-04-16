
import { useContext, useState, useEffect } from 'react';
import { ProductPartnerContext } from 'src/context/ProductPartnerContext/index';
import { useLocation, useNavigate, useParams } from 'react-router';
import {
  Button,
  MenuItem,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Alert,
  IconButton,
  Tooltip,
  Box,
  Stack,
  Divider,
  Grid2 as Grid,
} from '@mui/material';
import { format, isValid } from 'date-fns';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import { IconSquareRoundedPlus, IconTrash } from '@tabler/icons-react';

const EditProductPartner = () => {
  const { seq } = useParams();   
  const { products, updateProduct } = useContext(ProductPartnerContext);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [editing, setEditing] = useState(false);
  const [editedProduct, setEditedProduct]: any = useState(null);

  const title = useLocation();
  const getTitle = title.pathname.split('/').pop();

  useEffect(() => {
    console.log("seq : ",seq);
    if (products.length > 0) {
      // If there's a specific item to edit, use it
      //if (getTitle) {
     if (seq) {
        //const product = products.find((inv: { seq: string }) => inv.seq === getTitle);
        const product = products.find((item) => item.seq === parseInt(seq));
        console.log("found: ",product); // { id: 2, name: "Banana" }

        if (product) {
            setSelectedProduct(product);
            setEditedProduct({ ...product });
            setEditing(true);
        } else {
          // If specific item not found, fallback to default
          setSelectedProduct(products[0]);
          setEditedProduct({ ...products[0] });
          setEditing(true);
        }
      } else {
        // No specific item, default to the first invoice
        setSelectedProduct(products[0]);
        setEditedProduct({ ...products[0] });
        setEditing(true);
      }
    }
  }, [getTitle, products]);

  const router = useNavigate();

  const handleSave = async () => {
    try {
      await updateProduct(editedProduct);
      setSelectedProduct({ ...editedProduct });
      setEditing(false); // Exit editing mode
      setShowAlert(true);

      // Navigate to the list page
      router('/product/partner');
    } catch (error) {
      console.error('Error updating product partner:', error);
    }

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleCancel = () => {
    //setEditing(false);
    router('/product/partner');
  };


  
  if (!selectedProduct) {
    return <div>Please select an invoice.</div>;
  }

  //const orderDate = selectedProduct.orderDate;
  //const parsedDate = isValid(new Date(orderDate)) ? new Date(orderDate) : new Date();
  //const formattedOrderDate = format(parsedDate, 'EEEE, MMMM dd, yyyy');

  return (
    (<Box>
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h5"># {editedProduct.seq}</Typography>
        <Box display="flex" gap={1}>
          {editing ? (
            <>
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save
              </Button>
              <Button variant="outlined" color="error" onClick={handleCancel}>
                Cancel
              </Button>
            </>
          ) : (
            <Button variant="contained" color="info" onClick={() => setEditing(true)}>
              Edit Product
            </Button>
          )}
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
            value={editedInvoice.status}
            onChange={(e: any) => setEditedInvoice({ ...editedInvoice, status: e.target.value })}
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Delivered">Delivered</MenuItem>
            <MenuItem value="Shipped">Shipped</MenuItem>
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
          <CustomFormLabel>Partner ID</CustomFormLabel>
          <CustomTextField
            value={editedProduct.cobrand_id}
            onChange={(e: any) => setEditedProduct({ ...editedProduct, cobrand_id: e.target.value })}
            fullWidth
            InputProps={{
                readOnly: true,
              }}
          />
        </Grid>
        <Grid
          size={{
            xs: 12,
            sm: 6
          }}>
          <CustomFormLabel
            sx={{
              mt: {
                xs: 0,
                sm: 3,
              },
            }}
          >
            Package ID
          </CustomFormLabel>
          <CustomTextField
            value={editedProduct.package_id}
            onChange={(e: any) => setEditedProduct({ ...editedProduct, package_id: e.target.value })}
            fullWidth
            InputProps={{
                readOnly: true,
              }}
          />
        </Grid>
        <Grid
          size={{
            xs: 12,
            sm: 6
          }}>
          <CustomFormLabel
            sx={{
              mt: 0,
            }}
          >
            Package Name
          </CustomFormLabel>
          <CustomTextField
            value={editedProduct.package_name}
            onChange={(e: any) =>
                setEditedProduct({
                ...editedProduct,
                package_name: e.target.value,
              })
            }
            InputProps={{
                readOnly: true,
              }}
            fullWidth
          />
        </Grid>
        <Grid
          size={{
            xs: 12,
            sm: 6
          }}>
          <CustomFormLabel
            sx={{
              mt: 0,
            }}
          >
            Country
          </CustomFormLabel>
          <CustomTextField
            value={editedProduct.country}
            onChange={(e: any) =>
                setEditedProduct({
                ...editedProduct,
                country: e.target.value,
              })
            }
            InputProps={{
                readOnly: true,
              }}
            fullWidth
          />
        </Grid>
        <Grid
          size={{
            xs: 12,
            sm: 6
          }}>
          <CustomFormLabel
            sx={{
              mt: 0,
            }}
          >
            Days
          </CustomFormLabel>
          <CustomTextField
            type="number"
            value={editedProduct.days}
            onChange={(e: any) =>
                setEditedProduct({
                ...editedProduct,
                days: e.target.value,
              })
            }
            InputProps={{
                readOnly: true,
              }}
            fullWidth
          />
        </Grid>
        <Grid
          size={{
            xs: 12,
            sm: 6
          }}>
          <CustomFormLabel
            sx={{
              mt: 0,
            }}
          >
            Quota
          </CustomFormLabel>
          <CustomTextField
            type="number"
            value={editedProduct.quota}
            onChange={(e: any) =>
                setEditedProduct({
                ...editedProduct,
                quota: e.target.value,
              })
            }
            InputProps={{
                readOnly: true,
              }}
            fullWidth
          />
        </Grid>
        <Grid
          size={{
            xs: 12,
            sm: 6
          }}>
          <CustomFormLabel
            sx={{
              mt: 0,
            }}
          >
            Selling Price (*)
          </CustomFormLabel>
          <CustomTextField
            type="number"
            value={editedProduct.selling_price}
            onChange={(e: any) =>
                setEditedProduct({
                ...editedProduct,
                selling_price: e.target.value,
              })
            }
            fullWidth
          />
        </Grid>
        <Grid
          size={{
            xs: 12,
            sm: 6
          }}>
          <CustomFormLabel
            sx={{
              mt: 0,
            }}
          >
            Status
          </CustomFormLabel>
          <CustomTextField
            value={editedProduct.status}
            onChange={(e: any) =>
                setEditedProduct({
                ...editedProduct,
                status: e.target.value,
              })
            }
            InputProps={{
                readOnly: true,
              }}
            fullWidth
          />
        </Grid>
      </Grid>
      {showAlert && (
        <Alert severity="success" sx={{ position: 'fixed', top: 16, right: 16 }}>
          Product partner data updated successfully.
        </Alert>
      )}
    </Box>)
  );
};

export default EditProductPartner;
