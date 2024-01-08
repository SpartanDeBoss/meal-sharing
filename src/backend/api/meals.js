const express = require('express');
const router = express.Router();
const knex = require('../database');

router.get('/', async (request, response) => {
  try {
    let query = knex('meal');

    if (request.query.maxPrice) {
      query = query.where('price', '<', request.query.maxPrice);
    }

    if (request.query.availableReservations) {
      query = query.where('max_reservations', '>', 0);
    }

    if (request.query.title) {
      query = query.where('title', 'like', `%${request.query.title}%`);
    }

    if (request.query.dateAfter) {
      query = query.where('date', '>', request.query.dateAfter);
    }

    if (request.query.dateBefore) {
      query = query.where('date', '<', request.query.dateBefore);
    }

    if (request.query.limit) {
      query = query.limit(request.query.limit);
    }

    if (request.query.sortKey) {
      const direction = request.query.sortDir || 'asc';
      query = query.orderBy(request.query.sortKey, direction);
    }

    const meals = await query;
    response.json(meals);
  } catch (error) {
    response.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
