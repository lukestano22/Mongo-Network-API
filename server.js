const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(routes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


db.once('open', () => {
    console.log('Connected to MongoDB');
    // Start server
    app.listen(PORT, () => {
        console.log(`Server listening on port: ${PORT}`);
    });
});