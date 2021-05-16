import React, {Component} from 'react';
import { connect } from 'react-redux';
import Cardlist from '../components/cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/scroll';
import ErrorBoudary from '../components/ErrorBoundary';
import { setSearchField, requestRobots } from '../Actions.js';

const mapStateToProps = state => {
    return{
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component{

    componentDidMount(){
        this.props.onRequestRobots()
    }
    
    render(){

        const { searchField, robots, onSearchChange, isPending } = this.props;

        let filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        return (
            isPending ? 
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
    )};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
