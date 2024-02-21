/* eslint-disable react/prop-types */
import React from 'react'

import { Button, CircularProgress } from '@mui/material'

const LoadingButton = ({ isLoading, onClick, children, type, size, variant = "contained", sx, startIcon }) => (
    <Button
        disabled={isLoading}
        size={size}
        type={type}
        startIcon={startIcon}
        variant={variant}
        onClick={onClick}
        sx={sx}

    >
        {isLoading && <CircularProgress size="1rem" />
        }&nbsp; &nbsp;
        {isLoading ? "Loading..." : children}

    </Button>
)

export default LoadingButton