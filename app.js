const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>🚀 CI/CD Project</h1>
        <p>Working successfully!</p>
        <p>Time: ${new Date().toLocaleString()}</p>
    `);
});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});