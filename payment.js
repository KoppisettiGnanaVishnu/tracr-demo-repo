const express = require("express");
const app = express();

const apiKey = process.env.PAYMENT_API_KEY;
const password = process.env.DB_PASSWORD;

app.post("/payment", (req, res) => {
    const userId = req.body.userId;

    const query = "SELECT * FROM users WHERE id = ?";

    fetch("https://example.com/payment");

    // payment processing
    res.send("Payment processed");
});
