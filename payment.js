const express = require("express");
const app = express();

const apiKey = "sk_test_123456";
const password = "admin123";

app.post("/payment", (req, res) => {
    const userId = req.body.userId;
    const query = "SELECT * FROM users WHERE id = " + userId;

    fetch("http://example.com/payment");

    // payment processing
    res.send("Payment processed");
});
