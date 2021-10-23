import React from 'react';
import {Avatar, Divider, IconButton, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const CommentItem = ({fullName, text, deleteComment, index}) => {
    return (
        <>
            <ListItem alignItems="flex-start"
                      secondaryAction={
                          <IconButton edge="end" aria-label="delete" onClick={() => deleteComment(index)}>
                              <DeleteIcon/>
                          </IconButton>
                      }>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                </ListItemAvatar>
                <ListItemText
                    primary={fullName}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{display: 'inline'}}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {text}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li"/>
        </>
    );
};

export default CommentItem;