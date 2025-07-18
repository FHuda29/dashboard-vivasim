import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Typography,
  Chip,
  Box,
  Stack,
  TextField,
  InputAdornment,
  Button,
  MenuItem,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  IconButton,
  Tooltip,
  Divider,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import PageContainer from 'src/components/container/PageContainer';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import ParentCard from 'src/components/shared/ParentCard';
import BlankCard from 'src/components/shared/BlankCard';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { IconEdit, IconEye, IconHistory } from '@tabler/icons-react';
import { numberFormat, uploadDetail, ordersList, formatDate, InventoryUpdate, currentDate, orderEventList } from "src/utils/Utils";
import { useEffect } from 'react';
import { IconSearch, IconTrash } from '@tabler/icons-react';
import { useNavigate, useParams } from 'react-router';
import { fontSize } from '@mui/system';
import { size } from 'lodash';
import { mt } from 'date-fns/locale';
import { forEach } from 'node_modules/@tiptap/core/dist/commands';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

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
      title: 'Upload Detail',
    },
];

const UploadDetail = () => {
    const { order_id } = useParams();
    const router = useNavigate();

    const [userName, setUserName] = React.useState('');
    const [userLevel, setUserLevel] = React.useState('');
    const [userSession, setUserSession] = React.useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
          const decodedToken:any = jwtDecode(token);
          setUserName(decodedToken.user_name);
          setUserLevel(decodedToken.session_level);
          setUserSession(decodedToken.session_name);

          console.log("order_id: ",order_id);
          fetchOrderList(order_id);
                  
        }else{
          router('/auth/login');
        }
    }, []);

    const [orderList, setOrderList] = React.useState([]);
    //const rows: ordersList[] = orderList;
    
    //upload detail
    const [uploadList, setUploadList] = React.useState([]);
    const rows: uploadDetail[] = uploadList;

    //const rows: OrderListType[] = orderList;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
        
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event: any, newPage: any) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const fetchOrderList = async (orderId:string) => {
        let end_point = "orders/id/"+orderId;
        axios
            .get(end_point)
            .then((response) => {
                console.log("order_detail: ",response.data);
                //setOrderList(response.data.orders);
                const ccid = response.data.orders[0].order_ccid;
                fetchUploadDetail(ccid);
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

    const fetchUploadDetail = async (ccid:string) => {
        let end_point = "orders/upload/detail/"+ccid;
        axios
            .get(end_point)
            .then((response) => {
                console.log("order_detail: ",response.data);
                setUploadList(response.data.orders);
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

    

    const exportToExcel = () => {

        const data = rows.map((row, index) => ({
            //seq: index+1,
            iccid: row.iccid,
            package_id: row.package_id,
            specific_activation_date: getCurrentDate()
        }))

        const today = new Date();
        const filename = `simcard_detail_${today.toISOString().slice(0, 10)}.xlsx`;

        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Simcard Detail');

        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
        saveAs(blob, filename);
    };

    const getCurrentDate = () => {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0'); // Bulan dimulai dari 0
      const dd = String(today.getDate()).padStart(2, '0');

      return `${yyyy}/${mm}/${dd}`;
    };

    return (
        <PageContainer title="Upload Detail" description="this is upload detail page">
            {/*<Breadcrumb title="Order" items={BCrumb} />*/}
            <ParentCard title="Upload Simcard Detail">
                <Box mt={2} mb={2}>
                        <Grid size={{ xs: 12 }}>
                            <Button
                                variant="contained" 
                                color="primary"
                                onClick={exportToExcel}
                            >   Export Excel
                            </Button>                        
                        </Grid>
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
                                        <Typography variant="subtitle2">Seq</Typography>
                                      </TableCell>
                                      <TableCell>
                                        <Typography variant="subtitle2">ICCID</Typography>
                                      </TableCell>
                                      <TableCell>
                                        <Typography variant="subtitle2">Package ID</Typography>
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
                                          <Typography variant="caption">{index+1}</Typography>
                                        </TableCell>
                                        <TableCell>
                                          <Typography variant="caption">
                                            {row.iccid}
                                          </Typography>
                                        </TableCell>
                    
                                        <TableCell>
                                          <Typography variant="caption">
                                            {row.package_id}
                                          </Typography>
                                        </TableCell>
                                      </TableRow>
                                    ))}
                    
                                    {emptyRows > 0 && (
                                      <TableRow style={{ height: 53 * emptyRows }}>
                                        <TableCell colSpan={3} />
                                      </TableRow>
                                    )}
                                  </TableBody>
                                  <TableFooter>
                                    <TableRow>
                                      <TablePagination
                                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                        colSpan={3}
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
    )
}
export default UploadDetail;