const express = require('express');

const app = express()
const port = 3333

// GET method
app.get('/', (req, res) => {
    res.json({ message: "Hallo ini respon JSON wkwkw" });
})

// POST method
app.post('/Americano', (req, res) => {
    res.send('Sebuah POST request')
})

// PUT method
app.put('/Americano', (req, res) => {
    res.send('  PUT request at /americano')
})

// DELETE method
app.delete('/Americano', (req, res) => {
    res.send('request is succesfully deleted')
})
