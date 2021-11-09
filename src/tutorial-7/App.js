import React from "react";
import {useForm} from "react-hook-form";

import "./App.css";
import {Box, Button, TextField} from "@mui/material";

function App() {
    const {handleSubmit, register, formState, reset} = useForm();

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
                        {...register("firstName", {
                            required: "Это обязательное поле!"
                        })}
                        helperText={formState.errors.firstName && formState.errors.firstName.message}
                        error={!!formState.errors.firstName}
                        fullWidth
                    />
                    <TextField
                        name="lastName"
                        label="Фамилия"
                        {...register("lastName", {
                            required: "Это обязательное поле!"
                        })}
                        helperText={formState.errors.lastName && formState.errors.lastName.message}
                        error={!!formState.errors.lastName}
                        fullWidth
                    />
                </div>
                <div className="row">
                    <TextField
                        {...register("email", {
                            required: "Это обязательное поле!",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
                                message: "Это неверная почта!"
                            }
                        })}
                        helperText={formState.errors.email && formState.errors.email.message}
                        error={!!formState.errors.email}
                        name="email"
                        label="E-Mail"
                        defaultValue=""
                        fullWidth
                    />
                    <TextField
                        {...register("password", {
                            required: "Это обязательное поле!"
                        })}
                        helperText={formState.errors.password && formState.errors.password.message}
                        error={!!formState.errors.password}
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
