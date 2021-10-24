import {Box, Container} from "@mui/material";
import Header from "./components/Header";
import CardsList from "./components/CardList";
import {dataList} from "./data/dataList";
import {useState} from "react";
import CardItem from "./components/CardItem";

function App() {
    const {pathname} = window.location
    const [cards, setCards] = useState(dataList)
    const [pathnameI, setPathnameI] = useState(pathname)

    return (
        <>
            <Header/>
            <Container>
                <Box sx={{padding: 3}}>
                    {pathname === '/' && <CardsList cards={cards}/>}
                    {
                        pathname === pathnameI &&
                        cards.filter((item) => item.id === parseInt(pathnameI[6])).map((obj) => <CardItem {...obj}/>)
                    }
                </Box>
            </Container>
        </>
    );
}

export default App;
