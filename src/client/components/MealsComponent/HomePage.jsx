import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import './Homepage.css';
import ImageComponent from './ImageComponent';
import Fufu from '../../assets/images/Fufu.jpeg';
import Fantefante from '../../assets/images/Fantefante.jpeg';
import Floede from '../../assets/images/Floede.jpg';

function HomePage() {
  const [meals, setMeals] = useState([]);

  //we have an array of objects with the name of the meal and the image
  const mealImages = [
    { name: 'fufu', image: Fufu },
    {
      name: 'fante',
      image: Fantefante,
    },
    {
      name: 'med',
      image: Floede,
    },
  ];


//we use useEffect to fetch 3 meals from the server to have it on the homepage

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
        <h1 className="title">Serenity Meals</h1>
        <h2 className="slogan">
          From our kitchen to your table, welcome to&nbsp;
          <span className="welcome-info">Serenity Meals</span>, where every bite
          tells a story.
        </h2>
      </header>
      <main>
        <div className="meal-section">
          {meals.map((meal) => {    //here we map through the meals and filter the images to match the meal name
            meal.imageUrl = mealImages.filter((image) => {
              const mealImage = meal.title
                .toLowerCase()
                .includes(image.name.toLowerCase());
              return mealImage;
            });
            return (
              <div key={meal.id} className="meal-card">
                <div className="meal-image-container">
                  <ImageComponent
                    imageUrl={meal.imageUrl[0]?.image}
                    className="meal-image"
                  />
                </div>
                <h3>{meal.title}</h3>
                <p>{meal.description}</p>
                <p>{meal.price} kr</p>
              </div>
            );
          })}
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
          <h4>Serenity Meals</h4>
          <ul>
            <li>About Us</li>
            <li>Join our team!</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="legal">
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
