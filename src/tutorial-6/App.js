import {Box, Container} from "@mui/material";
import Header from "./components/Header";
import CardsList from "./components/CardList";
import {dataList} from "./data/dataList";
import CardItem from "./components/CardItem";

function App() {
    const {pathname} = window.location

    return (
        <>
            <Header/>
            <Container>
                <Box sx={{padding: 3}}>
                    {pathname === '/' && <CardsList cards={dataList}/>}
                    {
                        pathname === `/post/${pathname[6]}` &&
                        <CardItem {...dataList.find(item => item.id === parseInt(pathname[6]))}/>
                    }
                </Box>
            </Container>
        </>
    );
}

export default App;
