// ReservationForm.js
import React, {useState} from 'react';
import './ReservationForm.css';


//in  reservation  component it takes in the initial values and the handle input change function as prop. and returns a form with an input fields for the user to fill in their details and reserve a seat

function ReservationForm() {
  const [initialValues, setInitialValues] = useState({ name: '', phoneNumber: '', email: '', numberOfGuests: 1 });


  const handleInputChange = (event) => {
    setInitialValues({ ...initialValues, [event.target.name]: event.target.value });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    // Submit your form here
    setMessage('Reservation submitted successfully!');
  }


  return (
    <form onSubmit={onSubmit} className='reservation-form'>
      <div>
        <label className="name-info">Name:</label>
        <input
          type="text"
          name="name"
          value={initialValues.name}
          onChange={handleInputChange}
          required
          className='name-input'
        />
      </div>
      <div>
        <label className="phone-info">Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={initialValues.phoneNumber}
          onChange={handleInputChange}
          required
          className='phone-input'
        />
      </div>
      <div>
        <label className="email-info">Email:</label>
        <input
          type="email"
          name="email"
          value={initialValues.email}
          onChange={handleInputChange}
          required
          className='email-input'
        />
      </div>
      <div>
        <label className="guest-info">Number of Guests:</label>
        <input
          type="number"
          name="numberOfGuests"
          value={initialValues.numberOfGuests}
          onChange={handleInputChange}
          min="1"
          required
          className="guest-input"
        />
      </div>
      <button className="submitReserve-info" type="submit">
        Reserve
      </button>
    </form>
  );
}

export default ReservationForm;
