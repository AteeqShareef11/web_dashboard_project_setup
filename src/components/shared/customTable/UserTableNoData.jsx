

import React from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';

import { Box, TableRow, TableCell } from '@mui/material';

import NoData from "../../../assets/lotties/nodata.json";

// ----------------------------------------------------------------------
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: NoData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export default function UsersTableNoData({ query }) {
  return (
    <TableRow>
      <TableCell align="center" colSpan={12} sx={{ py: 3, background: "#fff" }}>
        <Box width="100%" display="flex" justifyContent="center">
          <Lottie
            options={defaultOptions}
            height={300}
            width={300}
          />
        </Box>
      </TableCell>
    </TableRow>

  );
}

UsersTableNoData.propTypes = {
  query: PropTypes.string,
};







