import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Meal.css';
import ReservationForm from './ReservationForm';
import ReviewForm from './ReviewForm';

const Meal = ({ meal }) => {
  const [showReservationForm, setShowReservationForm] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false); 
  const formattedPrice = `${Number(meal.price).toFixed(2)} kr.`;

  const handleBookSeatClick = () => {
    setShowReservationForm(true);
  };

  const handleLeaveReviewClick = () => {
    setShowReviewForm(true);
  };

  return (
    <Link to={`/meals/${meal.id}`}>
      <div className="meal-card">
        {meal.image && (
          <img className="meal-image" src={meal.image} alt={meal.title} />
        )}
        <h2 className="meal-title">{meal.title}</h2>
        <p className="meal-description">{meal.description}</p>
        <p className="meal-price">{formattedPrice}</p>
        <button onClick={handleBookSeatClick}>Book Seat</button>
        {showReservationForm && <ReservationForm mealId={meal.id} />}
        <button onClick={handleLeaveReviewClick}>Leave Review</button>
        {showReviewForm && <ReviewForm mealId={meal.id} />}
      </div>
    </Link>
  );
};


export default Meal;
