import React, { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Drawer, Toolbar, MenuItem, IconButton } from '@mui/material';

const MobileNav = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
          <MenuIcon />
        </IconButton>
        <Drawer
          sx={{
            '& .MuiPaper-root': {
              width: "50%",
            },
          }}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Home</MenuItem>
          <MenuItem onClick={handleMenuClose}>About</MenuItem>
          <MenuItem onClick={handleMenuClose}>Services</MenuItem>
          <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};
export default MobileNav;
