import React, {Component} from 'react';
import ChartList from '../components/ChartList';

class ChartContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: [],
            selectedSongId: ''
         }
    }

    componentDidMount(){
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
        
        fetch(url)
            .then(res => res.json())
            .then(charts => this.setState({
                songs: charts.feed.entry
            }))
    }

    render() { 
        return ( 
            <div>
                <h2>Roosapp</h2>
                <ChartList songs={this.state.songs}></ChartList>
            </div>
         );
    }
}
 
export default ChartContainer;