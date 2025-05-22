import React, { useState, useContext, useEffect } from 'react';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
//import CreateProductApp from 'src/components/apps/product/Add-product';                                             
import BlankCard from 'src/components/shared/BlankCard';
import { Alert, Box, Button, CardContent, Divider, FormControlLabel, Grid2 as Grid, MenuItem, Radio, RadioGroup, Stack, Typography } from '@mui/material';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
//import router from 'src/routes/Router';
import { useNavigate, useParams } from 'react-router';
//import { ProductProvider } from 'src/context/ProductContext';

import { numberFormat, orderList, formatDate, generateRandomString, currentDate, generateTrxId, orderEventList } from "src/utils/Utils";
import axios from 'axios';
import ApiConfig  from "src/constants/apiConstants";
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { text } from 'stream/consumers';
import { textAlign } from '@mui/system';
const apiUrl = ApiConfig.apiUrl;


const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Order',
  },
];

const fupPackage = [
  { id: 0, value: '500', label: '500Mb' },
  { id: 1, value: '1000', label: '1Gb' },
  { id: 2, value: '2000', label: '2Gb' },
  { id: 3, value: '3000', label: '3Gb' },
  { id: 4, value: '5000', label: '5Gb' }
]


const quotaPackage = [
  { id: 0, value: '3000', label: '3Gb' },
  { id: 1, value: '5000', label: '5Gb' },
  { id: 2, value: '6000', label: '6Gb' },
  { id: 3, value: '7000', label: '7Gb' },
  { id: 4, value: '10000', label: '10Gb' },
  { id: 5, value: '15000', label: '15Gb' },
  { id: 6, value: '20000', label: '20Gb' },
  { id: 7, value: '30000', label: '30Gb' }
]

const daysPackage = [
  { id: 0, value: '1', label: '1 day' },
  { id: 1, value: '2', label: '2 day' },
  { id: 2, value: '3', label: '3 day' },
  { id: 3, value: '4', label: '4 day' },
  { id: 4, value: '5', label: '5 day' },
  { id: 5, value: '6', label: '6 day' },
  { id: 6, value: '7', label: '7 day' },
  { id: 7, value: '8', label: '8 day' },
  { id: 8, value: '10', label: '10 day' },
  { id: 9, value: '12', label: '12 day' },
  { id: 10, value: '15', label: '15 day' },
  { id: 11, value: '20', label: '20 day' },
  { id: 12, value: '30', label: '30 day' }
]

