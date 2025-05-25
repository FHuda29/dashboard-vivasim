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
import { IconClearAll, IconEdit, IconEye, IconFileInvoice, IconHistory, IconRowRemove } from '@tabler/icons-react';
import { numberFormat, orderList, formatDate, currentDate,orderEventList } from "src/utils/Utils";

//api
import ApiConfig  from "src/constants/apiConstants";
import { useEffect } from 'react';
import axios from 'axios';
import { IconSearch, IconTrash } from '@tabler/icons-react';
import { useNavigate } from 'react-router';
import { IconCactus } from '@tabler/icons-react';

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
      title: 'Order',
    },
];

const OrderList = () => {
    const router = useNavigate();
    const [userLevel, setUserLevel] = React.useState('');
    const [userSession, setUserSession] = React.useState('');
    const [userName, setUserName] = React.useState('');
        
    useEffect(() => {
        const data_success_login = localStorage.getItem('data_success_login');
        if (data_success_login) {
            const parsedData = JSON.parse(data_success_login);
            console.log('user_name:', parsedData.user_name);
            console.log('session_name:', parsedData.session_name);
            console.log('session_level:', parsedData.session_level);
            console.log('last_login_time:', parsedData.last_login_time);
            console.log('blocked:', parsedData.blocked);
            
            setUserLevel(parsedData.session_level);
            setUserSession(parsedData.session_name);
            setUserName(parsedData.user_name);
            

            if(parsedData.session_level.toLowerCase() === 'partner'){
                const user_login = parsedData.session_name.split('-')[0];
                fetcPartnerhOrderList(user_login);
            }else if(parsedData.session_level.toLowerCase() === 'agent-manager'){
                fetchAgentOrderList(parsedData.session_name);
            }else{
                fetchOrderListAll();
            }
        }else{
            router('/auth/login');
        }
    }, []);

    //order list
    const fetchAgentOrderList = async (agent_code:string) => {
        let end_point = apiUrl + "orders/agent/"+agent_code;
        axios
            .get(end_point)
            .then((response) => {
                //console.log(response);
                setOrderList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    //agent_code
    const fetchOrderListAll = async () => {
        let end_point = apiUrl + "orders";
        axios
            .get(end_point)
            .then((response) => {
                //console.log(response);
                setOrderList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const fetcPartnerhOrderList = async (agent_code:string) => {
        let end_point = apiUrl + "orders/?agent_code="+agent_code;
        axios
            .get(end_point)
            .then((response) => {
                //console.log(response);
                setOrderList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    //const [orderList, setOrderList] = React.useState([]); 
    const [orderList, setOrderList] = React.useState([]);
    const rows: orderList[] = orderList;

    //const rows: OrderListType[] = orderList;
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

    const handleMove = () => {
        //setOpenDeleteDialog(true);
        console.log('move');
    };

    const handleDetail = (order_id:string) => {
        router('/order/detail/'+order_id);
    }
    
    const handleEditOrder = (order_id:string) => {
        router('/order/edit/'+order_id);
    }

    const handleHistory = (order_id:string) => {
        router('/order/history/'+order_id);
    }

    const handleCancel = async (order_id:string) => {
        //router('/order/history/'+order_id);
        try {
            const response = await axios.get(ApiConfig.apiUrl + 'orders/update/'+order_id+"/Cancelled");
            const updateStatus = response.data;
            if(updateStatus){
                if(updateStatus.order_id === order_id){
                    //update hsitory
                    const event_date = currentDate();
                    const dataOrderEvent = {
                        seq: 0,
                        order_id: order_id,
                        event_name: 'Cancelled - Order Simcard/eSIM',
                        event_date: event_date,
                        username: userName
                    }
                    await addOrderEvent(dataOrderEvent);

                    //router('/order/list');
                    window.location.reload();
                }
            }else{
                console.error('Error update status gagal');    
            }
        } catch (error) {
            console.error('Error adding order events :', error);
        }
    }

    const handleClose = async (order_id:string) => {
        try {
            const response = await axios.get(ApiConfig.apiUrl + 'orders/update/'+order_id+"/Closed");
            const updateStatus = response.data;
            if(updateStatus){
                if(updateStatus.order_id === order_id){
                    //update hsitory
                    const event_date = currentDate();
                    const dataOrderEvent = {
                        seq: 0,
                        order_id: order_id,
                        event_name: 'Closed - Upload Simcard',
                        event_date: event_date,
                        username: userName
                    }
                    await addOrderEvent(dataOrderEvent);

                    //router('/order/list');
                    window.location.reload();
                }
            }else{
                console.error('Error update status gagal');    
            }
        } catch (error) {
            console.error('Error adding order events :', error);
        }
    }

    const addOrderEvent = async (orderEvent: orderEventList) => {
        try {
            const response = await axios.post(ApiConfig.apiUrl + 'order/event', orderEvent);
            const addOrderEvent = response.data;
        } catch (error) {
            console.error('Error adding order events :', error);
        }
    };

    return (
        <PageContainer title="Order" description="this is order page">
            <Breadcrumb title="Order" items={BCrumb} />
            <ParentCard title="Order List">
                <Box mt={2} mb={2}>
                    <Grid size={{ xs: 12 }}>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 3 }}>
                                <Typography variant="subtitle1">
                                    Order ID
                                </Typography>
                                <CustomTextField
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={{ xs: 3 }}>
                                <Typography variant="subtitle1">
                                    Customer Name
                                </Typography>
                                <CustomTextField
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={{ xs: 3 }}>
                                <Typography variant="subtitle1">
                                    Order Date Begin
                                </Typography>
                                <CustomTextField
                                    fullWidth
                                    type="date"
                                />
                            </Grid>
                            <Grid size={{ xs: 3 }}>
                                <Typography variant="subtitle1">
                                    Order Date End
                                </Typography>
                                <CustomTextField
                                    fullWidth
                                    type="date"
                                />
                            </Grid>
                            <Grid size={{ xs: 3 }}>
                                <Typography variant="subtitle1">
                                Order Status
                                </Typography>
                                <CustomSelect
                                    fullWidth
                                    variant="outlined"
                                >
                                    <MenuItem value={1}>New</MenuItem>
                                    <MenuItem value={2}>Approved</MenuItem>
                                    <MenuItem value={3}>Paid</MenuItem>
                                    <MenuItem value={4}>Delivered</MenuItem>
                                    <MenuItem value={5}>Returned</MenuItem>
                                    <MenuItem value={6}>Closed</MenuItem>
                                    <MenuItem value={7}>Cancelled</MenuItem>
                                </CustomSelect>
                            </Grid>
                            <Grid size={{ xs: 6 }}>
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
                                    Type
                                </Typography>
                                <CustomSelect
                                    fullWidth
                                    variant="outlined"
                                >
                                    <MenuItem value={1}>Simcard</MenuItem>
                                    <MenuItem value={2}>eSIM</MenuItem>
                                </CustomSelect>
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <Button
                                    variant="contained" 
                                    color="primary"
                                    onClick={handleMove}
                                >
                                    Get Record
                                </Button>
                            </Grid>
                        </Grid>
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
                                        <Typography variant="subtitle2">Action</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Seq</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Order ID</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Order Date</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Type</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Status</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Customer Name</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Contact Phone</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Contact WA</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Email</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Agent Code</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Agent Name</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Product</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Qty</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Total Order</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Total Cost</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {(rowsPerPage > 0
                                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows
                                ).map((row, index) => (
                                <TableRow key={index}>
                                    {userLevel.toLocaleLowerCase() === 'cs-web' ? (
                                        row.order_status === 'Paid' ? (
                                            <TableCell>
                                                <Tooltip title="Detail CCID">
                                                    <IconButton
                                                        color="success"
                                                        onClick={() => handleDetail(row.order_id)}
                                                    >
                                                        <IconEye width={22} />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Close Order">
                                                    <IconButton
                                                        color="primary" 
                                                        onClick={() => handleClose(row.order_id)}                                               
                                                    >
                                                        <IconFileInvoice width={22} />
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        ):(
                                            row.order_status === 'New' ? (
                                                <TableCell>
                                                    <Tooltip title="Detail CCID">
                                                        <IconButton
                                                            color="success"
                                                            onClick={() => handleDetail(row.order_id)}
                                                        >
                                                            <IconEye width={22} />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title="History">
                                                        <IconButton
                                                            color="secondary" 
                                                            onClick={() => handleHistory(row.order_id)}                                               
                                                            >
                                                            <IconHistory width={22} />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title="Cancel Order">
                                                        <IconButton
                                                            color="error" 
                                                            onClick={() => handleCancel(row.order_id)}                                               
                                                            >
                                                            <IconRowRemove width={22} />
                                                        </IconButton>
                                                    </Tooltip>
                                                </TableCell>
                                            ):(
                                                <TableCell>
                                                    <Tooltip title="Detail CCID">
                                                        <IconButton
                                                            color="success"
                                                            onClick={() => handleDetail(row.order_id)}
                                                        >
                                                            <IconEye width={22} />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title="History">
                                                        <IconButton
                                                            color="secondary" 
                                                            onClick={() => handleHistory(row.order_id)}                                               
                                                            >
                                                            <IconHistory width={22} />
                                                        </IconButton>
                                                    </Tooltip>
                                                </TableCell>
                                            )
                                        )
                                    ):(
                                        <TableCell>
                                            <Tooltip title="Detail CCID">
                                                <IconButton
                                                    color="success"
                                                    onClick={() => handleDetail(row.order_id)}
                                                >
                                                    <IconEye width={22} />
                                                </IconButton>
                                            </Tooltip>
                                            {row.order_status === 'New' ? (
                                                <Tooltip title="Edit Order">
                                                    <IconButton
                                                        color="primary"
                                                        onClick={() => handleEditOrder(row.order_id)}
                                                    >
                                                        <IconEdit width={22} />
                                                    </IconButton>
                                                </Tooltip>
                                            ):(
                                                <></>
                                            )
                                            }
                                            <Tooltip title="History">
                                                <IconButton
                                                    color="secondary" 
                                                    onClick={() => handleHistory(row.order_id)}                                               
                                                    >
                                                    <IconHistory width={22} />
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    )
                                    }
                                    <TableCell>
                                        <Typography variant="subtitle2">{index+1}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="textSecondary" variant="subtitle2" fontWeight="400">
                                            {row.order_id}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="textSecondary" variant="subtitle2" fontWeight="400">
                                            {formatDate(row.order_date)}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="textSecondary" variant="subtitle2" fontWeight="400">
                                            {row.order_type}    
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                          <Chip
                                            color={
                                              row.order_status === 'Paid'
                                                ? 'success'
                                                : row.order_status === 'New'
                                                  ? 'warning'
                                                  : row.order_status === 'Cancelled'
                                                    ? 'error'
                                                    : row.order_status === 'Closed'
                                                    ? 'primary'
                                                     : 'secondary'
                                            }
                                            sx={{
                                              borderRadius: '6px',
                                            }}
                                            size="small"
                                            label={row.order_status}
                                          />
                                    </TableCell>
                                    <TableCell>
                                          <Typography color="textSecondary" variant="subtitle2" fontWeight="400">{row.order_customer_name}</Typography>
                                    </TableCell>
                                    <TableCell>
                                          <Typography color="textSecondary" variant="subtitle2" fontWeight="400">{row.order_contact_phone.length > 0 ? row.order_contact_phone : '-'}</Typography>
                                    </TableCell>
                                    <TableCell>
                                          <Typography color="textSecondary" variant="subtitle2" fontWeight="400">{row.order_contact_wa.length > 0 ? row.order_contact_wa : '-'}</Typography>
                                    </TableCell>
                                    <TableCell>
                                          <Typography color="textSecondary" variant="subtitle2" fontWeight="400">{row.order_contact_email.length > 0 ? row.order_contact_email : '-'}</Typography>
                                    </TableCell>
                                    <TableCell>
                                          <Typography color="textSecondary" variant="subtitle2" fontWeight="400">{row.order_agent_code}</Typography>
                                    </TableCell>
                                    <TableCell>
                                          <Typography color="textSecondary" variant="subtitle2" fontWeight="400">{row.order_agent_name}</Typography>
                                    </TableCell>
                                    <TableCell>
                                          <Typography color="textSecondary" variant="subtitle2" fontWeight="400">{row.order_product}</Typography>
                                    </TableCell>
                                    <TableCell>
                                          <Typography color="textSecondary" variant="subtitle2" fontWeight="400">{numberFormat(row.order_qty)}</Typography>
                                    </TableCell>
                                    <TableCell>
                                          <Typography color="textSecondary" variant="subtitle2" fontWeight="400">{numberFormat(row.order_product_price)}</Typography>
                                    </TableCell>
                                    <TableCell>
                                          <Typography color="textSecondary" variant="subtitle2" fontWeight="400">{numberFormat(row.order_product_total_price)}</Typography>
                                    </TableCell>
                                </TableRow>
                                ))}
                                {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                                )}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                        colSpan={16}
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
}
export default OrderList;