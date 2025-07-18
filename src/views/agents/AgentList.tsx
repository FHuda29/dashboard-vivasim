// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as React from 'react';

import { useTheme } from '@mui/material/styles';
import {
  Typography,
  TableHead,
  Avatar,
  Chip,
  Box,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  TableFooter,
  IconButton,
  TableContainer,
  Stack,
  TextField,
  InputAdornment,
  Button
} from '@mui/material';

import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import ParentCard from 'src/components/shared/ParentCard';
import BlankCard from '../../components/shared/BlankCard';
import { Link } from 'react-router';
import { numberFormat, agentList, formatDate } from "src/utils/Utils";
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
    title: 'Agent',
  },
];

const AgentList = () => {
    const router = useNavigate();

    useEffect(() => {

      const token = localStorage.getItem('token');
      if (token) {
          const decodedToken:any = jwtDecode(token);
          if(decodedToken.session_level.toLowerCase() === 'partner' || decodedToken.session_level.toLowerCase() === 'partner-admin'){
            //const user_login = parsedData.session_name.split('-')[0];
            fetchAgentListCobrand(decodedToken.session_name);
          }else{
            //load partner list by HO
            fetchAgentList();
          }
      }else{
          router('/auth/login');
      }
    }, []);

  //get all product
  const fetchAgentList = async () => {
    let end_point = "agents";
    axios
        .get(end_point)
        .then((response) => {
            //console.log(response);
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

  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectAll, setSelectAll] = React.useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);

  const handleDelete = () => {
    setOpenDeleteDialog(true);
  };

  //row agents
  const [agents, setAgents] = React.useState([]);
  const rows: agentList[] = agents;

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

  return (
    <PageContainer title="Agent" description="this is agent page">
      {/* breadcrumb */}
      {/*<Breadcrumb title="Agent" items={BCrumb} />*/}
      {/* end breadcrumb */}
      <ParentCard title="Agent List">
          <Box mb={2}>
                <Stack
                    mt={3}
                    justifyContent="space-between"
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                    <TextField
                    id="search"
                    type="text"
                    size="small"
                    variant="outlined"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e: any) => setSearchTerm(e.target.value)}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconSearch size={"16"} />
                        </InputAdornment>
                        ),
                    }}
                    />
                    <Box display="flex" gap={1}>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/apps/agent/create"
                    >
                        Add Agent
                    </Button>
                    </Box>
                </Stack>
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
                    <Typography variant="subtitle2">Agent Code</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Agent ID</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">ID Type</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Name</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Address</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Office Phone</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Contact Person</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Contact Phone</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Email</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Account Manager</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Contract Number</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Payment Note</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Bank Name</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Bank Acc No</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Bank Acc Name</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Commission %</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Join Date</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Status</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Note</Typography>
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
                      <Typography variant="caption">{row.agent_code}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                        {row.agent_id}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography variant="caption">
                        {row.id_type}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                      {row.name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                      {row.address}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                      {row.office_phone}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                      {row.contact_person}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                      {row.contact_phone}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                      {row.email}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                      {row.account_manager}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                      {row.contract_no}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                      {row.payment_note}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                      {row.bank_name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                      {row.bank_acc_no}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                      {row.bank_acc_name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                      {row.commission_pct}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                      {formatDate(row.join_date)}
                      </Typography>
                    </TableCell>
                    <TableCell>
                        <Chip
                            color={row.status === 'Active' ? 'success' : row.status === 'InActive' ? 'warning' : row.status == 'Blocked' ? 'error' : 'secondary'}
                            sx={{borderRadius: '6px',}}
                            size="small"
                            label={row.status === 'Active' ? 'Active' : row.status === 'InActive' ? 'Inactive' : 'Blocked'}
                        />
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                      {row.note}
                      </Typography>
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
};

export default AgentList;