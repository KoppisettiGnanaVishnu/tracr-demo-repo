// ==========================
// TRACR Security Test File
// ==========================

// Hardcoded Password
const password = "admin123";

// Hardcoded API Key
const API_KEY = "sk_test_123456789abcdef";

// SQL Injection
function getUser(id) {
    const query = "SELECT * FROM users WHERE id = " + id;
    return query;
}

// Dangerous eval()
function runCode(userInput) {
    eval(userInput);
}

// Command Injection
const { exec } = require("child_process");

function execute(command) {
    exec(command);
}

// JWT Decode instead of Verify
const jwt = require("jsonwebtoken");

function auth(token) {
    return jwt.decode(token);
}

console.log("TRACR TEST");