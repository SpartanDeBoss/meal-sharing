const express = require('express');
const app = express();
const router = express.Router();
const knex = require('./database');
const path = require('path');

const mealsRouter = require('./api/meals');
const buildPath = path.join(__dirname, '../../dist');
const port = process.env.PORT || 3000;
const cors = require('cors');

// For week4 no need to look into this!
// Serve the built client html
app.use(express.static(buildPath));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(cors());

router.use('/meals', mealsRouter);

router.get('/future-meals', async (_, res) => {
  const futureMeals = await knex.raw(
    'SELECT * FROM meal WHERE when_date > NOW()'
  );
  res.json(futureMeals[0]);
});

router.get('/past-meals', async (_, res) => {
  const pastMeals = await knex.raw(
    'SELECT * FROM meal WHERE when_date < NOW()'
  );
  res.json(pastMeals[0]);
});

router.get('/all-meals', async (_, res) => {
  const allMeals = await knex.raw('SELECT * FROM meal ORDER BY id');
  res.json(allMeals[0]);
});

router.get('/first-meal', async (_, res) => {
  const firstMeal = await knex.raw('SELECT * FROM meal ORDER BY id LIMIT 1');
  if (firstMeal[0].length === 0) {
    res.status(404).send('No meals found');
  } else {
    res.json(firstMeal[0]);
  }
});

router.get('/last-meal', async (_, res) => {
  const lastMeal = await knex.raw(
    'SELECT * FROM meal ORDER BY id DESC LIMIT 1'
  );
  if (lastMeal[0].length === 0) {
    res.status(404).send('No meals found');
  } else {
    res.json(lastMeal[0]);
  }
});

app.listen(3000, () => console.log('Server is running....'));

if (process.env.API_PATH) {
  app.use(process.env.API_PATH, router);
} else {
  throw 'API_PATH is not set. Remember to set it in your .env file';
}

// for the frontend. Will first be covered in the react class
app.use('*', (req, res) => {
  res.sendFile(path.join(`${buildPath}/index.html`));
});

module.exports = app;
