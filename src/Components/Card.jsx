/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const Card = ({item}) => {
  return (
    <ul>
      {item.map((item) => (
        <li key={item.id}>
          <h1>{item.name}</h1>
          <img src={item.image} alt={item.name} />
          <h3>{item.price}</h3>
        </li>
      ))}
    </ul>
  );
};

Card.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired,
  };

export default Card
