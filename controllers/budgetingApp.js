const express = require("express");
const transactions = express.Router();

const transactionData = require("../models/transactions.js");

// Index
transactions.get("/", (req, res) => {
    res.json(transactionData)
});

// Show
transactions.get("/:id", (req, res) => {
    const { id } = req.params;
    if(transactionData[id]){
        res.json(transactionData[id])
    } else {
        res.redirect("*") // Error page. Look at app.js line 24
    }
});

// Create 
transactions.post("/", (req, res) => {
    transactionData.push(req.body);
    res.json(transactionData[transactionData.length - 1])
});

// Delete 
transactions.delete("/:arrayId", (req, res) => {
    const { arrayId } = req.params;
    if(transactionData[id]){
        const deletedEntry = transactionData.splice(arrayId, 1)
        res.status(200).json(deletedEntry)
    }
});

// Update
transactions.put("/:arrayId", (req, res) => {
    const { arrayId } = req.params;
    if(transactionData[id]){
        transactionData[arrayId] = req.body
        res.status(200).json(transactionData[arrayId])
    }
});

module.exports = transactions;