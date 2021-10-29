import {Box, Button, Container, IconButton} from "@mui/material";
import Header from "./components/Header";
import {dataList} from "./data/dataList";
import CardItem from "./components/CardItem";
import Home from "./pages/Home";
import About from "./pages/About";
import {createContext} from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link, Route, Switch, useParams, useLocation} from "react-router-dom";
import Shop from "./pages/Shop";
import ShopItem from "./components/ShopItem";
import ShopItemDetail from "./components/ShopItemDetail";


export const AppContext = createContext()

function App() {
    let {pathname} = useLocation();

    return (
        <AppContext.Provider value={{dataList}}>
            <Header/>
            <Container>
                <Box sx={{padding: 3}}>
                    <Switch>
                        <Route path='/' exact>
                            <Home/>
                        </Route>
                        <Route path='/about'>
                            <About/>
                        </Route>
                        <Route path='/post/:id'>
                            <IconButton sx={{mb: 2}} component={Link} to={'/'}>
                                <ArrowBackIcon/>
                            </IconButton>
                            <CardItem {...dataList.find((item) => item.id === parseInt(pathname[6]))}/>
                        </Route>
                        <Route path='/shop' exact component={Shop}/>
                        <Route path='/shop/:id' component={ShopItemDetail}/>
                        <Route>
                            <h1>Page not found</h1>
                        </Route>
                    </Switch>
                </Box>
            </Container>
        </AppContext.Provider>
    );
}

export default App;
