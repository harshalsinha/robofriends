import React from 'react';

const card = ({name, email, id}) => {
    return (
        <div className='bg-light-green dib br3 pa3 na2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${email}`} alt='Robots'></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default card;