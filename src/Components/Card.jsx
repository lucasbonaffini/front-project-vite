import React from 'react'
import PropTypes from 'prop-types';

const Card = ({item}) => {
    return (
        <li>
            <h2>{item.name}</h2>
            <img src={item.image}/>
            <h3>{item.price}</h3>
        </li>
    )
}
Card.propTypes = {
    item: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired,
  };

export default Card
  