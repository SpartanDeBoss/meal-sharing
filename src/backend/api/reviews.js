const express = require('express');
const knex = require('../database');

const router = express.Router();

router.get('/', async (req, res) => {
  const reviews = await knex('review');
  res.json(reviews);
});

router.post('/', async (req, res) => {
  const newReview = req.body;
  await knex('review').insert(newReview);
  res.status(201).json({ message: 'Review created' });
});

router.get('/:id', async (req, res) => {
  const reviewId = req.params.id;
  const review = await knex('review').where({
    id: reviewId,
  });
  res.json(review);
});

router.put('/:id', async (req, res) => {
  const reviewId = req.params.id;
  const updatedReview = req.body;
  await knex('review')
    .where({ id: reviewId })
    .update(updatedReview);
  res.json({ message: 'Review updated' });
});

router.delete('/:id', async (req, res) => {
  const reviewId = req.params.id;
  await knex('review').where({ id: reviewId }).del();
  res.json({ message: 'Review deleted' });
});

module.exports = router;
