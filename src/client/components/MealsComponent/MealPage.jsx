import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReservationForm from './ReservationForm';
import ReviewForm from './ReviewForm';

function MealPage() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [showReservationForm, setShowReservationForm] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);

  useEffect(() => {
    fetch(`/api/meals/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setMeal(data))
      .catch((error) => console.error('Error:', error));
  }, [id]);

  return (
    <div>
      {meal && (
        <>
          <h1>{meal.title}</h1>
          <p>{meal.description}</p>
          <button
            onClick={() => {
              console.log('Book seat clicked');
              setShowReservationForm(true);
            }}
          >
            Book seat
          </button>
          {showReservationForm && (
            <ReservationForm mealId={meal.id} mealTitle={meal.title} />
          )}
          <button
            onClick={() => {
              console.log('Review clicked');
              setShowReviewForm(true);
            }}
          >
            Review
          </button>
          {showReviewForm && <ReviewForm mealId={meal.id} />}
        </>
      )}
    </div>
  );
}

export default MealPage;