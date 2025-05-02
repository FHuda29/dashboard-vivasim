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
import { numberFormat, orderList, formatDate, InventoryUpdate, currentDate, orderEventList } from "src/utils/Utils";

//api
import ApiConfig  from "src/constants/apiConstants";
import { useEffect } from 'react';
import axios from 'axios';
import { IconSearch, IconTrash } from '@tabler/icons-react';
import { useNavigate, useParams } from 'react-router';
import { fontSize } from '@mui/system';
import { size } from 'lodash';
import { mt } from 'date-fns/locale';
import { forEach } from 'node_modules/@tiptap/core/dist/commands';

const apiUrl = ApiConfig.apiUrl;

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
        const data_success_login = localStorage.getItem('data_success_login');
        if (data_success_login) {
            const parsedData = JSON.parse(data_success_login);
            console.log('user_name:', parsedData.user_name);
            console.log('session_name:', parsedData.session_name);
            console.log('session_level:', parsedData.session_level);
            console.log('last_login_time:', parsedData.last_login_time);
            console.log('blocked:', parsedData.blocked);
            
            setUserName(parsedData.user_name);
            setUserLevel(parsedData.session_level);
            setUserSession(parsedData.session_name);

            console.log("order_id: ",order_id);
            fetchOrderList(order_id);

            if(parsedData.session_level.toLowerCase() === 'partner'){
                const user_login = parsedData.session_name.split('-')[0];
                
            }else if(parsedData.session_level.toLowerCase() === 'agent-manager'){
                
            }else{
                
            }
        }else{
            router('/auth/login');
        }
    }, []);

    const [orderList, setOrderList] = React.useState([]);
    const rows: orderList[] = orderList;
    
    const fetchOrderList = async (orderId:string) => {
        let end_point = apiUrl + "orders/id/"+orderId;
        axios
            .get(end_point)
            .then((response) => {
                console.log("order_detail: ",response.data);
                setOrderList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleApprove = async (order_id:string) => {
        //console.log("Approval");
        try {
            const response = await axios.get(ApiConfig.apiUrl + 'orders/update/'+order_id+"/Approved");
            const updateStatus = response.data;
            if(updateStatus){
                if(updateStatus.order_id === order_id){
                    //console.log("orderList: ",orderList);
                    let strCCID = '';
                    let strCountryID = '';
                    let strPaketId = '';
                    let strSellingPrice = 0;

                    rows.forEach((order) => {
                        console.log("CCID: ",order.order_ccid);
                        strCCID = order.order_ccid;
                        strCountryID = order.order_country_code;
                        strPaketId = order.order_product;
                        strSellingPrice = order.order_product_price;
                    });
                    const hasDelimiter = strCCID.includes('|');
                    const updateInvSIM = {
                        out_date: currentDate(),
                        status: 'Used',
                        order_id: order_id,
                        country_id: strCountryID,
                        package_id: strPaketId,
                        selling_price: strSellingPrice
                    }

                    if(hasDelimiter){
                        const parsed = strCCID.split("|");
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
            const response = await axios.get(ApiConfig.apiUrl + 'orders/update/'+order_id+"/Paid");
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
    const handleCancel = () => {
        router('/order/list');
    }

    //update inventory
    const updateInventorySIM = async (ccid:string,updatedInventory: InventoryUpdate) => {
        try {
            const response = await axios.put(ApiConfig.apiUrl + 'inventory/ccid/'+ccid, updatedInventory);
            const updated = response.data;
            console.log("res updated: ", updated);
        } catch (error) {
            console.error('Error updating inventory sim:', error);
        }
    };

    //update history
    const addOrderEvent = async (orderEvent: orderEventList) => {
        try {
            const response = await axios.post(ApiConfig.apiUrl + 'order/event', orderEvent);
            const addOrderEvent = response.data;
        } catch (error) {
            console.error('Error adding order events :', error);
        }
    };

    return (
        <PageContainer title="Order" description="this is order detail page">
            <Breadcrumb title="Order" items={BCrumb} />
            <ParentCard title="Order Detail">
                <BlankCard>
                    <Box mt={2} mb={2}>
                        {rows.map((row) => (
                        <Grid key={row.seq}>
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
                                        : {row.order_agent_code}
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
                                        : {row.order_customer_name}
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 2 }}>
                                    <Typography variant="h6">
                                        Email Address
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 4 }}>
                                    <Typography variant="subtitle1">
                                        : {row.order_contact_email}
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 2 }}>
                                    <Typography variant="h6">
                                        Contact Phone
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 4 }}>
                                    <Typography variant="subtitle1">
                                        : {row.order_contact_phone}
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 2 }}>
                                    <Typography variant="h6">
                                        Contact Whatsapp
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 4 }}>
                                    <Typography variant="subtitle1">
                                        : {row.order_contact_wa}
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
                                        : {row.order_qty}
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 2 }}>
                                    <Typography variant="h6">
                                        Unit Price
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 10 }}>
                                    <Typography variant="subtitle1">
                                        : {numberFormat(row.order_product_price)}
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 2 }}>
                                    <Typography variant="h6">
                                        Harga NTA
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 10 }}>
                                    <Typography variant="subtitle1">
                                        : {numberFormat(row.order_product_total_price)}
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 2 }}>
                                    <Typography variant="h6">
                                       Country Code
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 10 }}>
                                    <Typography variant="subtitle1">
                                        : {row.order_country_code}
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 2 }}>
                                    <Typography variant="h6">
                                        ICCID List
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 10 }}>
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
                                                row.order_status === 'Paid' ? (
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
                                        {row.order_status === 'Paid' ? (
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
                                        <></>
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