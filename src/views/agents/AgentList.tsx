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

import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';
import img3 from 'src/assets/images/profile/user-3.jpg';
import img4 from 'src/assets/images/profile/user-4.jpg';
import img5 from 'src/assets/images/profile/user-5.jpg';
import ParentCard from 'src/components/shared/ParentCard';
import BlankCard from '../../components/shared/BlankCard';
import { Link } from 'react-router';

import { numberFormat, agentList, formatDate } from "src/utils/Utils";
//api
import ApiConfig  from "src/constants/apiConstants";
import { useEffect } from 'react';
import axios from 'axios';
import { IconSearch, IconTrash } from '@tabler/icons-react';

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
    title: 'Agent',
  },
];

const AgentList = () => {
    useEffect(() => {
        //load partner list
        fetchAgentList();

    }, []);

  //get all product
  const fetchAgentList = async () => {
    let end_point = apiUrl + "agents";
    axios
        .get(end_point)
        .then((response) => {
            //console.log(response);
            setAgents(response.data);
        })
        .catch((error) => {
            console.log(error);
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
      <Breadcrumb title="Agent" items={BCrumb} />
      {/* end breadcrumb */}
      <ParentCard title="Agent List">
        <BlankCard>
            <Box>
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
                    {selectAll && (
                        <Button
                        variant="outlined"
                        color="error"
                        onClick={handleDelete}
                        startIcon={<IconTrash width={18} />}
                        >
                        Delete All
                        </Button>
                    )}
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/apps/user/create"
                    >
                        Add Agent
                    </Button>
                    </Box>
                </Stack>
            </Box>
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
                    <Typography variant="h6">Agent Code</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Agent ID</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">ID Type</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Name</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Address</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Office Phone</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Contact Person</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Contact Phone</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Email</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Account Manager</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Contract Number</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Payment Note</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Bank Name</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Bank Acc No</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Bank Acc Name</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Commission %</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Join Date</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Status</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Note</Typography>
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
                      <Typography variant="subtitle2">{row.AgentCode}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary" variant="h6" fontWeight="400">
                        {row.AgentID}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography color="textSecondary" variant="h6" fontWeight="400">
                        {row.IDType}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary" variant="h6" fontWeight="400">
                      {row.Name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary" variant="h6" fontWeight="400">
                      {row.Address}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary" variant="h6" fontWeight="400">
                      {row.OfficePhone}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary" variant="h6" fontWeight="400">
                      {row.ContactPerson}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary" variant="h6" fontWeight="400">
                      {row.ContactPhone}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary" variant="h6" fontWeight="400">
                      {row.Email}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary" variant="h6" fontWeight="400">
                      {row.AccountManager}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary" variant="h6" fontWeight="400">
                      {row.ContractNumber}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary" variant="h6" fontWeight="400">
                      {row.PaymentNote}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary" variant="h6" fontWeight="400">
                      {row.BankName}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary" variant="h6" fontWeight="400">
                      {row.BankAccNo}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary" variant="h6" fontWeight="400">
                      {row.BankAccName}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary" variant="h6" fontWeight="400">
                      {row.Commission}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary" variant="h6" fontWeight="400">
                      {formatDate(row.JoinDate)}
                      </Typography>
                    </TableCell>
                    <TableCell>
                        <Chip
                            color={row.Status == 1 ? 'success' : row.Status == 0 ? 'warning' : row.Status == 2 ? 'error' : 'secondary'}
                            sx={{borderRadius: '6px',}}
                            size="small"
                            label={row.Status == 1 ? 'Active' : row.Status == 2 ? 'Inactive' : 'Blocked'}
                        />
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary" variant="h6" fontWeight="400">
                      {row.Note}
                      </Typography>
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
            </Table>
          </TableContainer>
        </BlankCard>
      </ParentCard>
    </PageContainer>
  );
};

export default AgentList;