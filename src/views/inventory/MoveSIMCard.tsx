
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
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import PageContainer from 'src/components/container/PageContainer';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import ParentCard from 'src/components/shared/ParentCard';
import BlankCard from 'src/components/shared/BlankCard';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

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

    const handleMove = () => {
        //setOpenDeleteDialog(true);
        console.log('move');
    };

    return (
        <PageContainer title="Inventory" description="this is inventory page">
            <Breadcrumb title="Inventory" items={BCrumb} />
            <ParentCard title="Move Simcard to Partner">
                <BlankCard>
                <Box mt={2} mb={2}>
                    <Grid size={{ xs: 12 }}>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 4 }}>
                                <Typography variant="subtitle1">
                                    Partner
                                </Typography>
                                <CustomSelect
                                    fullWidth
                                    variant="outlined"
                                >
                                    <MenuItem value={1}>GRM - GOLDEN RAMA</MenuItem>
                                    <MenuItem value={2}>RKL - RIKOLA</MenuItem>
                                    <MenuItem value={3}>RYC - KONSURSIUM INDONESIA</MenuItem>
                                </CustomSelect>
                            </Grid>
                            <Grid size={{ xs: 3 }}>
                                <Typography variant="subtitle1">
                                    ICCID Serial From (19 digit awal)
                                </Typography>
                                <CustomTextField
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={{ xs: 3 }}>
                                <Typography variant="subtitle1">
                                    ICCID Serial To (19 digit awal) 
                                </Typography>
                                <CustomTextField
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={{ xs: 2 }}>
                                <Typography variant="subtitle1">
                                Confirm Move ?
                                </Typography>
                                <CustomSelect
                                    fullWidth
                                    variant="outlined"
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
                </BlankCard>
            </ParentCard>
        </PageContainer>
    );
}
export default MoveSIMCard;