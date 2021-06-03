const express = require('express');
const PORT = 3000;

const app = express();

app.set('json spaces', 4);

app.get("/", (req, res) => res.json({status: "NTASK-API  esta rodando correto"}));

app.get('/tasks', (req, res) => {
    res.json({
        tasks: [
            {title: "Fazer compras"},
            {title: "concertar o pc"},
        ]
    });
} );
app.listen(PORT, () => console.log(`NTASK-API = porta ${PORT} ok`));
