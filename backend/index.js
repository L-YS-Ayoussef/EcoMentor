require('dotenv').config();  
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const formRoutes = require('./routes/formRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

// Handle CORS
app.use(cors({ origin: 'http://localhost:3000' }));

// Middlewares
app.use(express.json());

app.use('/api', formRoutes);
app.use('/api', dashboardRoutes);

// DB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error:', err));


// Starting Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
