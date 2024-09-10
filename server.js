const express = require('express');
const app = express();

// Route for /subject
app.get('/subject', (req, res) => {
    res.send('ITE314');
});

// Route for /exam
app.get('/exam', (req, res) => {
    res.send('P2');
});

// Route for /node
app.get('/node', (req, res) => {
    res.send('NODEJS');
});
app.get('/', (req, res) => {
    res.send('Choose /NodeJS, /Subject, /exam');
});


// Route for /mydata
app.get('/mydata', (req, res) => {
    res.json({
        subject: 'ITE314',
        exam: 'P2',
        node: 'NODEJS'
    });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
