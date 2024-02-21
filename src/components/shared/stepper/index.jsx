/* eslint-disable react/prop-types */
import * as React from 'react';

import Button from '@mui/material/Button';
import { Box, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import { hasError } from 'src/components/patientComponents/utils';

export default function ProgressMobileStepper({ values, name, errors, activeStep, handleNext, handleBack, totalSteps = 14 }) {
    const theme = useTheme();
    return (
        <Stack spacing={2} width="100%">
            <MobileStepper
                sx={{
                    width: "100%"
                }}
                variant="progress"
                steps={totalSteps}
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
                <Button variant='tertiary' size="small" onClick={() => handleNext()} disabled={errors && hasError(errors)} >
                    {activeStep === totalSteps ? "Submit" : "Continue"}

                </Button>

            </Box>
        </Stack>

    );
}