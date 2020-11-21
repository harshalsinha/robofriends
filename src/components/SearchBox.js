import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='Search' 
                placeholder='Search...'
                onChange={searchChange}>
            </input>
        </div>
    );
}

export default SearchBox;