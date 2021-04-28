const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api', (req, res) => {
    return res.json({
        hello: 'world'
    })
});

app.listen(PORT);