import React, {useEffect, useState} from 'react';
import ShopItem from "../components/ShopItem";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const ShopItemsDetail = ({match}) => {

    useEffect( () => {
        fetchItem()
        console.log(match)
    }, [])

    const [item, setItem] = useState({})

    const fetchItem = async () => {
        const itemF = await fetch(`https://6171918fc20f3a001705fdf5.mockapi.io/users/${match.params.id}`)

        const item = await itemF.json()
        setItem(item)
    }

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={item.avatar}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" component={Link} to={'/shop'}>Back</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default ShopItemsDetail;