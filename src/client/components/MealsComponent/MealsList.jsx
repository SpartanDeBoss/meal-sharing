import React, { useState, useEffect } from 'react';
import Meal from './Meal';

export default function MealsList() {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // track whether component is mounted

    const fetchMeals = async () => {
      try {
        const response = await fetch('/api/meals');
        if (!response.ok) {
          throw new Error('Failed to fetch meals');
        }
        const data = await response.json();
        if (isMounted) {
          setMeals(data);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
        }
      }
    };

    fetchMeals();

    // cleanup function
    return () => {
      isMounted = false; // set it to false if component unmounted
    };
  }, []); // empty dependency array means this effect runs once when component mounts

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