import React from 'react';
import {AppBar, Box, Button, Container, IconButton, Tabs, Toolbar, Typography} from "@mui/material";
import {Link} from 'react-router-dom'
import NavTabs from "./NavTabs";


const Header = () => {

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" variant="outlined">
                <Container>
                    <Toolbar>
                        <Typography variant="h6" color='inherit' component={Link} to={'/'} sx={{flexGrow: 1}}>
                            MyApp
                        </Typography>
                        <NavTabs/>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Header;