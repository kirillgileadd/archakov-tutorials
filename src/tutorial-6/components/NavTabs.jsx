import * as React from 'react';
import Box from '@mui/material/Box';
import {Button, ButtonGroup} from "@mui/material";
import {Link} from "react-router-dom";


export default function NavTabs() {
    const buttons = [
        <Button key="one" component={Link} to={'/'}>Main</Button>,
        <Button key="two" component={Link} to={'/about'}>About</Button>,
        <Button key="three" component={Link} to={'/shop'}>Shop</Button>,
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                    m: 1,
                },
            }}
        >
            <ButtonGroup variant="contained" color="secondary" aria-label="medium secondary button group">
                {buttons}
            </ButtonGroup>
        </Box>
    );
}