import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import MealImages from './MealImages';

function HomePage() {
  const [meals, setMeals] = useState([]);

  // Fetch 3 meals from the server to display on the homepage
  useEffect(() => {
    fetch('/api/meals')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error('Data is not an array');
        }
        setMeals(data.slice(0, 3));
      })
      .catch((error) => {
        console.error('Error fetching meals:', error);
      });
  }, []);

  return (
    <div>
      <header>
        <div className="header-animation">
          <div className='head-title'>Serenity Meals</div>
          <div>
            <span className='head-subtitle'>
              From our kitchen to your table, welcome to Serenity Meals, where
              every bite tells a story.
            </span>
          </div>
        </div>
      </header>
      <main>
        <div className="meal-section">
          {meals.map((meal) => (
            <div key={meal.id} className="meal-card">
              <div className="meal-image-container">
                <MealImages title={meal.title} className="meal-image" />
              </div>
              <div className="meal-info">
                <h3>{meal.title}</h3>
                <p>{meal.description}</p>
                <p className="price">{`${Number(meal.price).toFixed(2)} kr`}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/meals" className="see-more-button">
          See More
        </Link>
      </main>
      <footer className="footer">
        <div className="footer-section">
          <h4>Our Menu</h4>
          <ul>
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Serenity Meals</h4>
          <ul>
            <li>About Us</li>
            <li>Join our team!</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
