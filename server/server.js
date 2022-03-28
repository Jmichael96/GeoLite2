require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(cors());

app.use(routes); 

app.listen(PORT, () => {
    console.log(`Bears... Beets... Battlestar Galactica on Port ${PORT}`);
});