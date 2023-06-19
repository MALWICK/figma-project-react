import React from 'react';
import buttoncss from './Button.module.css';

export default function Button({text}) {
    return(
        <button className={buttoncss.button}>
            {text}
        </button>

    );
}