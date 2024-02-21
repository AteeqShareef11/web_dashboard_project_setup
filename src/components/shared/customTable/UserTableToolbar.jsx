/* eslint-disable react/prop-types */

import PropTypes from 'prop-types';

// import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import {  Typography } from '@mui/material';



// ----------------------------------------------------------------------

export default function UserTableToolbar({ title, children }) {
  return (
    <Toolbar
      sx={{
        height: 64,
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom:"1px solid #f2f2f2",
      }}
    >
      <Typography variant='h5' sx={{fontSize:"1.2rem", color:"#444"}}>{title} </Typography>
   {children}
    </Toolbar>
  );
}

UserTableToolbar.propTypes = {
    title : PropTypes.string,
};
