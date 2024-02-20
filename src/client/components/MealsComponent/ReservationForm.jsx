import React, { useState } from 'react';

function ReservationForm({ mealId }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mealId, phoneNumber, name, email }),
    });

    if (response.ok) {
      alert('Reservation made successfully!');
    } else {
      alert('An error occurred while making the reservation.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" required />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <button type="submit">Book Seat</button>
    </form>
  );
}

export default ReservationForm;