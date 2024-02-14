import React, { useState, useEffect } from 'react';
import './MealsList.css';
import Meal from './Meal';

export default function MealsList() {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      const response = await fetch('/api/meals');
      if (!response.ok) {
        throw new Error('Failed to fetch meals');
      }
      const data = await response.json();
      setMeals(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Meals List</h1>
      {error && <p>Error: {error}</p>}
      <div className="meals-container">
        <div className="grid-container">
          {meals.map((meal) => (
            <Meal key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </div>
  );
}
