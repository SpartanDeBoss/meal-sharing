import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/MealsComponent/HomePage';
import MealPage from './components/MealsComponent/MealPage';
import MealsList from './components/MealsComponent/MealsList';
import Navbar from './components/MealsComponent/Navbar';
// import MealForm from './components/MealsComponent/MealForm';
import ErrorBoundary from './components/MealsComponent/ErrorBoundary';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/meals/:id" component={MealPage} />
        <ErrorBoundary>
          <Route path="/meals" component={MealsList} />
        </ErrorBoundary>
      </Switch>
    </Router>
  );
}

export default App;