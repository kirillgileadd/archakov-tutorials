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
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
                indicatorColor="palette.warning.dark"
                textColor="white"

            >
                <LinkTab
                    sx={{ml: 2, backgroundColor: "white", color: "blue", borderRadius: 1}}
                    href="main"
                    value="main"
                    label="MAIN"
                />
                <LinkTab
                    sx={{ml: 2, backgroundColor: "white", color: "blue", borderRadius: 1}}
                    value="about"
                    href="about"
                    label="ABOUT"/>
            </Tabs>
        </Box>
    );
}