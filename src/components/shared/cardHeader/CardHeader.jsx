import React from 'react';
import PropTypes from 'prop-types';

import { Box, Button, Typography } from '@mui/material';

import Iconify from 'src/components/iconify';

const CardHeader = ({ title, icon, button, navigate }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',borderBottom:"1px solid #f2f2f2", padding:"1rem 1rem" }}>
    <Typography variant="h6">{title}</Typography>
    {
      button &&
    <Button variant="primary" startIcon={<Iconify icon={icon} />} onClick={()=>navigate('/dashboard/patients')}>
      {button}
    </Button>
    }
  </Box>
);

export default CardHeader;
CardHeader.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.any,
  button: PropTypes.string,
  navigate: PropTypes.any
};
