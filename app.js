const express = require('express');

const PORT = process.env.PORT || 5000;

const app = new express();

app.use(express.static('static')).listen(PORT, () => {
    console.log(`Server listens on port ${PORT}`);
});