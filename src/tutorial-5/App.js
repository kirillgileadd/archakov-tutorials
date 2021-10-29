import React, {useEffect, useState} from 'react';
import Comments from "./components/Comments";
import Form from "./components/Form";
import {Container} from "@mui/material";

const data = [
    {
        fullName: "Walter White",
        email: "kristal@gmail.ru",
        createdAt: "Thu Oct 14 2021 13:41:01",
        text: "I like cristal meth"
    },
    {
        fullName: "Jesse Pinkman",
        email: "yo@gmail.ru",
        createdAt: "Thu Oct 14 2021 13:41:01",
        text: "Shit happens"
    },
]

const App = () => {
    const [comments, setComments] = useState(data)

    const handleComment = (info) => {
        setComments([...comments, info])
    }

    const deleteComment = (index)=> {
        if (window.confirm("Delete an item?")) {
            const newArr = comments.filter((_, i) => index !== i);
            setComments(newArr);
        }
    }

    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments))
    }, [comments])

    return (
        <div style={{backgroundColor: "lightblue", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Container sx={{margin: 5, backgroundColor: "white", width: 600, borderRadius: 5, p: 2, justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"}}>
                <Comments list={comments} deleteComment={deleteComment}/>
                <Form addComment={handleComment}/>,
            </Container>
        </div>
    );
};

export default App;