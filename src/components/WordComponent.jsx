import React from 'react';

const WordComponent = (props) => {
    console.log("hello i'm in word component");
    console.log(props.path);
    console.log(props.textcolor);
    console.log(props.backgroundcolor);

    return(
        <h3 style={{backgroundColor: props.backgroundcolor, color: props.textcolor}}>The Word is: {props.id}</h3>
    )

}

export default WordComponent;