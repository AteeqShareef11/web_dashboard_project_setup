import React from 'react'
import { Outlet } from 'react-router-dom';

import { Stack } from '@mui/material';

import Navbar from '../components/Navbar';


const WebLayout = () => 
   
 (
   
    <Stack>
      <Navbar /> 
      <Outlet />
    </Stack>
  
  )


export default WebLayout