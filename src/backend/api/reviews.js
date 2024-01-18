const express = require('express');
const router = express.Router();
const knex = require('../database');

router.get('/api/review', async (request, response) => {
  try {
    const reviews = await knex('review').select('*');
    response.json(reviews);
  } catch (error) {
    throw error;
  }
});

router.get('/api/meals/:meal_id/review', async (request, response) => {
  try {
    const reviews = await knex('review')
      .where({ meal_id: request.params.meal_id })
      .select('*');
    response.json(reviews);
  } catch (error) {
    throw error;
  }
});

router.post('/api/review', async (request, response) => {
  try {
    const newReview = await knex('review').insert(request.body);
    response.json(newReview);
  } catch (error) {
    throw error;
  }
});

router.get('/api/review/:id', async (request, response) => {
  try {
    const review = await knex('review')
      .where({ id: request.params.id })
      .select('*');
    response.json(review);
  } catch (error) {
    throw error;
  }
});

router.put('/api/review/:id', async (request, response) => {
  try {
    const updatedReview = await knex('review')
      .where({ id: request.params.id })
      .update(request.body);
    response.json(updatedReview);
  } catch (error) {
    throw error;
  }
});

router.delete('/api/review/:id', async (request, response) => {
  try {
    await knex('review').where({ id: request.params.id }).del();
    response.json({ message: 'Review deleted' });
  } catch (error) {
    throw error;
  }
});

module.exports = router;
