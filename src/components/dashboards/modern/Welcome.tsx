import * as React from 'react';
import { Box, CardContent, Chip, Grid2 as Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
//api
import ApiConfig  from "src/constants/apiConstants";
import { useEffect } from 'react';
//import axios from 'axios';
import { IconSearch, IconTrash } from '@tabler/icons-react';
import { useNavigate } from 'react-router';
import { numberFormat, invSummaryAgent, formatDate } from "src/utils/Utils";
import page from 'src/components/react-tables/basic/page';
import { jwtDecode } from 'jwt-decode';

//const apiUrl = ApiConfig.apiUrl;
import axios from 'src/api/axios';

const WelcomeHome = () => {
    const router = useNavigate();
    const [userName,setUserName] = React.useState('');
    const [userLevel, setUserLevel] = React.useState('');
    const [userSession, setUserSession] = React.useState('');
    

    useEffect(() => {
            const token = localStorage.getItem('token');
            if (token) {
                const decoded:any = jwtDecode(token);
                console.log("decoded: ",decoded);

                setUserName(decoded.user_name);
                setUserLevel(decoded.session_level);
                setUserSession(decoded.session_name);
    
                if(decoded.session_level.toLowerCase() === 'partner' || decoded.session_level.toLowerCase() === 'partner-admin'){
                    const user_login = decoded.session_name.split('-')[0];
                    fetchInventorySummaryPartner(user_login);
                }else if(decoded.session_level.toLowerCase() === 'agent-manager'){
                    fetchInventorySummaryAgent(decoded.session_name);
                }else if(decoded.session_level.toLowerCase() === 'agent-admin'){
                    fetchInventorySummaryAgent(decoded.session_name);    
                }else{
                    fetchInventorySummaryAll();
                }
            }else{
                router('/auth/login');
            }   
    }, []);

    //inventory summary
    const fetchInventorySummaryAgent = async (agent_code:string) => {
        let end_point = "inventory/summary/agent/"+agent_code;
        axios
            .get(end_point)
            .then((response) => {
                setInventorySummary(response.data);
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

    const fetchInventorySummaryPartner = async (partner_code:string) => {
            let end_point = "inventory/summary/partner/"+partner_code;
            axios
                .get(end_point)
                .then((response) => {
                    setInventorySummary(response.data);
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
    
    const fetchInventorySummaryAll = async () => {
        let end_point = "inventory/summary/all"
        axios
                .get(end_point)
                .then((response) => {
                    setInventorySummary(response.data);
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
    const [inventorySummary, setInventorySummary] = React.useState([]);
    const rows: invSummaryAgent[] = inventorySummary;
    //const rows: OrderListType[] = orderList;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
        
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    const handleChangePage = (event: any, newPage: any) => {
        setPage(newPage);
    };
        
    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    
    const sumTotalRow = () => {
        let total = 0;
        rows.forEach(async (row) => {
            total = row.quantity + total;
        });
    
        return total;
    }

    return (
        (<Grid container spacing={3}>
            <Grid
                size={{
                    xs: 12
                }}>
                <Typography variant="subtitle2" fontSize={14} fontWeight="500">Inventory Summary</Typography>
            </Grid>
            <Grid size={{
                    xs: 12
                }}>
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
                                        <Typography variant="subtitle2">Partner ID</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Agent ID</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Sim Type</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Status</Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography variant="subtitle2">Quantity</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {(rowsPerPage > 0
                                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows
                                ).map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <Typography variant="subtitle2">{index+1}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="textSecondary" variant="subtitle2" fontWeight="400">
                                            {row.cobrand_id}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="textSecondary" variant="subtitle2" fontWeight="400">
                                            {row.agent_code}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="textSecondary" variant="subtitle2" fontWeight="400">
                                            {row.sim_type}  
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="textSecondary" variant="subtitle2" fontWeight="400">
                                            <Chip
                                                color={
                                                row.status === 'Ready'
                                                ? 'success'
                                                    : row.status === 'Open'
                                                        ? 'warning'
                                                    : row.status == 'Used'
                                                        ? 'error': 'secondary'
                                                }
                                                sx={{borderRadius: '6px',}}
                                                size="small"
                                                label={row.status}
                                            />
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography color="textSecondary" variant="subtitle2" fontWeight="400">
                                            {numberFormat(row.quantity)}  
                                        </Typography>
                                    </TableCell>
                                    
                                </TableRow>
                                ))}
                                <TableRow style={{ height: 53 * emptyRows }} sx={{ backgroundColor: '#f5f5f5' }}>
                                    <TableCell colSpan={5}><Typography variant="subtitle2" fontSize={16} fontWeight="600">Total</Typography></TableCell>
                                    <TableCell align="right">
                                        <Typography color="textSecondary" variant="subtitle2" fontWeight="600">
                                            {numberFormat(sumTotalRow())}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                                )}
                            </TableBody>
                            {/*
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                        colSpan={6}
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
                            */}
                        </Table>
                    </TableContainer>
            </Grid>
        </Grid>)
    );
}

export default WelcomeHome;