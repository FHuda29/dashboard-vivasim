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
  Button,
  Tooltip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
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
import { numberFormat, userList, formatDate } from "src/utils/Utils";
import { useEffect } from 'react';
import { IconAccessible, IconBlockquote, IconKey, IconPackageOff, IconPassword, IconPasswordUser, IconRowRemove, IconSearch, IconSignLeft, IconTrash, IconUrgent } from '@tabler/icons-react';
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
    title: 'Users Web Login',
  },
];

const UserList = () => {
    const router = useNavigate();
    const [userLevel, setUserLevel] = React.useState('');
    const [userSession, setUserSession] = React.useState('');
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
          const decodedToken:any = jwtDecode(token);
          setUserLevel(decodedToken.session_level);
          if(decodedToken.session_level.toLowerCase() === 'partner' || decodedToken.session_level.toLowerCase() === 'partner-admin'){
            const user_login = decodedToken.session_name.split('-')[0];
            setUserSession(user_login);
            fetchUserByCobrand(user_login);
          }else{
            //load user list
            setUserSession(decodedToken.session_name);
            fetchUserList();
          }
        }else{
          router('/auth/login');
        }
    }, []);

  //get all product
  const fetchUserList = async () => {
    let end_point = "users";
    axios
        .get(end_point)
        .then((response) => {
            //console.log(response);
            setUsers(response.data);
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

  const fetchUserByCobrand = async (cobrand_id:string) => {
    let end_point = "users/cobrand/"+cobrand_id;
    axios
        .get(end_point)
        .then((response) => {
            //console.log(response);
            setUsers(response.data);
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

  //search
    const handleSearchFilter = (event: any) => {
        console.log(event.target.value);
        setSearchTerm(event.target.value);
        
        const strtValue = event.target.value;
        if(strtValue.length !== 0){
            let end_point = "users/search?param="+strtValue;
            axios
                .get(end_point)
                .then((response) => {
                  setUsers(response.data);
                })
                .catch((error) => {
                  if (error.response && error.response.status === 403 || error.response.status === 401) {
                      // Token expired → redirect ke login
                      router('/auth/login');
                  } else {
                    console.log(error);
                  }
                });
        }else{
          //fetchUserList();
          if(userLevel.toLowerCase() === 'partner' || userLevel.toLowerCase() === 'partner-admin'){
            fetchUserByCobrand(userSession);
          }else{
            //load product
            fetchUserList();
          }
        }
  }

  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectAll, setSelectAll] = React.useState(false);
  const [openBlockDialog, setOpenBlockDialog] = React.useState(false);
  const [openUnBlockDialog, setOpenUnBlockDialog] = React.useState(false);
  const [seqID, setSeqID] = React.useState(0);
  const [selectedUser, setSelectedUser] = React.useState('');

  const handleBlock = (user:string, seq: any) => {
    setSelectedUser(user);
    setSeqID(seq);
    setOpenBlockDialog(true);
  };

  const handleCloseBlockDialog = () => {
    setOpenBlockDialog(false);
  };

  const handleUnBlock = (user:string, seq: any) => {
    setSelectedUser(user);
    setSeqID(seq);
    setOpenUnBlockDialog(true);
  };

  const handleCloseUnBlockDialog = () => {
    setOpenUnBlockDialog(false);
  };

  //row users
  const [users, setUsers] = React.useState([]);
  const rows: userList[] = users;

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

  const handleConfirmBlock = async () => {
    const blockData = {
      blocked: 'Y'
    }

    try {
        await axios.put('users/block/'+seqID,blockData);
        setOpenBlockDialog(false);
        fetchUserList();
    } catch (error) {
        console.error('Error block users:', error);
    }
  };

  const handleConfirmUnBlock = async () => {
    const blockData = {
      blocked: 'N'
    }

    try {
        await axios.put('users/block/'+seqID,blockData);
        setOpenUnBlockDialog(false);
        fetchUserList();
    } catch (error) {
        console.error('Error unblock users:', error);
    }
  };

  return (
    <PageContainer title="Users" description="this is users page">
      {/* breadcrumb */}
      {/*<Breadcrumb title="Users" items={BCrumb} />*/}
      {/* end breadcrumb */}
      <ParentCard title="User List">
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
                      value={searchTerm}
                      onChange={handleSearchFilter}
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
                          to="/apps/user/create"
                      >
                          Add User Web Login
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
                    <Typography variant="subtitle2">User Name</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Partner/Agent ID</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Level</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Blocked</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Failed</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Last Login</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Action</Typography>
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
                      <Typography variant="caption">{row.user_name}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                        {row.session_name}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography variant="caption">
                        {row.session_level}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                      {row.blocked}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                      {row.failed}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">{formatDate(row.last_login_time)}</Typography>
                    </TableCell>
                    <TableCell>
                      <Tooltip title="Reset Password">
                        <IconButton 
                          color="success" 
                          component={Link}
                          to={`/apps/user/change-password/${row.seq}`}>
                        <IconKey width={22} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Block">
                        <IconButton 
                          color="error"
                          onClick={() => handleBlock(row.user_name, row.seq)}
                        >
                          <IconRowRemove width={22} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Unblock">
                        <IconButton 
                          color="info"
                          onClick={() => handleUnBlock(row.user_name, row.seq)}
                        >
                          <IconAccessible width={22} />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}

                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={1} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={1}
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
      <Dialog open={openBlockDialog} onClose={handleCloseBlockDialog}>
        <DialogTitle>Confirm Block</DialogTitle>
          <DialogContent>
            Are you sure you want to block selected username "{selectedUser}" ?
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleCloseBlockDialog}>
              Cancel
            </Button>
            <Button
              color="error"
              variant="outlined"
              onClick={handleConfirmBlock}
            >
              Block
            </Button>
          </DialogActions>
      </Dialog>
      <Dialog open={openUnBlockDialog} onClose={handleCloseUnBlockDialog}>
        <DialogTitle>Confirm Block</DialogTitle>
          <DialogContent>
            Are you sure you want to unblock selected username "{selectedUser}" ?
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleCloseUnBlockDialog}>
              Cancel
            </Button>
            <Button
              color="error"
              variant="outlined"
              onClick={handleConfirmUnBlock}
            >
              Unblock
            </Button>
          </DialogActions>
      </Dialog>
    </PageContainer>
  );
};

export default UserList;