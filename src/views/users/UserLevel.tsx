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
  Tooltip
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

import { numberFormat, levelList, formatDate } from "src/utils/Utils";
//api
import ApiConfig  from "src/constants/apiConstants";
import { useEffect } from 'react';
import axios from 'axios';
import { IconAccessible, IconKey, IconRowRemove, IconSearch } from '@tabler/icons-react';

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
    title: 'Users Level',
  },
];

const UserLevel = () => {
    useEffect(() => {
        //load user list
        fetchUserLevel();

    }, []);

  //get all product
  const fetchUserLevel = async () => {
    let end_point = apiUrl + "levels";
    axios
        .get(end_point)
        .then((response) => {
            //console.log(response);
            setLevels(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
  }

  //search
    const handleSearchFilter = (event: any) => {
        console.log(event.target.value);
        setSearchTerm(event.target.value);
        
        const strtValue = event.target.value;
        if(strtValue.length !== 0){
            let end_point = apiUrl + "levels/search?param="+strtValue;
            axios
                .get(end_point)
                .then((response) => {
                    setLevels(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }else{
            fetchUserLevel();
        }
  }

  const [searchTerm, setSearchTerm] = React.useState("");
  const [seqID, setSeqID] = React.useState(0);
  
  
  //row users
  const [levels, setLevels] = React.useState([]);
  const rows: levelList[] = levels;

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
    <PageContainer title="Users Level" description="this is users level page">
      {/* breadcrumb */}
      <Breadcrumb title="Users Level" items={BCrumb} />
      {/* end breadcrumb */}
      <ParentCard title="Level List">
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
                    {/*
                    <Box display="flex" gap={1}>
                      <Button
                          variant="contained"
                          color="primary"
                          component={Link}
                          to="/apps/user/create"
                      >
                          Add Level
                      </Button>
                    </Box>
                    */}
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
                    <Typography variant="subtitle2">No</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Level Id</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Level Name</Typography>
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
                      <Typography variant="caption">{index+1}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">{row.level_id}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">{row.level_name}</Typography>
                    </TableCell>
                    {/*
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
                    */}
                  </TableRow>
                ))}

                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={3} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={3}
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

export default UserLevel;