import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Meal.css';
import ReservationForm from './ReservationForm';
import MealImages from './MealImages';
import ReviewForm from './ReviewForm';

const Meal = ({ meal }) => {
  const [showReservationForm, setShowReservationForm] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reservationDetails, setReservationDetails] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    numberOfGuests: 1,
  });

  const [reviewDetails, setReviewDetails] = useState({
    rating: 1,
    comment: '',
  });

  const formattedPrice = `${Number(meal.price).toFixed(2)} kr`;

  const handleBookSeatClick = () => {
    setShowReservationForm(true);
  };

  const handleLeaveReviewClick = () => {
    setShowReviewForm(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReservationDetails({
      ...reservationDetails,
      [name]: value,
    });
  };

  const handleReservationSubmit = (event) => {
    event.preventDefault();

    fetch('/api/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservationDetails),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    console.log('Reservation submitted:', reservationDetails);
  };

  return (
    <div className="meal-page">
      <div className="meal-card">
        <Link to={`/meals/${meal.id}`}>
          <div className="meal-image-container">
            <MealImages title={meal.title} className="meal-image" />
          </div>
          <div className="meal-info">
            <h2>{meal.title}</h2>
            <p>{meal.description}</p>
            <p className="price">{formattedPrice}</p>
          </div>
        </Link>
        <button onClick={handleBookSeatClick}>Book Seat</button>
        {showReservationForm && <ReservationForm mealId={meal.id} />}
        <button onClick={handleLeaveReviewClick}>Leave Review</button>
        {showReviewForm && <ReviewForm mealId={meal.id} />}
      </div>
    </div>
  );
};

export default Meal;
