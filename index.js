const express = require('express');

const app = express()
const port = 3333

//  Bagian nomer 5
const data_users = [
    // 
    { id: 1, name: "Ilham Anugrah", alamat: "Sukabumi" },
    { id: 2, name: "Ghina Khairunnisa", alamat: "Bandung" },
    { id: 3, name: "Hana Syifa", alamat: "Jakarta" },
    { id: 4, name: "Daehan Ibrahim", alamat: "Bandung" },
];

app.get("/users", (req, res) => {
    //mendapatkan data dari database
    const data = data_users;
    let result = {
        status: 200,
        data: data,
    };

    res.json(result);
});

// GET method
app.get('/', (req, res) => {
    res.json({ message: "Hallo ini respon JSON wkwkw" });
})

// POST method
app.post('/', (req, res) => {
    res.send('Sebuah POST request')
})

// PUT method
app.put('/user', (req, res) => {
    res.send('/user')
})

// DELETE method
app.delete('/user', (req, res) => {
    res.send('  DELETE request at /user')
})


app.listen(port, () => console.log(`Server running on port ${port}`))
