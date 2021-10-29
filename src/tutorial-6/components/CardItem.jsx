import React from 'react';
import {Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {Link, useParams} from "react-router-dom";

const CardItem = ({id, poster, name}) => {
    return (
        <Card sx={{
            maxWidth: 345,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}>
            <Box>

                <CardMedia
                    component="img"
                    height="140"
                    alt="green iguana"
                    image={poster}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {name}
                    </Typography>
                </CardContent>
            </Box>
            <CardActions>
                <Button component={Link} to={`/post/${id}`} size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default CardItem;