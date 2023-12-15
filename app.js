const express = require('express');
const app = express();
const users = [
    { id: 1, name: "phone", amount: 20, price: 100 },
    { id: 2, name: "laptop", amount: 1, price: 100 },
    { id: 3, name: "PC", amount: 10, price: 200 },
    { id: 4, name: "barbie", amount: 100, price: 2000 },
    { id: 5, name: "lego", amount: 30, price: 1000 },
    { id: 6, name: "aguarium", amount: 5, price: 3000 },
    { id: 7, name: "TV", amount: 20, price: 500 },
    { id: 8, name: "projector", amount: 10, price: 700 },
    { id: 9, name: "laser", amount: 80, price: 800 },
    { id: 10, name: "notepad", amount: 90, price: 900 },
]

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/user/:id', function (req, res) {
    const id = parseInt(req.params.id);
    const product = users.find(user => user.id === id);
    if (product) {
        res.send(`Name: ${product.name} <br> Price: ${product.price} <br> Amount: ${product.amount} <br> ID: ${product.id}`);
    } else {
        res.send("Error: User not found");
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});