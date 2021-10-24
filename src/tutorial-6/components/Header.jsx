import React from 'react';
import {AppBar, Box, Button, Container, IconButton, Link, Tabs, Toolbar, Typography} from "@mui/material";
import NavTabs from "./NavTabs";


const Header = () => {

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" variant="outlined">
                <Container>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            <Link color="inherit" href="/">
                                MyApp
                            </Link>
                        </Typography>
                        <NavTabs/>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Header;