require('dotenv').config();

// create connection
const knex = require('knex')({
  client: 'postgres', // We basically need to change the client that we are using to postgres if not use     mysql2
  connection: {
    ssl: {
      rejectUnauthorized: false,
    },
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  pool: {
    min: 2,
    max: 10,
  },
});

// Check that the connection works
knex.raw('SELECT VERSION()').then(() => {
  console.log(`connection to db successful!`);
});

module.exports = knex;



// const mongoose = require('mongoose');
// require('dotenv').config();
// const connecttion = mongoose.connect(process.env.MONGO_URI);

// module.exports = {connecttion}


//  mongodb+srv://SpartanDeBoss:<password>@cluster0.druqzzj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0