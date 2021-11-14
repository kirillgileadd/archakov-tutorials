import React from "react";
import {useForm} from "react-hook-form";

import "./App.css";
import {Box, Button, TextField} from "@mui/material";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

function App() {
    const schema = yup.object({
        firstName: yup.string().required(''),
        lastName: yup.string().required(''),
        email: yup.string().email(' ').required(''),
        password: yup.string()
        .when('email', {
            is: value => value.includes('@'),
            then: yup.string().min(5),
        })
    }).required();

    const {handleSubmit, register, formState, formState: {errors}, reset} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (values) => console.log("ФОРМА!", values);

    React.useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset();
        }
    }, [formState, reset]);


    return (
        <div className="App">
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {m: 1},
                }}
            >
                <div className="row">
                    <TextField
                        name="firstName"
                        label="Имя"
                        {...register("firstName")}
                        helperText={errors.firstName && errors.firstName.message}
                        error={!!errors.firstName}
                        fullWidth
                    />
                    <TextField
                        name="lastName"
                        label="Фамилия"
                        {...register("lastName")}
                        helperText={errors.lastName && errors.lastName.message}
                        error={!!errors.lastName}
                        fullWidth
                    />
                </div>
                <div className="row">
                    <TextField
                        {...register("email")}
                        helperText={errors.email && errors.email.message}
                        error={!!errors.email}
                        name="email"
                        label="E-Mail"
                        defaultValue=""
                        fullWidth
                    />
                    <TextField
                        {...register("password")}
                        helperText={errors.password && errors.password.message}
                        error={!!errors.password}
                        name="password"
                        type="password"
                        label="Пароль"
                        fullWidth
                    />
                </div>
                <div className="row">
                    <TextField name="about" label="Обо мне" fullWidth/>
                </div>
                <div className="button__actions">
                    <Button onClick={handleSubmit(onSubmit)} className='button' variant="contained" color="primary">
                        Зарегистрироваться
                    </Button>
                    <Button className='button'
                            variant="contained"
                            color="secondary"
                            onClick={() => reset()}
                    >
                        Очистить
                    </Button>
                </div>
            </Box>
        </div>
    );
}

export default App;
