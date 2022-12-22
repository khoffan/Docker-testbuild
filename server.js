const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/register', (req, res) => {
    res.send(`
        <style>
            div {
                text-align: center;
                background-color: #ccc;
            }
        </style>
        <h1>Registration Form</h1>
        <div>
            <form action="/register" method="post">
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email"><br>
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password"><br><br>
            <button type="submit">Submit</button>
            </form> 
        </div>
  `);
});

app.post('/register', (req, res) => {
    const { email, password } = req.body;

    // Save the email and password to a database or file
    // ...

    res.send(`Successfully registered with email ${email}`);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});