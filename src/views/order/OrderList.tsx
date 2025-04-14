
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
import { numberFormat, OrderListType, formatDate } from "src/utils/Utils";
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { IconEdit, IconEye, IconHistory } from '@tabler/icons-react';

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
      title: 'Order',
    },
];

const OrderList = () => {

    //order list
    //const [orderList, setOrderList] = React.useState([]);
    const orderList = [
        {
            Seq: 1,
            OrderID: "GRM500110",
            OrderDate: "09 Apr 2025",
            Type: "SIM",
            Status: 3,
            CustomerName: "YASMINE - 2 PCS SIN + MALAYSIA + THAI",
            ContactPhone: "08194141495",
            ContactWA: "",
            Email: "",
            AgentCode: "GRM-TIA",
            AgentName: "TIA FINANCE HO",
            Product: "SIM_SG_MY_TH_7_2000",
            Qty: 1,
            TotalOrder: 270000,
            TotalCost: 206800
        },
    ]
    const rows: OrderListType[] = orderList;
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

    const handleMove = () => {
        //setOpenDeleteDialog(true);
        console.log('move');
    };

    return (
        <PageContainer title="Order" description="this is order page">
            <Breadcrumb title="Order" items={BCrumb} />
            <ParentCard title="Order List">
                <BlankCard>
                <Box mt={2} mb={2}>
                    <Grid size={{ xs: 12 }}>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 3 }}>
                                <Typography variant="subtitle1">
                                    Order ID
                                </Typography>
                                <CustomTextField
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={{ xs: 3 }}>
                                <Typography variant="subtitle1">
                                    Customer Name
                                </Typography>
                                <CustomTextField
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={{ xs: 3 }}>
                                <Typography variant="subtitle1">
                                    Order Date Begin
                                </Typography>
                                <CustomTextField
                                    fullWidth
                                    type="date"
                                />
                            </Grid>
                            <Grid size={{ xs: 3 }}>
                                <Typography variant="subtitle1">
                                    Order Date End
                                </Typography>
                                <CustomTextField
                                    fullWidth
                                    type="date"
                                />
                            </Grid>
                            <Grid size={{ xs: 3 }}>
                                <Typography variant="subtitle1">
                                Order Status
                                </Typography>
                                <CustomSelect
                                    fullWidth
                                    variant="outlined"
                                >
                                    <MenuItem value={1}>New</MenuItem>
                                    <MenuItem value={2}>Approved</MenuItem>
                                    <MenuItem value={3}>Paid</MenuItem>
                                    <MenuItem value={4}>Delivered</MenuItem>
                                    <MenuItem value={5}>Returned</MenuItem>
                                    <MenuItem value={6}>Closed</MenuItem>
                                    <MenuItem value={7}>Cancelled</MenuItem>
                                </CustomSelect>
                            </Grid>
                            <Grid size={{ xs: 6 }}>
                                <Typography variant="subtitle1">
                                    Agent
                                </Typography>
                                <CustomSelect
                                    fullWidth
                                    variant="outlined"
                                >
                                    <MenuItem value={1}>GRM - TIA - TIA FINANCE HO</MenuItem>
                                    <MenuItem value={2}>RKL - RKL - DAVID - DAVID WIDJAJA</MenuItem>
                                    <MenuItem value={3}>RYC - BUFANNY - BU FANNY</MenuItem>
                                </CustomSelect>
                            </Grid>
                            <Grid size={{ xs: 3 }}>
                                <Typography variant="subtitle1">
                                    Type
                                </Typography>
                                <CustomSelect
                                    fullWidth
                                    variant="outlined"
                                >
                                    <MenuItem value={1}>Simcard</MenuItem>
                                    <MenuItem value={2}>eSIM</MenuItem>
                                </CustomSelect>
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <Button
                                    variant="contained" 
                                    color="primary"
                                    onClick={handleMove}
                                >
                                    Get Record
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>    
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
                                        <Typography variant="subtitle2">Action</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Seq</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Order ID</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Order Date</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Type</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Status</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Customer Name</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Contact Phone</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Contact WA</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Email</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Agent Code</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Agent Name</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Product</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Qty</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Total Order</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">Total Cost</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {(rowsPerPage > 0
                                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows
                                ).map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <Tooltip title="Detail">
                                            <IconButton
                                                color="success"
                                            >
                                                <IconEye width={22} />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="History">
                                            <IconButton
                                                color="primary"                                                
                                            >
                                                <IconHistory width={22} />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">{row.Seq}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="textSecondary" variant="subtitle2" fontWeight="400">
                                            {row.OrderID}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="textSecondary" variant="subtitle2" fontWeight="400">
                                            {row.OrderDate}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="textSecondary" variant="subtitle2" fontWeight="400">
                                            {row.Type}    
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                          <Chip
                                            color={
                                              row.Status == 1
                                                ? 'success'
                                                : row.Status == 0
                                                  ? 'warning'
                                                  : row.Status == 2
                                                    ? 'error'
                                                    : 'secondary'
                                            }
                                            sx={{
                                              borderRadius: '6px',
                                            }}
                                            size="small"
                                            label={row.Status == 1 ? 'Paid' : row.Status == 2 ? 'Closed' : 'Pending'}
                                          />
                                    </TableCell>
                                    <TableCell>
                                          <Typography color="textSecondary" variant="subtitle2" fontWeight="400">{row.CustomerName}</Typography>
                                    </TableCell>
                                    <TableCell>
                                          <Typography color="textSecondary" variant="subtitle2" fontWeight="400">{row.ContactPhone.length > 0 ? row.ContactPhone : '-'}</Typography>
                                    </TableCell>
                                    <TableCell>
                                          <Typography color="textSecondary" variant="subtitle2" fontWeight="400">{row.ContactWA.length > 0 ? row.ContactWA : '-'}</Typography>
                                    </TableCell>
                                    <TableCell>
                                          <Typography color="textSecondary" variant="subtitle2" fontWeight="400">{row.Email.length > 0 ? row.Email : '-'}</Typography>
                                    </TableCell>
                                    <TableCell>
                                          <Typography color="textSecondary" variant="subtitle2" fontWeight="400">{row.AgentCode}</Typography>
                                    </TableCell>
                                    <TableCell>
                                          <Typography color="textSecondary" variant="subtitle2" fontWeight="400">{row.AgentName}</Typography>
                                    </TableCell>
                                    <TableCell>
                                          <Typography color="textSecondary" variant="subtitle2" fontWeight="400">{row.Product}</Typography>
                                    </TableCell>
                                    <TableCell>
                                          <Typography color="textSecondary" variant="subtitle2" fontWeight="400">{numberFormat(row.Qty)}</Typography>
                                    </TableCell>
                                    <TableCell>
                                          <Typography color="textSecondary" variant="subtitle2" fontWeight="400">{numberFormat(row.TotalOrder)}</Typography>
                                    </TableCell>
                                    <TableCell>
                                          <Typography color="textSecondary" variant="subtitle2" fontWeight="400">{numberFormat(row.TotalCost)}</Typography>
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
                                        colSpan={16}
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
}
export default OrderList;