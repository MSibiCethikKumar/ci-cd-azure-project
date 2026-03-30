const express = require('express');
const app = express();

// Port (Azure will use this later)
const PORT = process.env.PORT || 3000;

// Route
app.get('/', (req, res) => {
    res.send('hi this is my second report');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});