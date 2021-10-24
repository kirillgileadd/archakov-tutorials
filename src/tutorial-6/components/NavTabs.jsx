import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import LinkTab from "./LinkTab";
import {blue} from "@mui/material/colors";


export default function NavTabs() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Tabs
                onChange={handleChange}
                aria-label="wrapped label tabs example"
            >
                <LinkTab
                    sx={{ml: 2, backgroundColor: "white", color: "blue", borderRadius: 1}}
                    href="main"
                    label="MAIN"
                />
                <LinkTab
                    sx={{ml: 2, backgroundColor: "white", color: "blue", borderRadius: 1}}
                    href="about"
                    label="ABOUT"/>
            </Tabs>
        </Box>
    );
}