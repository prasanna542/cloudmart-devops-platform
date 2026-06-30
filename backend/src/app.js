const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "CloudMart API is running"
    });
});

module.exports = app;