import React, { useState } from 'react';
import './ReviewForm.css';

function ReviewForm() {
  const [message, setMessage] = useState('');
  const [initialValues, setInitialValues] = useState({ rating: '', comment: '' });

  const handleInputChange = (event) => {
    setInitialValues({ ...initialValues, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // Submit your form here
    setMessage('Review submitted successfully!');
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label className='rating-info'>Rating:</label>
        <input
          type="number"
          name="rating"
          value={initialValues.rating}
          onChange={handleInputChange}
          min="1"
          max="5"
          required
          className='rating-input'
        />
      </div>
      <div>
        <label>Comment:</label>
        <textarea
          name="comment"
          value={initialValues.comment}
          onChange={handleInputChange}
          required
          className='comment-input'
        />
      </div>
      <button type="submit">Submit Review</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default ReviewForm;