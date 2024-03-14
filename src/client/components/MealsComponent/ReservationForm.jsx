// ReservationForm.js
import React from 'react';

function ReservationForm({ onSubmit, initialValues, handleInputChange }) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={initialValues.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={initialValues.phoneNumber}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={initialValues.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Number of Guests:</label>
        <input
          type="number"
          name="numberOfGuests"
          value={initialValues.numberOfGuests}
          onChange={handleInputChange}
          min="1"
          required
        />
      </div>
      <button type="submit">Reserve</button>
    </form>
  );
}

export default ReservationForm;
