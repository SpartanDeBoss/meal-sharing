import React from "react";
import Fufu from '../../assets/images/Fufu.jpeg';
import Fantefante from '../../assets/images/Fantefante.jpeg';
import Floede from '../../assets/images/floede.jpg'
import Burger from '../../assets/images/burger.jpg';
import IndonesianMeal from '../../assets/images/Indonesian Meal.jpeg';
import PastaCarbonara from '../../assets/images/Pasta Carbonara.jpg';
import SushiNight from '../../assets/images/Sushi Night.jpg';
import Tacos from '../../assets/images/Tacos.jpeg';


const mealImages = [
  { name: 'fufu', image: Fufu },
  { name: 'fante', image: Fantefante },
  { name: 'med', image: Floede },
  { name: 'burger', image: Burger },
  { name: 'indonesian', image: IndonesianMeal },
  { name: 'pasta', image: PastaCarbonara },
  { name: 'sushi', image: SushiNight },
  { name: 'tacos', image: Tacos },
];
  


const MealImages = ({ title }) => {
  const image = mealImages.find((image) => title.toLowerCase().includes(image.name));
  return image ? <img className="meal-image" src={image.image} alt={title} /> : null;
}

export default MealImages;