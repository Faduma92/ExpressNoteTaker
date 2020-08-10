// Dependancy
var express = require('express');

// Variables for the server
var app = express();
var PORT = process.env.PORT || 3000;

// Data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'))

// Routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Listen
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
})
