import React from 'react';

const ChartItem = (props) => {
    
    console.log(props);
    
    return ( 
        <div className="chartItem">
            <li><span><b>{props.name.label}</b></span> by {props.artist.label}</li>
        </div>
     );
}
 


export default ChartItem;