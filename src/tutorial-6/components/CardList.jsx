import React from 'react';
import {Card, Grid, List} from "@mui/material";
import CardItem from "./CardItem";

const CardsList = ({cards}) => {


    return (
        <Grid container spacing={2} sx={{padding: 3, justifyContent: "center"}}>
            {
                cards.map((item) => (
                    <Grid item md={4}>
                        <CardItem key={item.id} {...item} />
                    </Grid>))
            }
        </Grid>
    );
};

export default CardsList;