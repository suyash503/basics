const express = require('express')
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

const PORT = 3000

app.get('/', (req, res) => {
    res.send("welcome to the homepage of madness");
});

app.get('/about', (req, res) => {
    res.send('this is the aboput page');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === '1234') {
        res.send('login successful');
    }
    else {
        res.status(401).send('invalid credentials')
    }
});


app.listen(PORT, () => {
    console.log((`server is live at ${PORT}`));
})