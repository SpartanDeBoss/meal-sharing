const express = require('express');
const router = express.Router();
const knex = require('../database');

router.get('/', async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info

    router.get('/', async (req, res) => {
      const reservations = await knex('reservation');
      res.json(reservations);
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

    const meals = await knex('meal');
    response.json(meals);
  } catch (error) {
    throw error;
  }
});
module.exports = router;
