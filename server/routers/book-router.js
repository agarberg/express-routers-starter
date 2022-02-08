const express = require('express');

//make an express router
const router = express.Router();

const bookList = [];

//TODO - Move these routes to their own modules! 
// change app to ROUTER |  remove /book and keep /
// arrow takes place of function 
router.get('/', (req, res) => {
    res.send(bookList);
});

router.post('/', (req, res) => {
    bookList.push(req.body);
    res.sendStatus(200);
});

module.exports = router;
