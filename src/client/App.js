import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MealsList from './components/MealsComponent/MealsList';


function App() {
  return (
    <Router>
      <Route exact path="/meals">
        <MealsList />
      </Route>
    </Router>
  );
}

export default App;
