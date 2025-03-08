import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Button color="inherit" component={Link} to="/form">
                        Form
                    </Button>
                    <Button color="inherit" component={Link} to="/">
                        About
                    </Button>
                </Box>

                <Typography variant="h6" component="div" sx={{ textAlign: 'right' }}>
                    EcoMentor
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
