const express = require("express");
const app = express();
const port = 3000;
const routes = require('./routes');
const database = require('./database');



database();
app.use(express.json());    

app.use(routes)



app.listen(port, () => {
    console.log(`Servidor node rodando na porta http://localhost:${port}`);
});

