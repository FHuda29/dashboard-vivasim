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
import { numberFormat, orderList, ordersList, formatDate, currentDate,orderEventList } from "src/utils/Utils";
import { useEffect } from 'react';
import { IconSearch, IconTrash } from '@tabler/icons-react';
import { useNavigate } from 'react-router';
import { IconCactus } from '@tabler/icons-react';
import { ro } from 'date-fns/locale';
import { set } from 'lodash';

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
      title: 'Simcard',
    },
];

const UploadList = () => {
    const router = useNavigate();
    const [userLevel, setUserLevel] = React.useState('');
    const [userSession, setUserSession] = React.useState('');
    const [userName, setUserName] = React.useState('');
    
    
    const [orderId, setOrderId] = React.useState("");
    const [customerName, setCustomerName] = React.useState("");
    const [orderStartDate, setOrderStartDate] = React.useState("");
    const [orderEndDate, setOrderEndDate] = React.useState("");
    const [orderStatus, setOrderStatus] = React.useState("");
    const [orderType, setOrderType] = React.useState("");
    const [orderAgentCode, setOrderAgentCode] = React.useState("");

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
           const decodedToken:any = jwtDecode(token);
            setUserLevel(decodedToken.session_level);
            setUserSession(decodedToken.session_name);
            setUserName(decodedToken.user_name);
            
            fetchOrderListAll();

        }else{
            router('/auth/login');
        }
    }, []);

    //order list
    const fetchAgentOrderList = async (agent_code:string) => {
        let end_point = "orders/agent/"+agent_code;
        axios
            .get(end_point)
            .then((response) => {
                //console.log(response);
                if(response.data.success){
                    setOrderList(response.data.orders);
                    setFilteredOrders(response.data.orders);
                }
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
    //agent_code
    const fetchOrderListAll = async () => {
        let end_point = "orders/upload/list";
        axios
            .get(end_point)
            .then((response) => {
                //console.log(response);
                if(response.data.success){
                    setOrderList(response.data.orders);
                    setFilteredOrders(response.data.orders);    
                }
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

    const fetchOrderListAllByCS = async () => {
        let end_point = "orders/cs";
        axios
            .get(end_point)
            .then((response) => {
                    //console.log(response);
                    if(response.data.success){
                        setOrderList(response.data.orders);
                        setFilteredOrders(response.data.orders);    
                    }
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

    const reloadData = () => {
        fetchOrderListAll();

        setOrderId('');
        setCustomerName('');
        setOrderStartDate('');
        setOrderEndDate('');
        setOrderStatus('');
        setOrderType('');
        setOrderAgentCode('');
    }
    const fetcPartnerhOrderList = async (agent_code:string) => {
        let end_point = "orders/?agent_code="+agent_code;
        axios
            .get(end_point)
            .then((response) => {
                //console.log(response);
                if(response.data.success){
                    setOrderList(response.data.orders);
                    setFilteredOrders(response.data.orders);    
                }
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

    //const [orderList, setOrderList] = React.useState([]); 
    const [orderList, setOrderList] = React.useState([]);
    //const [filteredOrders, setFilteredOrders] = React.useState<orderList[]>([]);
    const [filteredOrders, setFilteredOrders] = React.useState<ordersList[]>([]);

    //const rows: orderList[] = orderList;
    //const rows: orderList[] = filteredOrders;
    const rows: ordersList[] = filteredOrders;

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

    const handleGetRecord = () => {
        //setOpenDeleteDialog(true);
        console.log('get record');

        //const filteredData = filterOrders(rows);
        //setOrderList(filteredData);
        const filteredData = orderList.filter(order => {
            const orderDate = new Date(order.order_date);
            return (!orderId || order.order_id.includes(orderId)) &&
                (!customerName || order.order_customer_name.toLowerCase().includes(customerName.toLowerCase())) &&
                (!orderStartDate || orderDate >= new Date(orderStartDate)) &&
                (!orderEndDate || orderDate <= new Date(orderEndDate)) &&
                (!orderStatus || order.order_status === orderStatus) &&
                (!orderAgentCode || order.order_agent_code.toLowerCase().includes(orderAgentCode.toLowerCase())) &&
                (!orderType || order.product_type === orderType);
        });

        setFilteredOrders(filteredData);
    };

    const handleDetail = (order_id:string) => {
        router('/simcard/upload/detail/'+order_id);
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
            const response = await axios.get('orders/update/'+order_id+"/Cancelled");
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
            const response = await axios.get('orders/update/'+order_id+"/Closed");
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
            const response = await axios.post('order/event', orderEvent);
            const addOrderEvent = response.data;
        } catch (error) {
            console.error('Error adding order events :', error);
        }
    };
    
    function filterOrders(data:any) {
        return data.filter(order => {
            const orderDate = new Date(order.order_date);
            return (!orderId || order.order_id.includes(orderId)) &&
                (!customerName || order.order_customer_name.toLowerCase().includes(customerName.toLowerCase())) &&
                (!orderStartDate || orderDate >= new Date(orderStartDate)) &&
                (!orderEndDate || orderDate <= new Date(orderEndDate)) &&
                (!orderStatus || order.order_status === orderStatus) &&
                (!orderAgentCode || order.order_agent_code.toLowerCase().includes(orderAgentCode.toLowerCase())) &&
                (!orderType || order.product_type === orderType);
        });
    }

    return (
        <PageContainer title="Upload Simcard" description="this is upload simcard page">
            {/*<Breadcrumb title="Order" items={BCrumb} />*/}
            <ParentCard title="Upload List">
                <Box mt={2} mb={2}>
                    <Grid size={{ xs: 12 }}>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 3 }}>
                                <Typography variant="subtitle1">
                                    Order ID
                                </Typography>
                                <CustomTextField
                                    fullWidth
                                    onChange={(e: any) => setOrderId(e.target.value)}
                                />
                            </Grid>
                            <Grid size={{ xs: 3 }}>
                                <Typography variant="subtitle1">
                                    Customer Name
                                </Typography>
                                <CustomTextField
                                    fullWidth
                                    onChange={(e: any) => setCustomerName(e.target.value)}
                                />
                            </Grid>
                            <Grid size={{ xs: 3 }}>
                                <Typography variant="subtitle1">
                                    Order Date Begin
                                </Typography>
                                <CustomTextField
                                    fullWidth
                                    type="date"
                                    onChange={(e: any) => setOrderStartDate(e.target.value)}
                                />
                            </Grid>
                            <Grid size={{ xs: 3 }}>
                                <Typography variant="subtitle1">
                                    Order Date End
                                </Typography>
                                <CustomTextField
                                    fullWidth
                                    type="date"
                                    onChange={(e: any) => setOrderEndDate(e.target.value)}
                                />
                            </Grid>
                            <Grid size={{ xs: 3 }}>
                                <Typography variant="subtitle1">
                                Order Status
                                </Typography>
                                <CustomSelect
                                    fullWidth
                                    variant="outlined"
                                    onChange={(e: any) => setOrderStatus(e.target.value)}
                                >
                                    <MenuItem value='New'>New</MenuItem>
                                    <MenuItem value='Approved'>Approved</MenuItem>
                                    <MenuItem value='Paid'>Paid</MenuItem>
                                    <MenuItem value='Delivered'>Delivered</MenuItem>
                                    <MenuItem value='Returned'>Returned</MenuItem>
                                    <MenuItem value='Closed'>Closed</MenuItem>
                                    <MenuItem value='Cancelled'>Cancelled</MenuItem>
                                </CustomSelect>
                            </Grid>
                            {userLevel.toLowerCase() === 'web-admin' ?(
                                <>
                                <Grid size={{ xs: 6 }}>
                                    <Typography variant="subtitle1">
                                        Agent
                                    </Typography>
                                    <CustomSelect
                                        fullWidth
                                        variant="outlined"
                                        onChange={(e: any) => setOrderAgentCode(e.target.value)}
                                    >
                                        <MenuItem value='GRM'>GRM - TIA - TIA FINANCE HO</MenuItem>
                                        <MenuItem value='RKL'>RKL - RKL - DAVID - DAVID WIDJAJA</MenuItem>
                                        <MenuItem value='RYC'>RYC - BUFANNY - BU FANNY</MenuItem>
                                    </CustomSelect>
                                </Grid>
                                <Grid size={{ xs: 3 }}>
                                    <Typography variant="subtitle1">
                                        Type
                                    </Typography>
                                    <CustomSelect
                                        fullWidth
                                        variant="outlined"
                                        onChange={(e: any) => setOrderType(e.target.value)}
                                    >
                                        <MenuItem value='SIM'>Simcard</MenuItem>
                                        <MenuItem value='ESIM'>eSIM</MenuItem>
                                    </CustomSelect>
                                </Grid>
                                </>
                            ):(
                                <>
                                <Grid size={{ xs: 3 }}>
                                    <Typography variant="subtitle1">
                                        Type
                                    </Typography>
                                    <CustomSelect
                                        fullWidth
                                        variant="outlined"
                                        onChange={(e: any) => setOrderType(e.target.value)}
                                    >
                                        <MenuItem value='SIM'>Simcard</MenuItem>
                                        <MenuItem value='ESIM'>eSIM</MenuItem>
                                    </CustomSelect>
                                </Grid>
                                <Grid size={{ xs: 6 }}>
                                    <></>
                                </Grid>
                                </>
                            )}
                            <Grid size={{ xs: 12 }}>
                                <Button
                                    variant="contained" 
                                    color="primary"
                                    style={{marginRight: '5px'}}
                                    onClick={handleGetRecord}
                                >
                                    Get Record
                                </Button>

                                <Button
                                    variant="contained" 
                                    color="secondary"
                                    style={{marginLeft: '5px'}}
                                    onClick={reloadData}
                                >
                                    Refresh All
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
                                        <Typography variant="subtitle2">Quantity</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Country</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Package ID</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">List ICCID</Typography>
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
                                        <Typography variant="subtitle2">{page * rowsPerPage + index + 1}</Typography>
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
                                            {row.product_type}
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
                                          <Typography color="textSecondary" variant="subtitle2" fontWeight="400">{numberFormat(row.order_quantity)}</Typography>
                                    </TableCell>
                                    <TableCell>
                                          <Typography color="textSecondary" variant="subtitle2" fontWeight="400">{row.country_name}</Typography>
                                    </TableCell>
                                    <TableCell>
                                          <Typography color="textSecondary" variant="subtitle2" fontWeight="400">{row.package_id}</Typography>
                                    </TableCell>
                                    <TableCell>
                                          <Typography color="textSecondary" variant="subtitle2" fontWeight="400">{row.order_ccid}</Typography>
                                    </TableCell>
                                </TableRow>
                                ))}
                                {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={2} />
                                </TableRow>
                                )}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                        colSpan={2}
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
export default UploadList;