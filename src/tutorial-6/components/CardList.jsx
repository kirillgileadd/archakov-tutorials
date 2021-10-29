import React, {useContext} from 'react';
import {Card, Grid, List} from "@mui/material";
import CardItem from "./CardItem";
import {AppContext} from "../App";

const CardsList = () => {
    const {dataList} = useContext(AppContext)

    return (
        <Grid container spacing={2} sx={{padding: 3, justifyContent: "center"}}>
            {
                dataList.map((item) => (
                    <Grid key={item.id} item md={4}>
                        <CardItem key={item.id} {...item} />
                    </Grid>))
            }
        </Grid>
    );
};

export default CardsList;