
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
  Icon,
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

import { numberFormat, partnerList, formatDate } from "src/utils/Utils";
import { useNavigate } from 'react-router';


import { useEffect, useState } from 'react';
import { IconPlus, IconRefresh } from '@tabler/icons-react';

//api
import axios from 'src/api/axios';
import { jwtDecode } from 'jwt-decode';

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
    const [tittle, setTittle] = React.useState("");

    const [listArrageCCID, setListArrageCCID] = React.useState([]);
    //const [productMaster, setProductMaster] = React.useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const router = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken:any = jwtDecode(token);

            console.log('user_name:', decodedToken.user_name);
            console.log('session_name:', decodedToken.session_name);
            console.log('session_level:', decodedToken.session_level);
            console.log('last_login_time:', decodedToken.last_login_time);
            console.log('blocked:', decodedToken.blocked);
            
            setUserLevel(decodedToken.session_level);
            setUserSession(decodedToken.session_name);

            if(decodedToken.session_level.toLowerCase() === 'partner' || decodedToken.session_level.toLowerCase() === 'partner-admin'){
                //const user_login = parsedData.session_name.split('-')[0];
                //fetchAgentListCobrand(user_login);
                fetchAgentListCobrand((decodedToken.session_name));
                setTittle('Move Simcard to Agent');
            }else{
                //load inventory
                fetchPartnerList();
                setTittle('Move Simcard to Partner');
            }
        }else{
            router('/auth/login');
        }    

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
        let end_point = "partners";
        axios
            .get(end_point)
            .then((response) => {
                setPartners(response.data);
            })
            .catch((error) => {
                //console.log(error);
                if (error.response && error.response.status === 403 || error.response.status === 401) {
                    // Token expired → redirect ke login
                    router('/auth/login');
                } else {
                    console.log(error);
                }
            });
    }

    const fetchAgentListCobrand = async (cobrand_id:string) => {
        let end_point = "agents/cobrand/"+cobrand_id;
        axios
            .get(end_point)
            .then((response) => {
                setAgents(response.data);
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

        if(userLevel.toLowerCase() === 'partner' || userLevel.toLowerCase() === 'partner-admin'){
            cobrand_id = userSession.split('-')[0];
            agent_code = agentCode;
        }else{
            cobrand_id = partnerID;
            agent_code = agentCode;
        }
        
        let end_point = "inventory/ccid?ccidstart="+ccidStart+"&ccidend="+ccidEnd+"&cobrand_id="+cobrand_id+"&agent_code="+agent_code;
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
                if (error.response && error.response.status === 403 || error.response.status === 401) {
                    // Token expired → redirect ke login
                    router('/auth/login');
                } else {
                    console.log(error);
                }
            });
        
    };

    const handleAddPartner = () => {
        localStorage.setItem('mode', 'move_simcard');
        router('/apps/partner/create');
    }

    return (
        <PageContainer title="Inventory" description="this is inventory page">
            {/*<Breadcrumb title="Inventory" items={BCrumb} />8*/}
            <ParentCard title={tittle}>
                <Box mt={2}>
                    <Grid size={{ xs: 12 }}>
                        <Grid container spacing={2}>
                            {userLevel.toLowerCase() === 'partner' || userLevel.toLowerCase() === 'partner-admin' ? (
                                <Grid size={{ xs: 3 }}>
                                    <Typography variant="subtitle1" mt={1} mb={1}>
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
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        <Typography variant="subtitle1">
                                            Move to Partner 
                                        </Typography>
                                        <IconButton onClick={() => handleAddPartner()}>
                                            <Tooltip title="Add Partner">
                                                <IconPlus />
                                            </Tooltip> 
                                        </IconButton>
                                    </Stack>     
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
                            <Grid size={{ xs: 3}}>
                                <Typography variant="subtitle1" mt={1} mb={1}>
                                    ICCID Serial From (19 digit awal)
                                </Typography>
                                <CustomTextField
                                    fullWidth
                                    value={ccidStart}
                                    onChange={(e) => setCCIDStart(e.target.value)}
                                />
                            </Grid>
                            <Grid size={{ xs: 3 }}>
                                <Typography variant="subtitle1" mt={1} mb={1}>
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
                                <Typography variant="subtitle1" mt={1} mb={1}>
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
            </ParentCard>
        </PageContainer>
    );
}
export default MoveSIMCard;