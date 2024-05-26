import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/MealsComponent/HomePage';
import MealPage from './components/MealsComponent/MealPage';
import MealsList from './components/MealsComponent/MealsList';
import Navbar from './components/MealsComponent/Navbar';
import ReservationForm from './components/MealsComponent/ReservationForm';
import ReviewForm from './components/MealsComponent/ReviewForm';

import './App.css';

function App() {
  // const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  // const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  return (
    <Router>
      <Navbar />
      <Switch>
          <>
            <Route path="/" exact component={HomePage} />
            <Route path="/meals" exact component={MealsList} />
            <Route path="/meals/:id" component={MealPage} />
            <Route path="/meals/:id/reservation" component={ReservationForm} />
            <Route path="/meals/:id/review" component={ReviewForm} />
          </>
      </Switch>
    </Router>
  );
}

export default App;
