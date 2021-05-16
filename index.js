//Dependencies
const morgan = require('morgan');
const express = require('express');
const app = express();
//Routers
const pokemon = require('./routes/pokemon');
const user = require('./routes/user');
//Middleware
const auth = require ('./middleware/auth');
const notFound = require('./middleware/notFound');
const index = require ('./middleware/index');
const cors = require ('./middleware/cors.js');

app.use(cors);
app.use(morgan ('dev'));
app.use(express.json());
app.use(express.urlencoded ({extended: true}));

app.get("/", (req, res, next) => {
    res.status(200);
    res.send("Hola Mundo");
});
app.use("/user", user);
app.use(auth);
app.use("/pokemon", pokemon);
app.use(notFound);

app.listen(process.env.PORT || 3000, ()=> {
    console.log("Server is running...");
});


/* 
Verbos HTTP
GET
POST
PATCH
PUT
DELETE
console.log(req.params.name);
*/