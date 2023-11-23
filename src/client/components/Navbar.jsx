import React from 'react'

import {
    AppBar,
    Toolbar,
    Typography,
  } from '@mui/material';

const Navbar = () =>  <div className=' navbar'><AppBar  position="static" sx={{background:"transparent",boxShadow:"none"}}>
  <Toolbar>
    <Typography  variant="h6" sx={{ flexGrow: 1,color:"#000"}}>
      Navbar
    </Typography>
  </Toolbar>
</AppBar>
</div>

export default Navbar