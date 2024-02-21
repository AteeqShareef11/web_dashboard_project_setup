/* eslint-disable react/prop-types */
import * as React from 'react';

import Button from '@mui/material/Button';
import { Box, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


export default function ProgressStepperView({ activeStep, handleNext, handleBack }) {
    const theme = useTheme();
    return (
        <Stack spacing={2} width="100%">
            <MobileStepper
                sx={{
                    width: "100%"
                }}
                variant="progress"
                steps={15}
                position="static"
                activeStep={activeStep}

            />
            <Box width="100%" display="flex" justifyContent="space-between">
                <Button size="small" onClick={() => handleBack()} disabled={activeStep === 1}>
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowRight />
                    ) : (
                        <KeyboardArrowLeft />
                    )}
                    Back
                </Button>
                <Button variant='tertiary' size="small" onClick={() => handleNext()} >
                    {activeStep === 14 ? "Ok" : "Continue"}

                </Button>

            </Box>
        </Stack>

    );
}