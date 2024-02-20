import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function HomePage() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch('/api/meals')
      .then((response) => response.json())
      .then((data) => setMeals(data.slice(0, 3)));
  }, []);

  return (
    <div>
      <header>
        <h1 className="title">Serenity Meals</h1>
        <h2 className="slogan">
          From our kitchen to your table, welcome to{' '}
          <span className="welcome-info">Serenity Meals</span>, where every bite
          tells a story.
        </h2>
      </header>

      <main>
        <div className="meal-section">
          {meals.map((meal) => (
            <div key={meal.id}>
              <h3>{meal.title}</h3>
              <p>{meal.description}</p>
              <Link to={`/reservation/${meal.id}`} className="meal-link">
                Book a Seat
              </Link>
            </div>
          ))}
        </div>
        <Link to="/meals" className="see-more-button">
          See More
        </Link>
      </main>
      <footer className="footer">
        <div className="our-menu">
          <h4>Our Menu</h4>
          <ul>
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
          </ul>
        </div>
        <div className="serenity-meals">
          <h5>Serenity Meals</h5>
          <ul>
            <li>About Us</li>
            <li>Join our team!</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="legal">
          <h6>Legal</h6>
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
