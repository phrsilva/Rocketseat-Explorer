require('express-async-errors')
const express = require("express");
const app = express();
const port = 3000;
const routes = require('./routes');
const database = require('./database');
const AppError = require('./utils/AppError');



database();
app.use(express.json());    

app.use(routes)

app.use((error, request, response, next) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message
      })
    }
  
    console.error(error)
  
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error'
    })
  })


app.listen(port, () => {
    console.log(`Servidor node rodando na porta http://localhost:${port}`);
});

