import React from 'react';
import style from './Profile.module.css'

const Profile = ({name, registeredAt}) => {
    const day = registeredAt.getDate()
    const month = registeredAt.getMonth()
    const year = registeredAt.getFullYear()

    function montoToStr(num) {
        return num > 12 || num < 1
            ? null
            : 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(',')[
            num - 1
                ];
    }

    return (
        <div className={style.container}>
            <div className={style.inner}>
                <p className={style.name}>Привет, <span>{name}</span></p>
                <p>Дата регистрации: {day} {montoToStr(month)} {year}</p>
            </div>
        </div>
    );
};

export default Profile;