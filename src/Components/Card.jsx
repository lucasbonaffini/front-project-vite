import React from 'react'

const Card = ({item}) => {
    return (
        <li>
            <h2>{item.name}</h2>
            <img src={item.image}/>
            <h3>{item.price}</h3>
        </li>
    )
}

export default Card
  