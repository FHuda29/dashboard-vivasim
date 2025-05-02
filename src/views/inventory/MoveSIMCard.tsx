
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
  Alert,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import PageContainer from 'src/components/container/PageContainer';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import ParentCard from 'src/components/shared/ParentCard';
import BlankCard from 'src/components/shared/BlankCard';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

import { numberFormat, partnerList, formatDate } from "src/utils/Utils";
import { useNavigate } from 'react-router';

//api
import ApiConfig  from "src/constants/apiConstants";
import { useEffect, useState } from 'react';
import axios from 'axios';


const apiUrl = ApiConfig.apiUrl;
const BCrumb = [
    {
      to: '/',
      title: 'Home',
    },
    {
      title: 'Inventory',
    },
];


const MoveSIMCard = () => {
    const [userLevel, setUserLevel] = React.useState("");
    const [userSession, setUserSession] = React.useState("");

    const [listArrageCCID, setListArrageCCID] = React.useState([]);
    //const [productMaster, setProductMaster] = React.useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const router = useNavigate();

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

          if(parsedData.session_level.toLowerCase() === 'partner'){
            //const user_login = parsedData.session_name.split('-')[0];
            //fetchAgentListCobrand(user_login);
            fetchAgentListCobrand((parsedData.session_name));
          }else{
            //load inventory
            fetchPartnerList();
          }
        }else{
          router('/auth/login');
        }

        //fetchPartnerList();
        //fetchProductMaster();
    }, []);

    const [partners, setPartners] = React.useState([]);
    const partnerList: partnerList[] = partners;
    const [agents, setAgents] = React.useState([]);

    const [partnerID, setPartnerID] = React.useState("");
    const [agentCode, setAgentCode] = React.useState("");

    const [ccidStart, setCCIDStart] = React.useState("");
    const [ccidEnd, setCCIDEnd] = React.useState("");
    const [productPackage, setProductPackage] = React.useState("");
    const [confirmStatus, setConfirmStatus] = React.useState("");

    //const [partnerID, setPartnerID] = useState<string>('');

    //get partner
    const fetchPartnerList = async () => {
        let end_point = apiUrl + "partners";
        axios
            .get(end_point)
            .then((response) => {
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

    /*
    const fetchProductMaster = async () => {
        let end_point = apiUrl + "products";
        axios
            .get(end_point)
            .then((response) => {
                //console.log(response);
                setProductMaster(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    */

    
    const handleMove = () => {
        //setOpenDeleteDialog(true);
        console.log('move');
        console.log(partnerID);
        console.log(agentCode);
        console.log(ccidStart);
        console.log(ccidEnd);
        console.log(confirmStatus);
        //console.log(productPackage);
        let cobrand_id = '';
        let agent_code = '';

        if(userLevel.toLowerCase() === 'partner'){
            cobrand_id = userSession.split('-')[0];
            agent_code = agentCode;
        }else{
            cobrand_id = partnerID;
            agent_code = agentCode;
        }
        
        let end_point = apiUrl + "inventory/ccid?ccidstart="+ccidStart+"&ccidend="+ccidEnd+"&cobrand_id="+cobrand_id+"&agent_code="+agent_code;
        //console.log(end_point);

        axios
            .get(end_point)
            .then((response) => {
                console.log("res: ",response);
                const rest = response.data;
                //setListArrageCCID(response.data);
                //const listdatas = response.data;
                /*
                listdatas.map((datas, index) => (
                    console.log("datas:  ",index +": "+ datas.iccid)
                ))
                */
                if(rest.success){
                    setShowAlert(true);
                    setTimeout(() => {
                        setShowAlert(false);
                      }, 5000);
                      
                    router('/inventory/list');
                }else{
                    alert(rest.message);
                }
            })
            .catch((error) => {
                console.log(error);
            });
        
    };

    return (
        <PageContainer title="Inventory" description="this is inventory page">
            <Breadcrumb title="Inventory" items={BCrumb} />
            <ParentCard title="Move Simcard to Partner">
                <BlankCard>
                <Box mt={2} mb={2}>
                    <Grid size={{ xs: 12 }}>
                        <Grid container spacing={2}>
                            {userLevel.toLowerCase() === 'partner' ? (
                                <Grid size={{ xs: 3 }}>
                                <Typography variant="subtitle1">
                                    Move to Agent 
                                </Typography>
                                <CustomSelect
                                    fullWidth
                                    variant="outlined"
                                    value={agentCode || ''}
                                    onChange={(e) => setAgentCode(e.target.value)}
                                    >
                                    {agents.map((option) => (
                                        <MenuItem key={option.seq} value={option.agent_code}>
                                        {option.agent_code} - {option.name}
                                        </MenuItem>
                                    ))}
                                </CustomSelect>
                            </Grid>
                            ):(
                                <Grid size={{ xs: 3 }}>
                                    <Typography variant="subtitle1">
                                        Move to Partner
                                    </Typography>
                                    <CustomSelect
                                        fullWidth
                                        variant="outlined"
                                        value={partnerID || ''}
                                        onChange={(e) => setPartnerID(e.target.value)}
                                        >
                                        {partnerList.map((option) => (
                                            <MenuItem key={option.seq} value={option.cobrand_id}>
                                            {option.cobrand_id} - {option.cobrand_name}
                                            </MenuItem>
                                        ))}
                                    </CustomSelect>
                                </Grid>
                            )}
                            <Grid size={{ xs: 3 }}>
                                <Typography variant="subtitle1">
                                    ICCID Serial From (19 digit awal)
                                </Typography>
                                <CustomTextField
                                    fullWidth
                                    value={ccidStart}
                                    onChange={(e) => setCCIDStart(e.target.value)}
                                />
                            </Grid>
                            <Grid size={{ xs: 3 }}>
                                <Typography variant="subtitle1">
                                    ICCID Serial To (19 digit awal) 
                                </Typography>
                                <CustomTextField
                                    fullWidth
                                    value={ccidEnd}
                                    onChange={(e) => setCCIDEnd(e.target.value)}
                                />
                            </Grid>
                            {/*
                            <Grid size={{ xs: 2 }}>
                                <Typography variant="subtitle1">
                                Product Package
                                </Typography>
                                <CustomSelect
                                    fullWidth
                                    variant="outlined"
                                    value={productPackage || ''}
                                    onChange={(e) => setProductPackage(e.target.value)}
                                >
                                    {productMaster.map((option) => (
                                        <MenuItem key={option.seq} value={option.package_id}>
                                        {option.package_name}
                                        </MenuItem>
                                    ))}
                                </CustomSelect>
                            </Grid>
                            */}
                            <Grid size={{ xs: 3 }}>
                                <Typography variant="subtitle1">
                                Confirm Move ?
                                </Typography>
                                <CustomSelect
                                    fullWidth
                                    variant="outlined"
                                    value={confirmStatus || ''}
                                    onChange={(e) => setConfirmStatus(e.target.value)}
                                >
                                    <MenuItem value={1}>No</MenuItem>
                                    <MenuItem value={2}>Yes</MenuItem>
                                </CustomSelect>
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <Button
                                    variant="contained" 
                                    color="primary"
                                    onClick={handleMove}
                                >
                                    Move
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>    
                    </Box>
                    <Box display="flex" gap={1}>
                        
                    </Box>
                    {showAlert && (
                        <Alert severity="success" sx={{ position: 'fixed', top: 16, right: 16 }}>
                            Move Simcard successfully.
                        </Alert>
                    )}
                </BlankCard>
            </ParentCard>
        </PageContainer>
    );
}
export default MoveSIMCard;