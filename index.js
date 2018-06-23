const express = require('express');
const app = express();

// Route Handler
app.get('/', (req, res) => {
	res.send({ hi: 'there' });
});

// use the port that Heroku assigns, if none assigned, use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);