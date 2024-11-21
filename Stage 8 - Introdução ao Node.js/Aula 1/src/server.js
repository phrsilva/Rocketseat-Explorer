require("express-async-errors");
const AppError = require('./utils/AppError');
const express = require('express');
const migrationsRun = require('./database/sqlite/migrations/index');
const app = express();


app.use((error, request, response, next ) => {
    console.log('Tipo do erro:', typeof error);
    console.log('É uma instância de Error?', error instanceof Error);
    console.log('Erro:', JSON.stringify(error, null, 2)); // Mostra o erro completo
    
    
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            message: error.message
        });
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
})


const port = 3333;


const usersRoutes = require('./routes/users.routes');


app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


app.use('/users', usersRoutes);

migrationsRun();