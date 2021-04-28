const express = require('express');
const app = express();

app.use('/api', (req, res) => {
    return res.json({
        hello: 'world'
    })
});

app.listen(3001);