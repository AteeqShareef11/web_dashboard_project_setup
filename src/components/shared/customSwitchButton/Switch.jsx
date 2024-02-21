import React from 'react'

import { Box } from '@mui/material';

import './styles.css'
import SwitchButton from '.'

const Switch = () => {
    
 const  handleSwitch = (e) => console.log(e.target.checked);
    return(
    <Box sx={{display:'flex',justifyContent:"center",alignItems:"center"}}>
         <SwitchButton 
            outerClass = "cusSwtich"  
            switchButtonID = "demoID" 
            inputClass = ""
            helperClass = ""
            onChange = {handleSwitch}
          />    
    </Box>
  )}

export default Switch