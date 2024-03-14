import React, { useState } from 'react';

function ReviewForm({ onSubmit, initialValues, handleInputChange }) {

   return (
     <form onSubmit="">{onSubmit}
     <div>
       <label>Rating:</label>
       <input
         type="number"
         name="rating"
         value={initialValues.rating}
         onChange={handleInputChange}
         min="1"
         max="5"
         required
       />
     </div>
     <div>
<label>Comment:</label>
<textarea
  name="comment"
  value={initialValues.comment}
  onChange={handleInputChange}
  required
/>
</div>
       <button type="submit">Submit Review</button>
      </form>
    );
}

export default ReviewForm;