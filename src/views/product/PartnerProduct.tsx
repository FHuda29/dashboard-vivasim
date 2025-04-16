// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as React from 'react';

import { useTheme } from '@mui/material/styles';
import {
  Typography,
  TableHead,
  Avatar,
  Chip,
  Box,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  TableFooter,
  IconButton,
  TableContainer,
  Stack,
  TextField,
  InputAdornment,
  Button,
  Tooltip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material';

import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import ParentCard from 'src/components/shared/ParentCard';
import BlankCard from '../../components/shared/BlankCard';
import { Link, useNavigate } from 'react-router';

import { numberFormat, PartnerProductList, formatDate } from "src/utils/Utils";
//api
import ApiConfig  from "src/constants/apiConstants";
import { useEffect } from 'react';
import axios from 'axios';
import { IconEdit, IconEye, IconHistory, IconSearch, IconTrash } from '@tabler/icons-react';

const apiUrl = ApiConfig.apiUrl;

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event: any) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: any) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: any) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: any) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}


const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Partner',
  },
];

const PartnerProduct = () => {
    const navigate = useNavigate();
    useEffect(() => {
        //load product
        fetchProductMaster();

    }, []);

  //get all product
  const fetchProductMaster = async () => {
    let end_point = apiUrl + "product/partner";
    axios
        .get(end_point)
        .then((response) => {
            //console.log(response);
            setProductPartner(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
  }

  const [searchTerm, setSearchTerm] = React.useState("");
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [seqID, setSeqID] = React.useState(0);


  //row product
  const [productPartner, setProductPartner] = React.useState([]);
  const rows: PartnerProductList[] = productPartner;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //search
  const handleSearchFilter = (event: any) => {
    setSearchTerm(event.target.value);
    
    const strtValue = event.target.value;
    if(strtValue.length !== 0){
        let end_point = apiUrl + "product/partner/search?param="+strtValue;
        axios
            .get(end_point)
            .then((response) => {
                setProductPartner(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }else{
        fetchProductMaster();
    }
  }

  //edit
  /*
  const handleEdit = (seq: any) => {
      console.log("seq: ",seq);
      navigate(`/product/partner/edit/${seq}`);
  }
  */
 
  // Handle opening delete confirmation dialog
  const handleDelete = (seq: any) => {
    setSeqID(seq);
    setOpenDeleteDialog(true);
  };

  // Handle closing delete confirmation dialog
  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };
  
  // Handle confirming deletion of selected products
  const handleConfirmDelete = async () => {
    try {
        await axios.delete(apiUrl + 'product/partner/delete/'+seqID);
        setOpenDeleteDialog(false);
        fetchProductMaster();
    } catch (error) {
        console.error('Error deleting products:', error);
    }
  };

  return (
    <PageContainer title="Products" description="this is partner products page">
      {/* breadcrumb */}
      <Breadcrumb title="Products" items={BCrumb} />
      {/* end breadcrumb */}
      <ParentCard title="Partner Product List">
        <BlankCard>
            <Box>
                <Stack
                    mt={3}
                    justifyContent="space-between"
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                    <TextField
                        id="search"
                        type="text"
                        size="small"
                        variant="outlined"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearchFilter}
                        InputProps={{
                            endAdornment: (
                            <InputAdornment position="end">
                                <IconSearch size={"16"} />
                            </InputAdornment>
                            ),
                        }}
                    />
                    {/*
                    <Box display="flex" gap={1}>
                    {selectAll && (
                        <Button
                        variant="outlined"
                        color="error"
                        onClick={handleDelete}
                        startIcon={<IconTrash width={18} />}
                        >
                        Delete All
                        </Button>
                    )}
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/apps/product/create"
                    >
                        New Product
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        component={Link}
                        to="/apps/product/create"
                    >
                        Import Product
                    </Button>
                    </Box>
                    */}
                </Stack>
            </Box>
          <TableContainer>
            <Table
              aria-label="custom pagination table"
              sx={{
                whiteSpace: 'nowrap',
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="subtitle2">Action</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Partner</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Product ID</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Product Name</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Country</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Days</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Quota</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Selling Price</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Status</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : rows
                ).map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                        <Tooltip title="Edit">
                            <IconButton 
                                color="success" 
                                component={Link}
                                to={`/product/partner/edit/${row.seq}`}>
                                <IconEdit width={22} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <IconButton 
                                color="error"
                                onClick={() => handleDelete(row.seq)}
                                >
                                <IconTrash width={22} />
                            </IconButton>
                        </Tooltip>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">{row.cobrand_id}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">{row.package_id}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                        {row.package_name}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography variant="caption">
                        {row.country}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                        {numberFormat(row.days)}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                        {numberFormat(row.quota)}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                        IDR {numberFormat(row.selling_price)}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        color={
                          row.status === 'Ready'
                            ? 'success'
                            : row.status === 'Used'
                              ? 'warning'
                              : row.status === 'Close'
                                ? 'error'
                                : 'secondary'
                        }
                        sx={{
                          borderRadius: '6px',
                        }}
                        size="small"
                        label={row.status}
                      />
                    </TableCell>
                  </TableRow>
                ))}

                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={9} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={9}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </BlankCard>
      </ParentCard>
      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Confirm Delete</DialogTitle>
            <DialogContent>
                Are you sure you want to delete selected product SEQ ? {seqID}
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleCloseDeleteDialog}>
                  Cancel
                </Button>
                <Button
                  color="error"
                  variant="outlined"
                  onClick={handleConfirmDelete}
                >
                  Delete
                </Button>
            </DialogActions>
        </Dialog>
    </PageContainer>
  );
};

export default PartnerProduct;