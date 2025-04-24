const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const app = express();
const cors = require('cors');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const cookieParser = require('cookie-parser');
const CaptainRoutes = require('./routes/Captain.routes');
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes');

connectToDb();


app.use(cookieParser());
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173', // Vite's default port
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
})


app.use('/users', userRoutes);
app.use('/Captains', CaptainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);


module.exports = app