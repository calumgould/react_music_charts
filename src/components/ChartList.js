import React from 'react';
import ChartItem from './ChartItem'

const ChartList = ({songs}) => {
    
    const songNodes = songs.map(song => {
        return <ChartItem name={song['im:name']} artist={song['im:artist']} key={song.id.attributes['im:id']}> </ChartItem>
    })

    return ( 
        <div className="chart-list">
            <ol>
                {songNodes}
            </ol>
        </div>
    );
}
 
export default ChartList; 