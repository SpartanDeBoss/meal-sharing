const express = require('express');
const router = express.Router();
const knex = require('../database');
router.get('/', async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    router.get('/api/reviews', async (request, response) => {
      const reviews = await knex('review').select('*');
      response.json(reviews);
    });

    router.get('/api/meals/:meal_id/reviews', async (request, response) => {
      const reviews = await knex('review')
        .where({ meal_id: request.params.meal_id })
        .select('*');
      response.json(reviews);
    });

    router.post('/api/reviews', async (request, response) => {
      const newReview = await knex('review').insert(request.body);
      response.json(newReview);
    });

    router.get('/api/reviews/:id', async (request, response) => {
      const review = await knex('review')
        .where({ id: request.params.id })
        .select('*');
      response.json(review);
    });

    router.put('/api/reviews/:id', async (request, response) => {
      const updatedReview = await knex('review')
        .where({ id: request.params.id })
        .update(request.body);
      response.json(updatedReview);
    });

    router.delete('/api/reviews/:id', async (request, response) => {
      await knex('review').where({ id: request.params.id }).del();
      response.json({ message: 'Review deleted' });
    });

    const meals = await knex('meal');
    response.json(meals);
  } catch (error) {
    throw error;
  }
});
module.exports = router;
