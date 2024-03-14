const express = require('express');
const router = express.Router();
const knex = require('../database');

// Define routes outside of the function
router.get('/', async (req, res) => {
  const meals = await knex('meal');
  res.json(meals);
});

router.post('/', async (req, res) => {
  const newReservation = req.body;
  await knex('reservation').insert(newReservation);
  res.status(201).json({ message: 'Reservation created' });
});

router.get('/:id', async (req, res) => {
  const reservationId = req.params.id;
  const reservation = await knex('reservation').where({
    id: reservationId,
  });
  res.json(reservation);
});

router.put('/:id', async (req, res) => {
  const reservationId = req.params.id;
  const updatedReservation = req.body;
  await knex('reservation')
    .where({ id: reservationId })
    .update(updatedReservation);
  res.json({ message: 'Reservation updated' });
});

router.delete('/:id', async (req, res) => {
  const reservationId = req.params.id;
  await knex('reservation').where({ id: reservationId }).del();
  res.json({ message: 'Reservation deleted' });
});

module.exports = router;
