const express = require('express');

const PORT = process.env.PORT || '5000';
const app = express();

//INIT ROUTES
const mainRoute = require('./routes/route-main');


//INIT APP
app.use('/api', mainRoute);

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));

module.exports = app;
