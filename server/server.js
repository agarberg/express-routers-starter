const express = require('express');
const bodyParser = require('body-parser');
//ADDDDDD
const bookRouter = require('./routers/book-router') // go up one DIR, go into routers DIR
const app = express();
const PORT = process.env.PORT || 5000;
//ADDDDDD
const movieRouter = require('./routers/movie-router')
// const bookList = [];
// const movieList = [];

// express static file serving - public is the folder name
app.use( express.static('server/public') );

// Setup body parser for POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//ADDD
app.use('/book', bookRouter);

//ADDDDD
app.use('/movie', movieRouter)

// TODO - Move these routes to their own modules!
// app.get('/book', (req, res) => {
//     res.send(bookList);
// });

// app.post('/book', (req, res) => {
//     bookList.push(req.body);
//     res.sendStatus(200);
// });

// app.get('/movie', (req, res) => {
//   res.send(movieList);
// });

// app.post('/movie', (req, res) => {
//   movieList.push(req.body);
//   res.sendStatus(200);
// });



// Start server listening on PORT
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}...`);
})
