import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MealsList from './components/MealsComponent/MealsList';
import Meal from './components/MealsComponent/Meal';

function App() {
  return (
    <Router>
      <Route exact path="/meals/:id" component={Meal} />
      <Route exact path="/meals" component={MealsList} />
    </Router>
  );
}

export default App;
