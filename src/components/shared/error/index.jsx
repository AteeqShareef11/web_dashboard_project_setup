/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";

export const ErrorField = ({ error }) => (
    <>
        {error && (
            <Typography variant="body" color="red">
                {error}
            </Typography>
        )}
    </>
);
