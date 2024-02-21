/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Card, Stack, Button, Typography } from '@mui/material';

import Logo from '../../../assets/emr_logo.svg';

const PaymentSucessCard = ({ success, title, para, action, navigateUrl }) => {
    const navigate = useNavigate();
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="70vh">
            <Card sx={{ padding: 4, boxShadow: 4 }}>
                <Stack spacing={6}>
                    <img src={Logo} alt="" />
                    <Stack spacing={1}>
                        <Typography variant="P3" color="#000">
                            {title} <b>ZimDoc</b> features
                        </Typography>
                        <Typography color="#007BFF" textAlign="center" variant="H2">
                            {para}.
                        </Typography>
                    </Stack>
                    <Box display="flex" justifyContent="center">
                        <Button
                            sx={{ paddingY: 1, paddingX: 4, borderRadius: 10 }}
                            variant="contained"
                            onClick={() => navigate(navigateUrl)}
                        >
                            {action}
                        </Button>
                    </Box>
                </Stack>
            </Card>
        </Box>
    );
};

export default PaymentSucessCard;
