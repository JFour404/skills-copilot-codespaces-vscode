// Create web server
// Create a route for comments
// Return a response with comments object

// 1. Import express
const express = require('express');

// 2. Create an instance of express
const app = express();

// 3. Create a route for comments
app.get('/comments', (req, res) => {
    const comments = [
        { id: 1, author: 'Gavin', body: 'This is my first comment' },
        { id: 2, author: 'Eva', body: 'This is my second comment' },
        { id: 3, author: 'Adam', body: 'This is my third comment' },
    ];
    // 4. Return a response with comments object
    res.send(comments);
});

// 5. Start the server
app.listen(3000, () => {
    console.log('Server started');
});


