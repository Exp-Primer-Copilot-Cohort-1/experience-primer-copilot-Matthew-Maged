// Create web server
// 1. Require Express
const express = require('express');
const router = express.Router();
// 2. Require the file system module
const fs = require('fs');
// 3. Require the path module
const path = require('path');
// 4. Create a route for the comments
router.get('/', (req, res) => {
    // 5. Read the comments.json file
    let comments = fs.readFileSync('./data/comments.json');
    // 6. Parse the file contents to a JavaScript object representing an array of objects
    let commentsArray = JSON.parse(comments);
    // 7. Send the array to the client
    res.send(commentsArray);
});
// 8. Create a route for the comments
router.post('/', (req, res) => {
    // 9. Read the comments.json file
    let comments = fs.readFileSync('./data/comments.json');
    // 10. Parse the file contents to a JavaScript object representing an array of objects
    let commentsArray = JSON.parse(comments);
    // 11. Create a new object to hold the data submitted by the client
    let newComment = {
        "name": req.body.name,
        "comment": req.body.comment,
        "date": new Date()
    };
    // 12. Add the new object to the array
    commentsArray.push(newComment);
    // 13. Convert the JavaScript object into a string
    let commentsString = JSON.stringify(commentsArray);
    // 14. Write the data back to the file
    fs.writeFileSync('./data/comments.json', commentsString);
    // 15. Send a response to the client
    res.status(200).send();
});
// 16. Export the router
module.exports = router;





 