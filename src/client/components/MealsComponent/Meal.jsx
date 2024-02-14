import React from 'react';
import './Meal.css';

const Meal = ({ meal }) => {
  const formattedPrice = `$${meal.price.toFixed(2)}`;

  return (
    <div className="meal-card">
      {meal.image && (
        <img className="meal-image" src={meal.image} alt={meal.title} />
      )}
      <h2 className="meal-title">{meal.title}</h2>
      <p className="meal-description">{meal.description}</p>
      <p className="meal-price">{formattedPrice}</p>
    </div>
  );
};

export default Meal;
