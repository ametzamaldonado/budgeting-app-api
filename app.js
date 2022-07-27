const express = require("express");
const app = express();
const cors = require("cors");  // allows outside API request. VERY MUCH NEEDED!!!

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
    console.log("Budgeting api works!!")
    next();
})

const budgetingApp = require('./controllers/budgetingApp.js')

app.get('/', (req, res) => {
    res.send("welcome to your budgeting app!")
});

app.use("/transactions", budgetingApp);

app.get("*", (req, res) => {
    res.status(404).json({error: "page not found"})
})


module.exports = app;