const express = require('express');
const mongoose = require('mongoose');
const Contact = require('./models/contact.model.js'); 
const contactRoute =require("./routes/contact.route.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));


// Base route
app.use("/api/contacts", contactRoute);


app.get('/', (req, res) => {
    res.send("Hello From Node API");
});


// Connect to MongoDB and start the server
mongoose.connect("mongodb+srv://rrshttgr:mr968641raja@backenddb.5re0x.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((error) => {
        console.error("Connection Failed!", error.message);
    });
