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
import { numberFormat, orderList, ordersList, formatDate, InventoryUpdate, currentDate, orderEventList } from "src/utils/Utils";
import { useEffect } from 'react';
import { IconSearch, IconTrash } from '@tabler/icons-react';
import { useNavigate, useParams } from 'react-router';
import { fontSize } from '@mui/system';
import { size } from 'lodash';
import { mt } from 'date-fns/locale';
import { forEach } from 'node_modules/@tiptap/core/dist/commands';

//api
import axios from 'src/api/axios';
import { jwtDecode } from 'jwt-decode';

const BCrumb = [
    {
      to: '/',
      title: 'Home',
    },
    {
      title: 'Order Detail',
    },
];

const OrderDetail = () => {
    const { order_id } = useParams();
    const router = useNavigate();

    const [userName, setUserName] = React.useState('');
    const [userLevel, setUserLevel] = React.useState('');
    const [userSession, setUserSession] = React.useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken:any = jwtDecode(token);

            console.log('user_name:', decodedToken.user_name);
            console.log('session_name:', decodedToken.session_name);
            console.log('session_level:', decodedToken.session_level);
            console.log('last_login_time:', decodedToken.last_login_time);
            console.log('blocked:', decodedToken.blocked);
            
            setUserName(decodedToken.user_name);
            setUserLevel(decodedToken.session_level);
            setUserSession(decodedToken.session_name);

            console.log("order_id: ",order_id);
            fetchOrderList(order_id);

            if(decodedToken.session_level.toLowerCase() === 'partner' || decodedToken.session_level.toLowerCase() === 'partner-admin'){
                const user_login = decodedToken.session_name.split('-')[0];
                
            }else if(decodedToken.session_level.toLowerCase() === 'agent-manager'){
                
            }else{
                
            }
        }else{
            router('/auth/login');
        }
        
    }, []);

    const [orderList, setOrderList] = React.useState([]);
    const rows: ordersList[] = orderList;
    
    const fetchOrderList = async (orderId:string) => {
        let end_point = "orders/id/"+orderId;
        axios
            .get(end_point)
            .then((response) => {
                console.log("order_detail: ",response.data);
                setOrderList(response.data.orders);
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

    const handleApprove = async (order_id:string) => {
        //console.log("Approval");
        try {
            const response = await axios.get('orders/update/'+order_id+"/Approved");
            const updateStatus = response.data;
            if(updateStatus){
                if(updateStatus.order_id === order_id){
                    //console.log("orderList: ",orderList);
                    let strCCID = '';
                    let strCountryID = '';
                    let strPaketId = '';
                    let strSellingPrice = 0;

                    console.log("order xxx: ",rows);
                    rows.forEach((order) => {
                        console.log("CCID: ",order.order_ccid);
                        console.log("country_name: ",order.country_name);
                        console.log("package_id: ",order.package_id);
                        strCCID = order.order_ccid;
                        strCountryID = order.country_name;
                        strPaketId = order.package_id;
                        strSellingPrice = order.total_order;
                    });
                    const hasDelimiter = strCCID.includes(',');
                    const updateInvSIM = {
                        out_date: currentDate(),
                        status: 'Used',
                        order_id: order_id,
                        country_id: strCountryID,
                        package_id: strPaketId,
                        selling_price: strSellingPrice
                    }

                    console.log("updateInvSIM: ",updateInvSIM);

                    if(hasDelimiter){
                        const parsed = strCCID.split(",");
                        console.log("length: ",parsed.length);

                        parsed.forEach(async (ccid) => {
                            console.log("CCID PARSE: ",ccid);
                            //update inv sim
                            await updateInventorySIM(ccid,updateInvSIM);
                        });
                    }else{
                        console.log("delimiter false");
                        await updateInventorySIM(strCCID,updateInvSIM);
                    }


                    //update hsitory
                    const event_date = currentDate();
                    const dataOrderEvent = {
                        seq: 0,
                        order_id: order_id,
                        event_name: 'Approve Order',
                        event_date: event_date,
                        username: userName
                    }
                    await addOrderEvent(dataOrderEvent);

                    router('/order/list');
                }
            }else{
                console.error('Error update status gagal');    
            }
        } catch (error) {
            console.error('Error adding order events :', error);
        }
    }

    const handleConfirm = async (order_id:string) => {
        try {
            const response = await axios.get('orders/update/'+order_id+"/Paid");
            const updateStatus = response.data;
            if(updateStatus){
                if(updateStatus.order_id === order_id){
                    //update hsitory
                    const event_date = currentDate();
                    const dataOrderEvent = {
                        seq: 0,
                        order_id: order_id,
                        event_name: 'Confirm Order',
                        event_date: event_date,
                        username: userName
                    }
                    await addOrderEvent(dataOrderEvent);

                    router('/order/list');
                }
            }else{
                console.error('Error update status gagal');    
            }
        } catch (error) {
            console.error('Error adding order events :', error);
        }
    }
    const handleCancel = async () => {
        try {
            const response = await axios.get('orders/update/'+order_id+"/Cancelled");
            const updateStatus = response.data;
            if(updateStatus){
                if(updateStatus.order_id === order_id){
                    //update inv sim
                    let strCCID = '';
                    let strCountryID = '';
                    let strPaketId = '';
                    let strSellingPrice = 0;

                    rows.forEach((order) => {
                        strCCID = order.order_ccid;
                        strCountryID = order.country_name;
                        strPaketId = order.package_id;
                        strSellingPrice = order.total_order;
                    });
                    
                    const hasDelimiter = strCCID.includes(',');
                    const updateInvSIM = {
                        out_date: null,
                        status: 'Ready',
                        order_id: null,
                        country_id: null,
                        package_id: null,
                        selling_price: 0
                    }

                    if(hasDelimiter){
                        const parsed = strCCID.split(",");
                        console.log("length: ",parsed.length);

                        parsed.forEach(async (ccid) => {
                            console.log("CCID PARSE: ",ccid);
                            //update inv sim
                            await updateInventorySIM(ccid,updateInvSIM);
                        });
                    }else{
                        console.log("delimiter false");
                        await updateInventorySIM(strCCID,updateInvSIM);
                    }
                    
                    //update hsitory
                    const event_date = currentDate();
                    const dataOrderEvent = {
                        seq: 0,
                        order_id: order_id,
                        event_name: 'Cancel Order',
                        event_date: event_date,
                        username: userName
                    }
                    await addOrderEvent(dataOrderEvent);

                    router('/order/list');
                }
            }else{
                console.error('Error update status gagal');    
            }
        } catch (error) {
            console.error('Error adding order events :', error);
        }
        
    }

    //update inventory
    const updateInventorySIM = async (ccid:string,updatedInventory: InventoryUpdate) => {
        try {
            const response = await axios.put('inventory/ccid/'+ccid, updatedInventory);
            const updated = response.data;
            console.log("res updated: ", updated);
        } catch (error) {
            console.error('Error updating inventory sim:', error);
        }
    };

    //update history
    const addOrderEvent = async (orderEvent: orderEventList) => {
        try {
            const response = await axios.post('order/event', orderEvent);
            const addOrderEvent = response.data;
        } catch (error) {
            console.error('Error adding order events :', error);
        }
    };

    return (
        <PageContainer title="Order" description="this is order detail page">
            {/*<Breadcrumb title="Order" items={BCrumb} />*/}
            <ParentCard title="Order Detail">
                <BlankCard>
                    <Box m={2}>
                        {rows.map((row) => (
                        <Grid key={row.order_id}>
                            <Grid container spacing={1}>
                                <Grid size={{ xs: 2 }}>
                                    <Typography variant="h6">
                                        Order ID
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 4 }}>
                                    <Typography variant="subtitle1">
                                        : {row.order_id}
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 2 }}>
                                    <Typography variant="h6">
                                        Order Date
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 4 }}>
                                    <Typography variant="subtitle1">
                                        : {formatDate(row.order_date)}
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 2 }}>
                                    <Typography variant="h6">
                                        Status
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 4 }}>
                                    <Typography variant="subtitle1">
                                        : <Chip
                                            color={
                                            row.order_status === 'Paid'
                                                ? 'success'
                                                : row.order_status === 'New'
                                                    ? 'warning'
                                                : row.order_status === 'Cancel'
                                                    ? 'error' : 'secondary'
                                            }
                                                sx={{borderRadius: '6px',}}
                                                size="small"
                                                label={row.order_status}
                                        />
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 2 }}>
                                    <Typography variant="h6">
                                        Agent Code
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 4 }}>
                                    <Typography variant="subtitle1">
                                        : {row.agent_code}
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 12 }} mt={2} mb={2}>
                                    <Divider/>
                                </Grid>
                                <Grid size={{ xs: 2 }}>
                                    <Typography variant="h6">
                                        Customer Name
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 4 }}>
                                    <Typography variant="subtitle1">
                                        : {row.customer_name}
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 2 }}>
                                    <Typography variant="h6">
                                        Email Address
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 4 }}>
                                    <Typography variant="subtitle1">
                                        : {row.email_address}
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 2 }}>
                                    <Typography variant="h6">
                                        Contact Phone
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 4 }}>
                                    <Typography variant="subtitle1">
                                        : {row.contact_phone}
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 2 }}>
                                    <Typography variant="h6">
                                        Contact Whatsapp
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 4 }}>
                                    <Typography variant="subtitle1">
                                        : {row.contact_wa}
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 12 }} mt={2} mb={2}>
                                    <Divider/>
                                </Grid>
                                <Grid size={{ xs: 2 }}>
                                    <Typography variant="h6">
                                       Quantity
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 10 }}>
                                    <Typography variant="subtitle1">
                                        : {row.order_quantity}
                                    </Typography>
                                </Grid>
                                {/*
                                <Grid size={{ xs: 2 }}>
                                    <Typography variant="h6">
                                        Unit Price
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 10 }}>
                                    <Typography variant="subtitle1">
                                        : {numberFormat(row.total_order)}
                                    </Typography>
                                </Grid>
                                */}
                                <Grid size={{ xs: 2 }}>
                                    <Typography variant="h6">
                                        Harga NTA
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 10 }}>
                                    <Typography variant="subtitle1">
                                        : {numberFormat(row.total_order)}
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 2 }}>
                                    <Typography variant="h6">
                                       Country List
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 10 }}>
                                    <Typography variant="subtitle1">
                                        : {row.country_name}
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 2 }}>
                                    <Typography variant="h6">
                                        Package ID
                                    </Typography>
                                </Grid>
                                
                                <Grid size={{ xs: 10 }}>
                                    <Typography variant="subtitle1">
                                        : {row.package_id}
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 2 }}>
                                    <Typography variant="h6">
                                        Package Name
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 10 }}>
                                    <Typography variant="subtitle1">
                                        : {row.package_name}
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 2 }}>
                                    <Typography variant="h6">
                                        ICCID List
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 10 }} style={{ wordBreak: 'break-all' }}>
                                    <Typography variant="subtitle1">
                                        : {row.order_ccid.replace('|',',')}
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 12 }} mt={2} mb={2}>
                                    {userLevel.toLowerCase() === 'agent-manager' ? (
                                        <>
                                        {row.order_status === 'Approved' ? (
                                                <Button
                                                    variant="contained" 
                                                    color="primary"
                                                    onClick={() => handleConfirm(row.order_id)}
                                                >
                                                    Confirm Order
                                                </Button>
                                            ):(
                                                row.order_status === 'Paid' || row.order_status === 'Cancelled' || row.order_status === 'Closed' ? (
                                                    <></>
                                                ):(
                                                    <Button
                                                        variant="contained" 
                                                        color="primary"
                                                        onClick={() => handleApprove(row.order_id)}
                                                    >
                                                        Approve Order
                                                    </Button>
                                                )
                                            )
                                        }
                                        {row.order_status === 'Paid' || row.order_status === 'Cancelled' || row.order_status === 'Closed' ? (
                                            <></>
                                        ):(
                                            <>
                                            &nbsp;&nbsp;&nbsp;
                                            <Button
                                                variant="contained" 
                                                color="secondary"
                                                onClick={handleCancel}
                                            >
                                                Cancel
                                            </Button>
                                            </>
                                        )
                                        }
                                        </>
                                    ):(
                                        row.order_status === 'New' ? (
                                            <>
                                                <Button
                                                    variant="contained" 
                                                    color="primary"
                                                    onClick={() => handleApprove(row.order_id)}
                                                >
                                                    Approve Order
                                                </Button>
                                                &nbsp;&nbsp;&nbsp;
                                                <Button
                                                    variant="contained" 
                                                    color="secondary"
                                                    onClick={handleCancel}
                                                >
                                                    Cancel
                                                </Button>
                                            </>
                                        ):(
                                            <></>
                                        )    
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>
                         ))}
                    </Box>
                </BlankCard>    
            </ParentCard>
        </PageContainer>
    )
}
export default OrderDetail;