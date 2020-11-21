import React from 'react';
import Card from './Card';

const Cardlist = ({robots}) => {
    const cardComponent = robots.map((robot, index) => {
        return <Card key={robots[index].id} id={robots[index].id} email={robots[index].email} name={robots[index].name}></Card>
    })
    return (
        cardComponent
    );
}

export default Cardlist;