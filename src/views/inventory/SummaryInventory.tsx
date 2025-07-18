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
import { IconEdit, IconEye, IconHistory } from '@tabler/icons-react';
import { numberFormat, invSummaryAgent, formatDate } from "src/utils/Utils";
import { useEffect } from 'react';
import { IconSearch, IconTrash } from '@tabler/icons-react';
import { useNavigate } from 'react-router';

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
      title: 'Inventory',
    },
];

const SummaryInventory = () => {
    const router = useNavigate();
    const [userName,setUserName] = React.useState('');
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

            if(decodedToken.session_level.toLowerCase() === 'partner' || decodedToken.session_level.toLowerCase() === 'partner-admin'){
                const user_login = decodedToken.session_name.split('-')[0];
                fetchInventorySummaryPartner(user_login);
            }else if(decodedToken.session_level.toLowerCase() === 'agent-manager'){
                fetchInventorySummary(decodedToken.session_name);
            }else if(decodedToken.session_level.toLowerCase() === 'agent-admin'){
                fetchInventorySummary(decodedToken.session_name);    
            }else{
                fetchInventorySummaryAll();
            }
        }else{
            router('/auth/login');
        }    
    }, []);

    //inventory summary
    const fetchInventorySummary = async (agent_code:string) => {
        let end_point = "inventory/summary/agent/"+agent_code;
        axios
            .get(end_point)
            .then((response) => {
                setInventorySummary(response.data);
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

    const fetchInventorySummaryPartner = async (partner_code:string) => {
        let end_point = "inventory/summary/partner/"+partner_code;
        axios
            .get(end_point)
            .then((response) => {
                setInventorySummary(response.data);
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

    const fetchInventorySummaryAll = async () => {
        let end_point = "inventory/summary/all"
        axios
            .get(end_point)
            .then((response) => {
                setInventorySummary(response.data);
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

    //const [orderList, setOrderList] = React.useState([]); 
    const [inventorySummary, setInventorySummary] = React.useState([]);
    const rows: invSummaryAgent[] = inventorySummary;

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

    const sumTotalRow = () => {
        let total = 0;
        rows.forEach(async (row) => {
            total = row.quantity + total;
        });

        return total;
    }

    return (
        <PageContainer title="Inventory Summary" description="this is inventory summary page">
            {/*<Breadcrumb title="Inventory Summary" items={BCrumb} />*/}
            <ParentCard title="Summary List">
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
                                <TableRow style={{ height: 53 * emptyRows }}>
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
                </BlankCard>
            </ParentCard>
        </PageContainer>
    );
}
export default SummaryInventory;