import React, { useState } from 'react';

function ReviewForm({ mealId }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [stars, setStars] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mealId, title, description, stars }),
    });

    if (response.ok) {
      alert('Review submitted successfully!');
    } else {
      alert('An error occurred while submitting the review.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <input type="number" value={stars} onChange={(e) => setStars(e.target.value)} min="1" max="5" placeholder="Stars (1-5)" required />
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;