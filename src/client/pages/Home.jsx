import { Typography } from '@mui/material';

import About from './About';
import Features from './Features';
import ForTeams from './ForTeams';
import Services from './Services';
import ContactUs from './ContactUs';

const Home = () => (
  <div>
    <Typography>Home</Typography>
    <ForTeams />
    <Features />
    <Services />
    <About />
    <ContactUs />
  </div>
);

export default Home;
