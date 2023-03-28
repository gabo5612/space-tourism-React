import React from 'react';
import '../style/Destination.css';

function Destination(props){
    return(
        <div className='Destination'>{props.children}</div>
     )
}
export {Destination}