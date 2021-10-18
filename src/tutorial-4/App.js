import React, {useState} from 'react';
import EmptyBlock from "./Components/EmptyBlock";
import './App.css'
import Phrase from "./Components/Phrase";
import {nounsArr, adjectivesArr} from "./data";

const App = () => {
    const [items, setItems] = useState([])

    const addPhrase = () => {
        let phrase  = `${adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)]} ${adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)]} ${nounsArr[Math.floor(Math.random() * nounsArr.length)]}`
        setItems([phrase, ...items])
    }

    const clearItems = () => {
        setItems([])
    }

    return (
        <div>
            <div className="wrapper">
                {items.length > 0 ? <Phrase items={items}/> : <EmptyBlock/>}
                <button className="btn btn_generate" onClick={addPhrase}>Сгенерировать</button>
                <button className="btn btn_clear" onClick={clearItems}>Очистить</button>
            </div>
        </div>
    );
};

export default App;