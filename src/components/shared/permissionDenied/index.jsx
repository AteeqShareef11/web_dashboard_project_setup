/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Box, Card, Stack, Button, Typography } from '@mui/material';

import Logo from '../../../assets/emr_logo.svg';

const PermisionsUser = ({ title }) => {
  const plan = useSelector((s) => s?.user?.subscription?.currentSubscription?.plan?.plan_name);
  const navigate = useNavigate();
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="70vh">
      <Card sx={{ padding: 4, boxShadow: 4 }}>
        <Stack spacing={6}>
          <Box style={{ display: 'flex', justifyContent: 'center' }}>
            <img width="400px" src={Logo} alt="" />
          </Box>
          <Stack spacing={1}>
            <Typography textAlign="center" variant="P3" color="#000">
              Please subscribe to access the <b>ZimDoc</b> features ({title})
            </Typography>
            <Typography color="#007BFF" textAlign="center" variant="H2">
              {plan !== undefined && plan === 'Free plan-7 Days Free Trial'
                ? 'Get Standard or Primuim plan according to module.'
                : 'Get 7 Days Free Trial.'}
            </Typography>
          </Stack>
          <Box display="flex" justifyContent="center">
            <Button
              sx={{ paddingY: 1, paddingX: 4, borderRadius: 10 }}
              variant="contained"
              onClick={() => navigate('/dashboard/subscription')}
            >
              Subscribe Now
            </Button>
          </Box>
        </Stack>
      </Card>
    </Box>
  );
};

export default PermisionsUser;
