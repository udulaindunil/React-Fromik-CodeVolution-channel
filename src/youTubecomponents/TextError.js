import React from 'react';

function TextError(props){

    console.log(props);

    return (
        <div className={'error'}>
            {props.children}
        </div>
    );
};

export default TextError;