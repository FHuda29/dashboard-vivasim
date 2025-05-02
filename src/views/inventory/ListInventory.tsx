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
  MenuItem
} from '@mui/material';

import Grid from '@mui/material/Grid2';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import ParentCard from 'src/components/shared/ParentCard';
import BlankCard from '../../components/shared/BlankCard';
import { Link } from 'react-router';

import { numberFormat, InventoryList, formatDate } from "src/utils/Utils";
//api
import ApiConfig  from "src/constants/apiConstants";
import { useEffect } from 'react';
import axios from 'axios';
import { IconSearch, IconTrash } from '@tabler/icons-react';
import { useNavigate } from 'react-router';

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
    title: 'Inventory',
  },
];

const Inventory = () => {
  const router = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectAll, setSelectAll] = React.useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);

    useEffect(() => {
        const data_success_login = localStorage.getItem('data_success_login');
        if (data_success_login) {
          const parsedData = JSON.parse(data_success_login);
          console.log('user_name:', parsedData.user_name);
          console.log('session_name:', parsedData.session_name);
          console.log('session_level:', parsedData.session_level);
          console.log('last_login_time:', parsedData.last_login_time);
          console.log('blocked:', parsedData.blocked);

          if(parsedData.session_level.toLowerCase() === 'partner'){
            const user_login = parsedData.session_name.split('-')[0];
            fetchInventoryByUser(user_login);
            //fetchInventoryByUser((parsedData.session_name));
          }else if(parsedData.session_level.toLowerCase() === 'agent-manager'){
            fetchInventoryByAgent((parsedData.session_name));  
          }else{
            //load inventory
            fetchInventorylist();
          }
        }else{
          router('/auth/login');
        }
    }, []);

  //get all product
  const fetchInventorylist = async () => {
    let end_point = apiUrl + "inventory";
    axios
        .get(end_point)
        .then((response) => {
            //console.log(response);
            setProductInventory(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
  }

  const fetchInventoryByUser = async (user_login:string) => {
    let end_point = apiUrl + "inventory/cobrand/"+user_login;
    axios
        .get(end_point)
        .then((response) => {
            setProductInventory(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
  }

  const fetchInventoryByAgent = async (user_login:string) => {
    let end_point = apiUrl + "inventory/agent/"+user_login;
    axios
        .get(end_point)
        .then((response) => {
            setProductInventory(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
  }

  const handleDelete = () => {
    setOpenDeleteDialog(true);
  };

  //row inventory
  const [productInventory, setProductInventory] = React.useState([]);
  const rows: InventoryList[] = productInventory;

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
        console.log(event.target.value);
        setSearchTerm(event.target.value);
        
        const strtValue = event.target.value;
        if(strtValue.length !== 0){
            let end_point = apiUrl + "inventory/search?param="+strtValue;
            axios
                .get(end_point)
                .then((response) => {
                  setProductInventory(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }else{
          fetchInventorylist();
        }
  }
  
  return (
    <PageContainer title="Inventory" description="this is inventory page">
      {/* breadcrumb */}
      <Breadcrumb title="Inventory" items={BCrumb} />
      {/* end breadcrumb */}
      <ParentCard title="Inventory List">
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
            {/*
            <Box mt={2} mb={2}>
              <Grid size={{ xs: 12 }}>
                  <Grid container spacing={2}>
                      <Grid size={{ xs: 3 }}>
                        <Typography variant="subtitle1">
                            Partner
                        </Typography>
                        <CustomSelect
                            fullWidth
                            variant="outlined"
                          >
                            <MenuItem value={1}>GRM - GOLDEN RAMA</MenuItem>
                            <MenuItem value={2}>RKL - RIKOLA</MenuItem>
                            <MenuItem value={3}>RYC - KONSURSIUM INDONESIA</MenuItem>
                        </CustomSelect>
                      </Grid>
                      <Grid size={{ xs: 3 }}>
                        <Typography variant="subtitle1">
                            Agent
                        </Typography>
                        <CustomSelect
                            fullWidth
                            variant="outlined"
                          >
                            <MenuItem value={1}>GRM - TIA - TIA FINANCE HO</MenuItem>
                            <MenuItem value={2}>RKL - RKL - DAVID - DAVID WIDJAJA</MenuItem>
                            <MenuItem value={3}>RYC - BUFANNY - BU FANNY</MenuItem>
                        </CustomSelect>
                      </Grid>
                      <Grid size={{ xs: 3 }}>
                        <Typography variant="subtitle1">
                            ICCID
                        </Typography>
                        <CustomTextField
                            fullWidth
                        />
                      </Grid>
                      <Grid size={{ xs: 1 }}>
                        <Typography variant="subtitle1">
                          Status
                        </Typography>
                        <CustomSelect
                            fullWidth
                            variant="outlined"
                          >
                            <MenuItem value={1}>Ready</MenuItem>
                            <MenuItem value={2}>Used</MenuItem>
                        </CustomSelect>
                      </Grid>
                      <Grid size={{ xs: 2 }}>
                        <Typography variant="subtitle1">
                          Sim Type
                        </Typography>
                        <CustomSelect
                            fullWidth
                            variant="outlined"
                          >
                            <MenuItem value={1}>Simcard</MenuItem>
                            <MenuItem value={2}>eSIM</MenuItem>
                        </CustomSelect>
                      </Grid>
                  </Grid>
              </Grid>    
            </Box>
            */}
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
                    <Typography variant="subtitle2">ICCID</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Sim Type</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Status</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Order ID</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Country</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Selling Price</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">In Date</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Out Date</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Partner</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Agent</Typography>
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
                      <Typography variant="caption">{row.iccid}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                        {row.sim_type}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        color={
                          row.status === 'Ready'
                            ? 'success'
                            : row.status === 'Open'
                              ? 'warning'
                              : row.status == 'Used'
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
                    <TableCell>
                      <Typography variant="caption">
                        {row.order_id}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                        {row.country_id}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                        IDR {numberFormat(row.selling_price)}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                        {row.in_date}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                        {row.out_date}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                        {row.cobrand_id}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                        {row.agent_code}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}

                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={10} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={10}
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
    </PageContainer>
  );
};

export default Inventory;