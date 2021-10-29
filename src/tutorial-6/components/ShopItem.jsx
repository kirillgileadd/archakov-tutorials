import React from 'react';
import {Avatar, IconButton, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import {AddCircleOutlineOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";

const ShopItem = ({avatar, id, name, match}) => {
    return (
        <ListItem alignItems="center">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={avatar}/>
            </ListItemAvatar>
            <ListItemText
                primary={name}
                secondary={
                    <Link to={`/shop/${id}`}>
                        <IconButton>
                            <AddCircleOutlineOutlined color='secondary'/>
                        </IconButton>
                    </Link>
                }
            />
        </ListItem>
    );
};

export default ShopItem;