import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

const Navbar = () => {
    const [servicesMenuAnchor, setServicesMenuAnchor] = useState(null);

    const handleMenuOpen = (event) => {
        setServicesMenuAnchor(event.currentTarget);
    };

    const handleMenuClose = () => {
        setServicesMenuAnchor(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div">
                    MyBrand
                </Typography>
                <Box>
                    <Button color="inherit" href="/">Home</Button>
                    <Button color="inherit" href="/about">About</Button>
                    <Button color="inherit" onClick={handleMenuOpen}>
                        Services
                    </Button>
                    <Menu
                        anchorEl={servicesMenuAnchor}
                        open={Boolean(servicesMenuAnchor)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose} component="a" href="/services/web-design">
                            Web Design
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} component="a" href="/services/seo">
                            SEO
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose} component="a" href="/services/marketing">
                            Marketing
                        </MenuItem>
                    </Menu>
                    <Button color="inherit" href="/contact">Contact</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;