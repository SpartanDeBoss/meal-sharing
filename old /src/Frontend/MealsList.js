import React, { useState, useEffect } from "react";

const MealsList = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetch("/api/meals")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch meals");
        }
        return response.json();
      })
      .then(data => setMeals(data))
      .catch(error => setError(error.message)); 
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {meals.map(meal => (
        <div key={meal.id}>
          <h2>{meal.title}</h2>
          <p>{meal.prices}</p>
          <p>{meal.description}</p>
          <p>{meal.prices}</p>
        </div>
      ))}
    </div>
  );
};

export default MealsList;


