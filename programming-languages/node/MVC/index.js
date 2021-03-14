import express from 'express'; // === const express = require('express');
import router from './routes/index.js';

const app = express();

const port = process.env.PORT || 4000; 


app.use('/', router);

// Callback arrow function
app.listen(port, () => {
  console.log(`El servidor funciona en el puerto ${port}`)
});