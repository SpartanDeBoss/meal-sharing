const express = require('express');
const router = express.Router();
const knex = require('../database');

// when a reques is made, it send a json respose to the client with all the meals in the database 

router.get('/', async (request, response) => {
  try {
    const titles = await knex('meal').select('*');
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

//  here it only  the  meal with the id that is requested by the client
router.get('/:id', async (req, res) => {
  try {
    const mealId = req.params.id;
    const meal = await knex('meal').where({ id: mealId }).first();
    if (!meal) {
      return res.status(404).json({ error: 'Meal not found' }); 
    
      // also have error handling
    }
    res.json(meal);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
