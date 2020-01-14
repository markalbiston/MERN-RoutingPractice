import React from 'react';
import WordComponent from './WordComponent';
// import ColorWordComponent from './ColorWordComponent';
import NumberComponent from './NumberComponent';

const WordNumComponent = (props) => {
    console.log(props.path);
    console.log(props.id);
    if(isNaN(+props.id)){

    return(
        <div>
            {props.children}
        </div>
    )
    }
    return(
        <div>
            <NumberComponent number={props.id}/>
        </div>
    )
}

export default WordNumComponent;