const quantityPackage = [
  { id: 0, value: '1', label: '1' },
  { id: 1, value: '2', label: '2' },
  { id: 2, value: '3', label: '3' },
  { id: 3, value: '4', label: '4' },
  { id: 4, value: '5', label: '5' },
  { id: 5, value: '6', label: '6' },
  { id: 6, value: '7', label: '7' },
  { id: 7, value: '8', label: '8' },
  { id: 8, value: '9', label: '9' },
  { id: 9, value: '10', label: '10' },
  { id: 10, value: '11', label: '11' },
  { id: 11, value: '12', label: '12' },
  { id: 12, value: '13', label: '13' },
  { id: 13, value: '14', label: '14' },
  { id: 14, value: '15', label: '15' },
  { id: 15, value: '16', label: '16' },
  { id: 16, value: '17', label: '17' },
  { id: 17, value: '18', label: '18' },
  { id: 18, value: '19', label: '19' },
  { id: 19, value: '20', label: '20' },
  { id: 20, value: '21', label: '21' },
  { id: 21, value: '22', label: '22' },
  { id: 22, value: '23', label: '23' },
  { id: 23, value: '24', label: '24' },
  { id: 24, value: '25', label: '25' },
  { id: 25, value: '26', label: '26' },
  { id: 26, value: '27', label: '27' },
  { id: 27, value: '28', label: '28' },
  { id: 28, value: '29', label: '29' },
  { id: 29, value: '30', label: '30' }
]
const CreateOrder = () => {
    const [country, setCountry] = React.useState([]);
    const [agents, setAgents] = React.useState([]);
    const [userLevel, setUserLevel] = useState('');
    const [userName,setUserName] = useState('');
    const [userSession, setUserSession] = useState('');
    const [userLogin, setUserLogin] = useState('');
    const [isSelectable, setIsSelectable] = useState(true);
  
    //const { addProduct, products } = useContext(ProductPartnerContext);
    const [showAlert, setShowAlert] = useState(false);
    const router = useNavigate();
    const [formData, setFormData] = useState({
      seq: 0,
      nama_pengguna: '',
      telp_pengguna: '',
      email_pengguna: '',
      agent_name:'',
      type: '',
      package_type: '',
      country: 'ASIA16',
      days: 0,
      fup:'',
      quota: '',
      quantity: 1,
      product_id: '',
      product_price: 0
    });
  
    useEffect(() => {
      const data_success_login = localStorage.getItem('data_success_login');
      if (data_success_login) {
          const parsedData = JSON.parse(data_success_login);
          console.log('data_success_login:', parsedData);

          console.log('user_name:', parsedData.user_name);
          console.log('session_name:', parsedData.session_name);
          console.log('session_level:', parsedData.session_level);
          //console.log('last_login_time:', parsedData.last_login_time);
          //console.log('blocked:', parsedData.blocked);
          setUserName(parsedData.user_name);
          setUserLevel(parsedData.session_level);
          setUserLogin(parsedData.session_name);

          //get aget name
          fetchAgentByCode(parsedData.session_name);

          
          const partnerID = parsedData.session_name.split('-')[0];
          setUserSession(partnerID);

          //list product
          fetchProductPartner(partnerID);

          setFormData((prevData: any) => ({
            ...prevData,
            cobrand_id: parsedData.session_name
          }));
          
          if(parsedData.session_level.toLowerCase() === 'partner'){
            //fetchAgentListCobrand((parsedData.session_name));
          }else{
            //load partner list
            //fetchPartnerList();
          }
      }
      
      //list country
      fetchCountryList();
      
      /*
      if (products.length > 0) {
        const lastId = products[products.length - 1].seq;
        //console.log("lastId : ",lastId);
        setFormData((prevData: any) => ({
          ...prevData,
          seq: lastId + 1,
        }));
      } else {
        setFormData((prevData: any) => ({
          ...prevData,
          seq: 1,
        }));
      }
      */  
    }, []);
    
    const fetchAgentByCode = async (agentCode: string) => {
        let end_point = apiUrl + "agents/code/"+agentCode;
        axios
            .get(end_point)
            .then((response) => {
                //console.log(response);
                //setAgents(response.data);
                setFormData((prevData: any) => ({
                  ...prevData,
                  agent_name: response.data[0].name
                }));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const fetchProductPartner = async (cobrand_id: string) => {
        let end_point = apiUrl + "product/partner/cobrand/"+cobrand_id;
        axios
            .get(end_point)
            .then((response) => {
                console.log("list_product_partner : ",response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const fetchProductDetail = async (country_code: string,days: number,quota: string) => {
        let end_point = apiUrl + "product/partner/"+country_code+"/"+days+"/"+quota;
        axios
            .get(end_point)
            .then(async (response) => {

                const order_id  = userSession+generateTrxId();
                const order_date = currentDate();
                const order_agent_code = userLogin;

                console.log("list_product_partner_detail : ",response.data);
                setFormData((prevData: any) => ({
                  ...prevData,
                  product_id: response.data[0].package_id,
                  product_price: response.data[0].selling_price
                }))

                const paket_id = response.data[0].package_id;
                const paket_price = response.data[0].selling_price;
                const packet_name = response.data[0].package_name;

                //total product_price
                const total_product_price = formData.quantity * paket_price;
                console.log("total_product_price : ",total_product_price);

                /*
                const ccid = [
                    formData.ccid_1,
                    formData.ccid_2,
                    formData.ccid_3,
                    formData.ccid_4,
                    formData.ccid_5,
                    formData.ccid_6,
                    formData.ccid_7,
                    formData.ccid_8,
                    formData.ccid_9,
                    formData.ccid_10
                ];
                */
                
                let ccid : string[] = [];
                for(let i = 0; i < visibleFields.length; i++){
                    ccid[i] = formData[`ccid_${i+1}`];
                }
                console.log("ccid generate: ",ccid);

                let str_ccid = '';
                for(let i = 0; i < ccid.length; i++){
                    if(ccid[i] != ""){
                        str_ccid += ccid[i]+'|';
                    }else{
                        ccid[i] = '';
                    }
                }
                str_ccid = str_ccid.substring(0, str_ccid.length - 1);
                console.log("ccid : ",str_ccid);

                
                //add order
                const dataOrder = {
                    seq: 0,
                    order_id: order_id,
                    order_date: order_date,
                    order_type: formData.type,
                    order_status: 'New',
                    order_customer_name: formData.nama_pengguna,
                    order_contact_phone: formData.telp_pengguna,
                    order_contact_wa: formData.telp_pengguna,
                    order_contact_email: formData.email_pengguna,
                    order_agent_code: order_agent_code,
                    order_agent_name: formData.agent_name,
                    order_product: paket_id,
                    order_country_code: formData.country,
                    order_fup: formData.fup,
                    order_quota: formData.quota,
                    order_days: formData.days,
                    order_ccid: str_ccid,
                    order_qty: formData.quantity,
                    order_product_price: paket_price,
                    order_product_total_price: total_product_price,
                    package_name: packet_name
                }

                console.log("dataOrder : ",dataOrder);
                await addOrder(dataOrder);

                //add order events
                const event_date = currentDate();
                const dataOrderEvent = {
                    seq: 0,
                    order_id: order_id,
                    event_name: 'New Order',
                    event_date: event_date,
                    username: userName
                }
                await addOrderEvent(dataOrderEvent);

                router('/order/list');
                
            })
            .catch((error) => {
                //console.error('Error adding orders:', error);
                alert("Product not found");
            });
    }
    
    const handleChange = (e: { target: { name: any; value: any } }) => {
      const { name, value } = e.target;
      setFormData((prevData) => {
        const newFormData = { ...prevData, [name]: value };
        //const totals = calculateTotals(newFormData.orders);
        if(newFormData.package_type === "1" || newFormData.package_type === "2"){
            setIsSelectable(false);
        }else{
            setIsSelectable(true);
        }
        return {
          ...newFormData
        };
      });
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {

        console.log("data : ", formData);
        
        //get paket product
        fetchProductDetail(formData.country,formData.days,formData.fup);
        
        
        //await addProduct(formData);
        /*
        setFormData({
          seq: 0,
          package_id: '',
          package_name: '',
          country: '',
          days: 0,
          quota: '',
          selling_price: 0,
          status: '',
          cobrand_id: ''
        });
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
        
        router('/product/partner');
        */
      } catch (error) {
        console.error('Error adding orders:', error);
      }
    };
  
    const fetchCountryList = async () => {
          let end_point = apiUrl + "country";
          axios
              .get(end_point)
              .then((response) => {
                  setCountry(response.data);
              })
              .catch((error) => {
                  console.log(error);
              });
    }


    const addOrder = async (order: orderList) => {
            try {
                const response = await axios.post(ApiConfig.apiUrl + 'orders', order);
                const addOrder = response.data;
                //setProducts((prevProduct) => [...prevProduct, addOrder]);
            } catch (error) {
                console.error('Error adding orders:', error);
            }
    };

    const addOrderEvent = async (orderEvent: orderEventList) => {
        try {
            const response = await axios.post(ApiConfig.apiUrl + 'order/event', orderEvent);
            const addOrderEvent = response.data;
        } catch (error) {
            console.error('Error adding order events :', error);
        }
    };


    //const parsedDate = isValid(new Date(formData.date)) ? new Date(formData.date) : new Date();
    //const formattedOrderDate = format(parsedDate, 'EEEE, MMMM dd, yyyy');
    
    /*
    const fetchPartnerList = async () => {
        let end_point = apiUrl + "partners";
        axios
            .get(end_point)
            .then((response) => {
                //console.log(response);
                setPartners(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
  
    const fetchAgentListCobrand = async (cobrand_id:string) => {
        let end_point = apiUrl + "agents/cobrand/"+cobrand_id;
        axios
            .get(end_point)
            .then((response) => {
              setAgents(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
  }
  */
 
  //generate text box
  const totalFields = 30; // Max ICCID fields
  const fields = Array.from({ length: totalFields }, (_, i) => i + 1);
  const columns = 3; // Jumlah kolom per baris

  const visibleFields = fields.slice(0, formData.quantity); // quantity dari state/form

  const groupedFields = [];
    for (let i = 0; i < visibleFields.length; i += columns) {
    groupedFields.push(visibleFields.slice(i, i + columns));
  }
  


  return (
    <PageContainer title="Create Simcard / eSIM" description="this is Create Simcard/eSIM">
        <Breadcrumb title="Create Simcard / eSIM" items={BCrumb} />
        <BlankCard>
          <CardContent>
            <form onSubmit={handleSubmit}>
                <Box>
                    <Stack
                    direction="row"
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    justifyContent="space-between"
                    mb={3}
                    >
                    <Typography variant="h5">#USER: {userName}</Typography>
                    <Box display="flex" gap={1}>
                        <Button
                        variant="outlined"
                        color="error"
                        onClick={() => {
                            router('/order/list');
                        }}
                        >
                        Cancel
                        </Button>
                        <Button type="submit" variant="contained" color="primary">
                        Save Record
                        </Button>
                    </Box>
                    </Stack>
                    <Divider></Divider>
                    <Grid container spacing={3}>
                        <Grid
                            size={{
                            xs: 12,
                            sm: 4
                            }}>
                            <CustomFormLabel
                            htmlFor="PackageName"
                            sx={{
                                mt: {
                                xs: 0,
                                sm: 3,
                                },
                            }}
                            >
                            Nama Pengguna 
                            </CustomFormLabel>
                            <CustomTextField
                                id="nama_pengguna"
                                name="nama_pengguna"
                                value={formData.nama_pengguna}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid
                            size={{
                            xs: 12,
                            sm: 4
                            }}>
                            <CustomFormLabel
                            htmlFor="PackageName"
                            sx={{
                                mt: {
                                xs: 0,
                                sm: 3,
                                },
                            }}
                            >
                            Nomor Telepon Pengguna
                            </CustomFormLabel>
                            <CustomTextField
                                id="telp_pengguna"
                                name="telp_pengguna"
                                value={formData.telp_pengguna}
                                onChange={handleChange}
                                fullWidth
                                type="phone"
                            />
                        </Grid>
                        <Grid
                            size={{
                            xs: 12,
                            sm: 4
                            }}>
                            <CustomFormLabel
                            htmlFor="PackageName"
                            sx={{
                                mt: {
                                xs: 0,
                                sm: 3,
                                },
                            }}
                            >
                            Email Pengguna
                            </CustomFormLabel>
                            <CustomTextField
                                id="email_pengguna"
                                name="email_pengguna"
                                value={formData.email_pengguna}
                                onChange={handleChange}
                                fullWidth
                                type="email"
                            />
                        </Grid>
                        <Grid
                            size={{
                            xs: 12,
                            sm: 4
                            }}>
                            <CustomFormLabel
                            htmlFor="PackageName"
                            sx={{
                                mt: {
                                xs: 0,
                                sm: 3,
                                },
                            }}
                            >
                            Type
                            </CustomFormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={formData.type}
                                onChange={handleChange}
                                id='type'
                                name="type"
                                row
                            >
                                <FormControlLabel value="Simcard" control={<Radio />} label="Simcard" />
                                <FormControlLabel value="eSIM" control={<Radio />} label="eSIM" />
                            </RadioGroup>
                        </Grid>

                        <Grid
                            size={{
                            xs: 12,
                            sm: 4
                            }}>
                            <CustomFormLabel
                            htmlFor="PackageName"
                            sx={{
                                mt: {
                                xs: 0,
                                sm: 3,
                                },
                            }}
                            >
                            Country
                            </CustomFormLabel>
                            <CustomSelect
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                fullWidth
                                >
                                {country.map((item: any) => (
                                    <MenuItem key={item.seq} value={item.country_code}>{item.country_list}</MenuItem>
                                ))}
                            </CustomSelect>
                        </Grid>
                        <Grid
                            size={{
                            xs: 12,
                            sm: 4
                            }}>
                                &nbsp;
                        </Grid>
                        <Grid
                            size={{
                            xs: 12,
                            sm: 4
                            }}>
                            <CustomFormLabel
                            htmlFor="PackageName"
                            sx={{
                                mt: {
                                xs: 0,
                                sm: 3,
                                },
                            }}
                            >
                                Product Type
                            </CustomFormLabel>   
                            <RadioGroup
                                aria-labelledby="radio-buttons-group-package"
                                value={formData.package_type}
                                onChange={handleChange}
                                id='package_type'
                                name="package_type"
                                row
                            >
                                <FormControlLabel value="1" control={<Radio />} label="Unlimited" />
                                <FormControlLabel value="2" control={<Radio />} label="Quota Based" />
                            </RadioGroup>
                        </Grid>
                        <Grid
                            size={{
                            xs: 12,
                            sm: 4
                            }}>
                            <CustomFormLabel
                            htmlFor="PackageName"
                            sx={{
                                mt: {
                                xs: 0,
                                sm: 3,
                                },
                            }}
                            >
                                Product Package
                            </CustomFormLabel>
                            {formData.package_type === "1" ? (
                                <CustomSelect
                                    id="fup"
                                    name="fup"
                                    value={formData.fup}
                                    onChange={handleChange}
                                    fullWidth
                                    >
                                    {fupPackage.map((item: any) => (
                                        <MenuItem key={item.id} value={item.value}>{item.label}</MenuItem>
                                    ))}
                                </CustomSelect> 
                            ) : (
                                formData.package_type === "2" ? (
                                    <CustomSelect
                                        id="quota"
                                        name="quota"
                                        value={formData.quota}
                                        onChange={handleChange}
                                        fullWidth
                                        >
                                        {quotaPackage.map((item: any) => (
                                            <MenuItem key={item.id} value={item.value}>{item.label}</MenuItem>
                                        ))}
                                    </CustomSelect> 
                                ) : (
                                    <CustomSelect
                                        id="package"
                                        name="package"
                                        fullWidth
                                        disabled
                                        >
                                        <MenuItem value="">Select Package</MenuItem>
                                    </CustomSelect>
                                )  
                            )
                            }
                        </Grid>
                        <Grid
                            size={{
                            xs: 12,
                            sm: 4
                            }}>
                            <CustomFormLabel
                            htmlFor="Days"
                            sx={{
                                mt: {
                                xs: 0,
                                sm: 3,
                                },
                            }}
                            >
                                Days
                            </CustomFormLabel>
                            <CustomSelect
                                id="days"
                                name="days"
                                value={formData.days}
                                onChange={handleChange}
                                fullWidth
                                disabled={isSelectable} 
                                >
                                {daysPackage.map((item: any) => (
                                    <MenuItem key={item.id} value={item.value}>{item.label}</MenuItem>
                                ))}
                            </CustomSelect> 
                        </Grid>
                        {/*
                        <Grid
                            size={{
                            xs: 12,
                            sm: 4
                            }}>
                            &nbsp;
                        </Grid>                 
                        <Grid
                            size={{
                            xs: 12,
                            sm: 5
                            }}>
                            <CustomFormLabel
                            htmlFor="PackageName"
                            sx={{
                                mt: {
                                xs: 0,
                                sm: 3,
                                },
                            }}
                            >
                            FUP/day  
                            </CustomFormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={formData.fup}
                                onChange={handleChange}
                                id='fup'
                                name="fup"
                                row
                            >
                                <FormControlLabel value="500" control={<Radio />} label="500mb" />
                                <FormControlLabel value="1000" control={<Radio />} label="1gb" />
                                <FormControlLabel value="2000" control={<Radio />} label="2gb" />
                                <FormControlLabel value="3000" control={<Radio />} label="3gb" />
                                <FormControlLabel value="5000" control={<Radio />} label="5gb" />
                            </RadioGroup>
                        </Grid>
                        <Grid
                            size={{
                            xs: 12,
                            sm: 12
                            }}>
                            <CustomFormLabel
                            htmlFor="PackageName"
                            sx={{
                                mt: {
                                xs: 0,
                                sm: 3,
                                },
                            }}
                            >
                            Quota Based
                            </CustomFormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={formData.quota}
                                onChange={handleChange}
                                id='quota'
                                name="quota"
                                row
                            >
                                <FormControlLabel value="3000" control={<Radio />} label="3GB" />
                                <FormControlLabel value="5000" control={<Radio />} label="5GB" />
                                <FormControlLabel value="6000" control={<Radio />} label="6GB" />
                                <FormControlLabel value="7000" control={<Radio />} label="7GB" />
                                <FormControlLabel value="10000" control={<Radio />} label="10GB" />
                                <FormControlLabel value="15000" control={<Radio />} label="15GB" />
                                <FormControlLabel value="20000" control={<Radio />} label="20GB" />
                                <FormControlLabel value="30000" control={<Radio />} label="30GB" />
                            </RadioGroup>
                        </Grid>
                        <Grid
                            size={{
                            xs: 12,
                            sm: 10
                            }}>
                            <CustomFormLabel
                            htmlFor="PackageName"
                            sx={{
                                mt: {
                                xs: 0,
                                sm: 3,
                                },
                            }}
                            >
                            Days
                            </CustomFormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={formData.days}
                                onChange={handleChange}
                                id='days'
                                name="days"
                                row
                            >
                                <FormControlLabel value="1" control={<Radio />} label="01" />
                                <FormControlLabel value="2" control={<Radio />} label="02" />
                                <FormControlLabel value="3" control={<Radio />} label="03" />
                                <FormControlLabel value="4" control={<Radio />} label="04" />
                                <FormControlLabel value="5" control={<Radio />} label="05" />
                                <FormControlLabel value="6" control={<Radio />} label="06" />
                                <FormControlLabel value="7" control={<Radio />} label="07" />
                                <FormControlLabel value="8" control={<Radio />} label="08" />
                                <FormControlLabel value="10" control={<Radio />} label="10" />
                                <FormControlLabel value="12" control={<Radio />} label="12" />
                                <FormControlLabel value="15" control={<Radio />} label="15" />
                                <FormControlLabel value="20" control={<Radio />} label="20" />
                                <FormControlLabel value="30" control={<Radio />} label="30" />
                            </RadioGroup>
                        </Grid>
                        */}
                        <Grid
                            size={{
                            xs: 12,
                            sm: 2
                            }}>
                            <CustomFormLabel
                            htmlFor="PackageName"
                            sx={{
                                mt: {
                                xs: 0,
                                sm: 3,
                                },
                            }}
                            >
                            Quantity
                            </CustomFormLabel>
                            <CustomSelect
                                id="quantity"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                fullWidth
                                disabled={isSelectable}
                                >
                                {quantityPackage.map((item: any) => (
                                    <MenuItem key={item.id} value={item.value}>{item.label}</MenuItem>
                                ))}
                            </CustomSelect>
                        </Grid>
                    </Grid>
                    <Grid
                        size={{
                            xs: 12,
                            sm: 12
                            }}>
                        <CustomFormLabel
                            htmlFor="title_price"
                            sx={{
                                mt: 3,
                                mb: 2
                            }}
                            >
                            ICCID - (eSIM tdk perlu di isi) 
                        </CustomFormLabel>       
                    </Grid>
                    {groupedFields.map((group, rowIndex) => (
                    <Grid container spacing={2} key={rowIndex}>
                        {group.map((num) => (
                            <React.Fragment key={num}>
                                <Grid size={{
                                        xs: 12,
                                        sm: 1
                                    }}>
                                    <CustomFormLabel
                                        htmlFor={`ccid_${num}`}
                                        sx={{ mt: 1, textAlign: 'center' }}
                                    >
                                        {num}.
                                    </CustomFormLabel>
                                </Grid>
                                <Grid size={{
                                        xs: 12,
                                        sm: 3
                                    }}>
                                    <CustomTextField
                                        id={`ccid_${num}`}
                                        name={`ccid_${num}`}
                                        value={formData[`ccid_${num}`] || ''}
                                        onChange={handleChange}
                                        fullWidth
                                        sx={{ mt: 1 }}
                                    />
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                    ))}
                    {/** 
                    <Grid
                        size={{
                            xs: 12,
                            sm: 12
                            }}>
                            <CustomFormLabel
                            htmlFor="selling_price"
                            sx={{
                                mt: 2,
                                mb: 2
                            }}
                            >
                            ICCID - (eSIM tdk perlu di isi) 
                        </CustomFormLabel>
                        <Grid container spacing={2}>
                            <Grid
                                size={{
                                xs: 12,
                                sm: 1
                                }}>
                                <CustomFormLabel
                                    htmlFor="selling_price"
                                    sx={{
                                        mt: 1,
                                        textAlign: 'center'
                                    }}
                                    >
                                    1.
                                </CustomFormLabel> 
                            </Grid>
                            <Grid
                                size={{
                                xs: 12,
                                sm: 3
                                }}>
                                <CustomTextField
                                    id="ccid_1"
                                    name="ccid_1"
                                    value={formData.ccid_1}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid
                                size={{
                                xs: 12,
                                sm: 1
                                }}>
                                <CustomFormLabel
                                    htmlFor="selling_price"
                                    sx={{
                                        mt: 1,
                                        textAlign: 'center'
                                    }}
                                    >
                                    2.
                                </CustomFormLabel> 
                            </Grid>
                            <Grid
                                size={{
                                xs: 12,
                                sm: 3
                                }}>
                                <CustomTextField
                                    id="ccid_2"
                                    name="ccid_2"
                                    value={formData.ccid_2}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid
                                size={{
                                xs: 12,
                                sm: 1
                                }}>
                                <CustomFormLabel
                                    htmlFor="selling_price"
                                    sx={{
                                        mt: 1,
                                        textAlign: 'center'
                                    }}
                                    >
                                    3.
                                </CustomFormLabel> 
                            </Grid>
                            <Grid
                                size={{
                                xs: 12,
                                sm: 3
                                }}>
                                <CustomTextField
                                    id="ccid_3"
                                    name="ccid_3"
                                    value={formData.ccid_3}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid
                                size={{
                                xs: 12,
                                sm: 1
                                }}>
                                <CustomFormLabel
                                    htmlFor="selling_price"
                                    sx={{
                                        mt: 1,
                                        textAlign: 'center'
                                    }}
                                    >
                                    4.
                                </CustomFormLabel> 
                            </Grid>
                            <Grid
                                size={{
                                xs: 12,
                                sm: 3
                                }}>
                                <CustomTextField
                                    id="ccid_4"
                                    name="ccid_4"
                                    value={formData.ccid_4}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid
                                size={{
                                xs: 12,
                                sm: 1
                                }}>
                                <CustomFormLabel
                                    htmlFor="selling_price"
                                    sx={{
                                        mt: 1,
                                        textAlign: 'center'
                                    }}
                                    >
                                    5.
                                </CustomFormLabel> 
                            </Grid>
                            <Grid
                                size={{
                                xs: 12,
                                sm: 3
                                }}>
                                <CustomTextField
                                    id="ccid_5"
                                    name="ccid_5"
                                    value={formData.ccid_5}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid
                                size={{
                                xs: 12,
                                sm: 1
                                }}>
                                <CustomFormLabel
                                    htmlFor="selling_price"
                                    sx={{
                                        mt: 1,
                                        textAlign: 'center'
                                    }}
                                    >
                                    6.
                                </CustomFormLabel> 
                            </Grid>
                            <Grid
                                size={{
                                xs: 12,
                                sm: 3
                                }}>
                                <CustomTextField
                                    id="ccid_6"
                                    name="ccid_6"
                                    value={formData.ccid_6}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid
                                size={{
                                xs: 12,
                                sm: 1
                                }}>
                                <CustomFormLabel
                                    htmlFor="selling_price"
                                    sx={{
                                        mt: 1,
                                        textAlign: 'center'
                                    }}
                                    >
                                    7.
                                </CustomFormLabel> 
                            </Grid>
                            <Grid
                                size={{
                                xs: 12,
                                sm: 3
                                }}>
                                <CustomTextField
                                    id="ccid_7"
                                    name="ccid_7"
                                    value={formData.ccid_7}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid
                                size={{
                                xs: 12,
                                sm: 1
                                }}>
                                <CustomFormLabel
                                    htmlFor="selling_price"
                                    sx={{
                                        mt: 1,
                                        textAlign: 'center'
                                    }}
                                    >
                                    8.
                                </CustomFormLabel> 
                            </Grid>
                            <Grid
                                size={{
                                xs: 12,
                                sm: 3
                                }}>
                                <CustomTextField
                                    id="ccid_8"
                                    name="ccid_8"
                                    value={formData.ccid_8}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid
                                size={{
                                xs: 12,
                                sm: 1
                                }}>
                                <CustomFormLabel
                                    htmlFor="selling_price"
                                    sx={{
                                        mt: 1,
                                        textAlign: 'center'
                                    }}
                                    >
                                    9.
                                </CustomFormLabel> 
                            </Grid>
                            <Grid
                                size={{
                                xs: 12,
                                sm: 3
                                }}>
                                <CustomTextField
                                    id="ccid_9"
                                    name="ccid_9"
                                    value={formData.ccid_9}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid
                                size={{
                                xs: 12,
                                sm: 1
                                }}>
                                <CustomFormLabel
                                    htmlFor="selling_price"
                                    sx={{
                                        mt: 1,
                                        textAlign: 'center'
                                    }}
                                    >
                                    10.
                                </CustomFormLabel> 
                            </Grid>
                            <Grid
                                size={{
                                xs: 12,
                                sm: 3
                                }}>
                                <CustomTextField
                                    id="ccid_10"
                                    name="ccid_10"
                                    value={formData.ccid_10}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    */}
                    {showAlert && (
                    <Alert severity="success" sx={{ position: 'fixed', top: 16, right: 16 }}>
                        Order created successfully.
                    </Alert>
                    )}
                </Box>
            </form>
          </CardContent>
        </BlankCard>
      </PageContainer>
  );
};
export default CreateOrder;
