import React, {useState} from 'react';
import {Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";

const App = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
            let response = await fetch('https://6171918fc20f3a001705fdf5.mockapi.io/users2')
            let list = await response.json()
            setUsers(list)
        } catch (err) {
            alert(err); // TypeError: failed to fetch
        }
    }

    return (
        <div>
            <ul>
                <Grid container>
                    {users.map((obj) => <Grid key={obj.id} item md={6}>
                        <Card sx={{width: 345, m: 2}}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={obj.avatar}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {obj.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {obj.email}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {obj.phone}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>)}
                </Grid>
            </ul>
            <Button variant='contained' onClick={getUsers}>Показать список пользователей</Button>
        </div>
    );
};

export default App;