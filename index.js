const express = require('express')
const app = express();

app.get('/test', (req, res)=>{
    res.status(200).send({ mensaje: 'Jaló! :D'})
})
app.listen(1000, ()=>{
    console.log('Servidor arriba!')
})