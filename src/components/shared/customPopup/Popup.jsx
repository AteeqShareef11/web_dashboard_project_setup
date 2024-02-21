/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import * as React from 'react';

import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Divider, IconButton, Typography } from '@mui/material';



const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function AlertDialogSlide({ children, open, setOpen, fullWidth, title, maxWidth = "md", isHeader }) {



    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            {
                isHeader && (
                    <>
                        <Box p={2} display="flex" justifyContent="space-between" alignItems="center">
                            <Typography>{title}</Typography>
                            <IconButton
                                sx={{
                                    minHeight: 36,
                                    background: '#fff',
                                    color: '#DC3545',
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    padding: '10px 15px',
                                    borderRadius: '8px',
                                    '&:hover': { // Corrected from '&.hover' to '&:hover'
                                        background: '#DC3545',
                                        color: '#fff',
                                    },
                                }}
                                onClick={() => handleClose()}
                            >
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <Divider />
                    </>
                )
            }

            {
                children
            }
        </Dialog>
    );
}
