const express = require('express');
const router = express.Router();
const knex = require('../database');

//  in this Route we have a handler for fetching all meals ie get, put and delete
router.get('/', async (request, response) => {
  try {
    const reservations = await knex('reservation');
    response.json(reservations);
  } catch (error) {
    console.error('Error fetching meals:', error);
    response.status(500).json({ error: 'Internal server error' });        // each handles include error handling
  }
});

module.exports = router;

// Reservation routes
router.get('/reservations', async (req, res) => {
  try {
    const reservations = await knex('reservation');
    res.json(reservations);
  } catch (error) {
    console.error('Error fetching reservations:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/reservations', async (req, res) => {
  try {
    const newReservation = req.body;
    await knex('reservation').insert(newReservation);
    res.status(201).json({ message: 'Reservation created' });
  } catch (error) {
    console.error('Error creating reservation:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/reservations/:id', async (req, res) => {
  try {
    const reservationId = req.params.id;
    const reservation = await knex('reservation').where({ id: reservationId });
    res.json(reservation);
  } catch (error) {
    console.error('Error fetching reservation:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/reservations/:id', async (req, res) => {
  try {
    const reservationId = req.params.id;
    const updatedReservation = req.body;
    await knex('reservation')
      .where({ id: reservationId })
      .update(updatedReservation);
    res.json({ message: 'Reservation updated' });
  } catch (error) {
    console.error('Error updating reservation:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/reservations/:id', async (req, res) => {
  try {
    const reservationId = req.params.id;
    await knex('reservation').where({ id: reservationId }).del();
    res.json({ message: 'Reservation deleted' });
  } catch (error) {
    console.error('Error deleting reservation:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
