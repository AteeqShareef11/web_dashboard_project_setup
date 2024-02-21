/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components';

import { Zoom, Tooltip, tooltipClasses } from '@mui/material';


// eslint-disable-next-line no-unused-vars
const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: "#000",
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#000",
        maxWidth: 420,
        textAlign: 'center'
    },
}));

const CustomTooltip = ({ children, title, placement = "top" }) => (
    <BootstrapTooltip
        placement={placement}
        TransitionComponent={Zoom}
        title={<h1 style={{ fontSize: '12px' }}>{title}</h1>}
    >
        {children}
    </BootstrapTooltip>
)

export default CustomTooltip