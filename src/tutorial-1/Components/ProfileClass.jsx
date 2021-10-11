import React, {Component} from 'react';
import style from "./Profile.module.css";


class ProfileClass extends Component {
    constructor(props) {
        super(props);
        this.name = this.props.name
    }

    montoToStr(num) {
        return num > 12 || num < 1
            ? null
            : 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(',')[
            num - 1
                ];
    }

    render() {
        return (
            <div className={style.container}>
                <div className={style.inner}>
                    <p className={style.name}>Привет, <span>{this.name}</span></p>
                    <p>Дата
                        регистрации: {this.props.registeredAt.getDate()} {this.montoToStr(this.props.registeredAt.getMonth())} {this.props.registeredAt.getFullYear()}</p>
                </div>
            </div>
        );
    }


}

export default ProfileClass;