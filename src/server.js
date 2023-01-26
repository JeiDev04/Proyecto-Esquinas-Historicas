const express = require('express');
const app = express();


//Configuradcion
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hola probando NodeJS express");
});

app.listen(app.get('port'), ()=>{
    console.log("Servidor en marcha "+ app.get('port'));
});


const routes = require('./routes');
app.use('/test', routes);