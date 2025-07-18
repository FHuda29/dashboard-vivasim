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
  Button
} from '@mui/material';

import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import PageContainer from 'src/components/container/PageContainer';
import ParentCard from 'src/components/shared/ParentCard';
import BlankCard from '../../components/shared/BlankCard';
import { Link, useNavigate } from 'react-router';
import { numberFormat, partnerList, formatDate } from "src/utils/Utils";
import { useEffect } from 'react';
import { IconSearch, IconTrash } from '@tabler/icons-react';

//api
import axios from 'src/api/axios';
import { jwtDecode } from 'jwt-decode';

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

const PartnerList = () => {
    const router = useNavigate();
    const [userLevel, setUserLevel] = React.useState('');
    const [userSession, setUserSession] = React.useState('');
    const parseNumber = (value: string | number) => typeof value === 'string' ? parseFloat(value.replace(/,/g, '')) : value;

    useEffect(() => {
        //load partner list
        const token = localStorage.getItem('token');
        if (token) {
          const decodedToken:any = jwtDecode(token);
          console.log('user_name:', decodedToken.user_name);
          console.log('session_name:', decodedToken.session_name);
          console.log('session_level:', decodedToken.session_level);
          console.log('last_login_time:', decodedToken.last_login_time);
          console.log('blocked:', decodedToken.blocked);

          setUserLevel(decodedToken.session_level);
          
          if(decodedToken.session_level.toLowerCase() === 'partner' || decodedToken.session_level.toLowerCase() === 'partner-admin'){
            const user_login = decodedToken.session_name.split('-')[0];
            setUserSession(user_login);
            fetchPartnerCobrand(decodedToken.session_name);
          }else{
            //load product
            setUserSession(decodedToken.session_name);
            fetchPartnerList();
          }
        }else{
          router('/auth/login');
        }
        
    }, []);

  //get all product
  const fetchPartnerList = async () => {
    let end_point = "partners";
    axios
        .get(end_point)
        .then((response) => {
            //console.log(response);
            setPartners(response.data);
        })
        .catch((error) => {
           if (error.response && error.response.status === 403 || error.response.status === 401) {
            // Token expired → redirect ke login
            router('/auth/login');
            } else {
              console.log(error);
            }
        });
  }

  const fetchPartnerCobrand = async (cobrand_id:string) => {
    let end_point = "partners/cobrand/"+cobrand_id;
    axios
        .get(end_point)
        .then((response) => {
            //console.log(response);
            setPartners(response.data);
        })
        .catch((error) => {
          if (error.response && error.response.status === 403 || error.response.status === 401) {
            // Token expired → redirect ke login
            router('/auth/login');
          } else {
            console.log(error);
          }
        });
  }
  
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectAll, setSelectAll] = React.useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);

  const handleDelete = () => {
    setOpenDeleteDialog(true);
  };

  //row partner
  const [partners, setPartners] = React.useState([]);
  const rows: partnerList[] = partners;

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

  return (
    <PageContainer title="Partner" description="this is partner page">
      {/* breadcrumb */}
      {/*<Breadcrumb title="Partner" items={BCrumb} />*/}
      {/* end breadcrumb */}
      <ParentCard title="Partner List">
          <Box mb={2}>
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
                    onChange={(e: any) => setSearchTerm(e.target.value)}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconSearch size={"16"} />
                        </InputAdornment>
                        ),
                    }}
                    />
                    {userLevel.toLowerCase() === 'web-admin' || userLevel.toLowerCase() === 'super-admin' ? (
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
                          to="/apps/partner/create"
                      >
                          Add Partner
                      </Button>
                    </Box> 
                    ):(
                      <></>
                    )
                    }
                </Stack>
        </Box>
        <BlankCard>    
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
                    <Typography variant="subtitle2">Partner ID	</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Partner Name</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Partner PIC</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Payment Type</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle2">Total Invoice</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle2">Base Price</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle2">Total Profit</Typography>
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
                      <Typography variant="caption">{row.cobrand_id}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                        {row.cobrand_name}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography variant="caption">
                        {row.pic}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                      {row.payment_type}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="caption">
                      {numberFormat(row.total_invoice)}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="caption">
                      {numberFormat(row.total_base_price)}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="caption">
                      {numberFormat(row.profit)}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}

                {/* Tambahkan baris total */}
                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableCell colSpan={4}>
                    <Typography variant="subtitle2" fontWeight="bold">Total</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="subtitle2" fontWeight="bold">
                      {numberFormat(rows.reduce((sum, row) => sum + parseNumber(row.total_invoice), 0))}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="subtitle2" fontWeight="bold">
                      {numberFormat(rows.reduce((sum, row) => sum + parseNumber(row.total_base_price), 0))}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="subtitle2" fontWeight="bold">
                      {numberFormat(rows.reduce((sum, row) => sum + parseNumber(row.profit), 0))}
                    </Typography>
                  </TableCell>
                </TableRow>
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={1} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={1}
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

export default PartnerList;