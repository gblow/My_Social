const express =  require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes); 

db.on('error', console.error.bind(console, 'connection error:'));

// Connect to the MongoDB database and start the server
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
