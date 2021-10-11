import React, {useRef} from 'react';
import style from './Form.module.css'

const Form = () => {

    let emailValue = ''
    let passwordValue = ''

    const onChangeInput = (event) => {
        if (event.type == 'email') {
            emailValue = event.value
        } else if (event.type == 'password') {
            passwordValue = event.value
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (emailValue.length > 0 && passwordValue.length > 0) {
            console.log({emailValue, passwordValue})
            emailValue = ''
            passwordValue = ''
            e.target.reset()
        } else {
            alert("Введите данные")
        }
    }

    return (
        <div className={style.container}>
            <div className={style.inner}>
                <form onSubmit={handleSubmit} className={style.form}>
                    <input onChange={(event) => {
                        onChangeInput(event.target)
                    }} className={style.email} type="email" placeholder='email'/>
                    <input onChange={(event) => {
                        onChangeInput(event.target)
                    }} className={style.password} type="password" placeholder='password'/>
                    <button className={style.button} type="submit">Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default Form;