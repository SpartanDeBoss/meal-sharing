import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReservationForm from './ReservationForm';
import ReviewForm from './ReviewForm';

function MealPage() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [reservationData, setReservationData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    numberOfGuests: 0,
  });
  const [reviewData, setReviewData] = useState({
    rating: 0,
    comment: '',
  });
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showReservationForm, setShowReservationForm] = useState(false);

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

  const handleReservationFormSubmit = async (event) => {
    setShowReservationForm(false);
  };

  const handleReviewFormSubmit = async (event) => {
    setShowReviewForm(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReservationData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleReviewInputChange = (event) => {
    const { name, value } = event.target;
    setReviewData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //It fetches meal data from the API based on the meal ID by using params from the URL. It also handles the form submission and input change for the reservation and review forms.

  return (
    <div className="meal-page">
      <button onClick={() => setShowReservationForm(true)}>Book a Seat</button>
      {showReservationForm && (
        <div className="booking-form">
          <ReservationForm
            onSubmit={handleReservationFormSubmit}
            initialValues={reservationData}
            handleInputChange={handleInputChange}
          />
        </div>
      )}
      <button onClick={() => setShowReviewForm(true)}>Leave a Review</button>
      {showReviewForm && (
        <div className="review-form">
          <ReviewForm
            onSubmit={handleReviewFormSubmit}
            initialValues={reviewData}
            handleInputChange={handleReviewInputChange}
          />
        </div>
      )}
    </div>
  );
}

export default MealPage;