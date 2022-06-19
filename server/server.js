const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 7000;

const app = new express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server listens on port ${PORT}`);
});