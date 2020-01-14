import React from 'react';

const WordComponent = (props) => {
    console.log("hello i'm in colorword component");
    console.log(props.path);
    console.log(props.textcolor);
    console.log(props.backgroundcolor);


    return(
        <h3 style={{backgroundColor: props.backgroundcolor, color: props.textcolor}}>The Word is: {props.word}</h3>
    )

}

export default WordComponent;