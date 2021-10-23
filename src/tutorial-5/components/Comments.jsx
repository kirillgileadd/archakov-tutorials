import React from 'react';
import {Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import CommentItem from "./CommentItem";

const Comments = ({list, deleteComment}) => {
    return (
        <div>
            <Typography component="h3" variant='h5' fontWeight={"bolder"}>Comments:</Typography>
            <List sx={{width: '100%', maxWidth: 360, bgColor: 'background.paper'}}>
                {
                    list.map((obj, index) => (
                        <CommentItem key={obj.fullName} {...obj} deleteComment={deleteComment} index={index}/>))
                }
            </List>
        </div>
    );
};

export default Comments;