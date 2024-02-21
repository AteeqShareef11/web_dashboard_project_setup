/* eslint-disable react/prop-types */
import React from 'react';
import Lottie from 'react-lottie';

import { Box } from '@mui/material';

import LoderData from "../../../assets/lotties/loder.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: LoderData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
const Loader = ({ height = "50vh" }) => (
  <Box width="100%" height={height} display="flex" justifyContent="center" alignItems="center">
    <Lottie
      options={defaultOptions}
      height={100}
      width={100}
    />
  </Box>
);

export default Loader;
