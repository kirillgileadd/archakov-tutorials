import React from 'react';
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    OutlinedInput,
    Typography
} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const Form = ({addComment}) => {

    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [text, setText] = React.useState('');

    const handleChange = (event) => {
        if (event.target.name === 'email') {
            setEmail(event.target.value);
        } else if (event.target.name === 'name') {
            setName(event.target.value)
        } else if (event.target.name === 'text') {
            setText(event.target.value)
        }
    };

    const combineCommentInfo = () => {
        if (name.trim() && email.trim() && text.trim()) {
            let date = new Date()
            let userInfo = {
                fullName: name,
                email: email,
                createdAt: date.toLocaleString("en-US"),
                text: text
            }
            addComment(userInfo)
            setEmail('')
            setName('')
            setText('')
        } else {
            alert('fill out the form!')
        }
    }

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': {m: 1},
                    display: "flex",
                    flexDirection: "column"
                }}
                noValidate
                autoComplete="off"
            >
                <Typography component="h3" variant='h5' fontWeight={"bolder"} sx={{mb: 2}}>Form:</Typography>
                <FormControl>
                    <InputLabel htmlFor="component-outlined">Email</InputLabel>
                    <OutlinedInput
                        required
                        id="component-outlined"
                        value={email}
                        onChange={handleChange}
                        label="Email"
                        name="email"
                        type="email"
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="component-outlined">Name</InputLabel>
                    <OutlinedInput
                        id="outlined-textarea"
                        label="name"
                        placeholder="Placeholder"
                        multiline
                        name="name"
                        maxRows={2}
                        value={name}
                        onChange={handleChange}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="component-outlined">Message</InputLabel>
                    <OutlinedInput
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        name="text"
                        rows={4}
                        value={text}
                        onChange={handleChange}
                    />
                </FormControl>
                <Button onClick={combineCommentInfo} variant="contained" endIcon={<SendIcon/>}
                        fullWidth>Send</Button>
            </Box>
        </>
    );
};

export default Form;