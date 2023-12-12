const express = require('express');
const router = express.Router();
const knex = require('../database');

router.get('/', async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info

    router.get('/api/meals', async (req, res) => {
      const meals = await knex('meal');
      res.json(meals);
    });

    router.post('/api/meals', async (req, res) => {
      const newMeal = req.body;
      await knex('meal').insert(newMeal);
      res.json({ message: 'Meal created' });
    });

    router.get('/api/meals/:id', async (req, res) => {
      const mealId = req.params.id;
      const meal = await knex('meal').where({ id: mealId });
      res.json(meal);
    });

    router.put('/api/meals/:id', async (req, res) => {
      const mealId = req.params.id;
      const updatedMeal = req.body;
      await knex('meal').where({ id: mealId }).update(updatedMeal);
      res.json({ message: 'Meal updated' });
    });

    router.delete('/api/meals/:id', async (req, res) => {
      const mealId = req.params.id;
      await knex('meal').where({ id: mealId }).del();
      res.json({ message: 'Meal deleted' });
    });

    const meals = await knex('meal');
    response.json(meals);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
