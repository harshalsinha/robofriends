import React, {useState, useEffect} from 'react';
import Cardlist from '../components/cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/scroll';
import ErrorBoudary from '../components/ErrorBoundary';

function App (){

    const [robots, setRobots] = useState([])
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users').then( response => {
            response.json().then(users => {
                setRobots(users);
            })
        })
    }, [])

    let filteredRobots = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    function onSearchChange(event){
            setSearchField(event.target.value)
    }
    
    return (
            !robots.length ? 
            <h1>Loading</h1> : 
            (
                <div className='tc'>
                    <h1>Robofriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <br></br>
                    <ErrorBoudary>
                        <Scroll>
                            <Cardlist robots={filteredRobots}/>
                        </Scroll>
                    </ErrorBoudary>
                </div>
            )
    )
};
export default App;
