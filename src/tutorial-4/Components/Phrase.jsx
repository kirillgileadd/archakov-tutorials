import React, {useState} from 'react';

const Phrase = ({items}) => {
    return (
        <div>
            <ul className="list">
                {items.map((item, index) => <li className="block" key={index}>{item}</li>)}
            </ul>
        </div>
    );
};

export default Phrase;