import React, {Component} from 'react';
import Cardlist from '../components/cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/scroll';
import ErrorBoudary from '../components/ErrorBoundary';

class App extends Component {
    constructor()
    {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        };
    }

    componentDidMount()
    {
        fetch('http://jsonplaceholder.typicode.com/users').then( response => {
            response.json().then(users => {
                this.setState({robots: users});
            })
        })
    }

    onSearchChange = (event) =>
    {
        this.setState({searchfield : event.target.value})
    }
    
    render(){
        const {robots, searchfield} = this.state;
        let filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        return !robots.length ? 
        <h1>Loading</h1> : 
        (
            <div className='tc'>
                <h1>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <br></br>
                <ErrorBoudary>
                    <Scroll>
                        <Cardlist robots={filteredRobots}/>
                    </Scroll>
                </ErrorBoudary>
            </div>
        );
    }
};

export default App;