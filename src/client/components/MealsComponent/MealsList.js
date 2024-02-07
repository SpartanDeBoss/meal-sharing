/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import './MealsList.css';
import { useState, useEffect } from 'react';

export default function MealsList() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      const response = await fetch('/api/meals');
      const data = await response.json();
      setMeals(data);
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };

  return (
    <section className="meals-container">
      {meals.map((meal) => (
        <div key={meal.id}>
          <p>Title: {meal.title}</p>
          <p>Description: {meal.description}</p>
          <p>Price: {meal.price}</p>
        </div>
      ))}
    </section>
  );
}
