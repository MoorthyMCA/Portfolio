const express = require("express");
const app = express();
const cors = require("cors");
const modal = require("./modal/modal.js"); // Correct import
const mongoose = require("mongoose");
require('dotenv').config();
const nodemailer=require("nodemailer");
const bodyparser=require("body-parser");



const transporter=nodemailer.createTransport({
    service:"gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "thatchanamoorthy73@gmail.com",
      pass: "ofzu vchx xdvn avyr"

    }
})

const db = mongoose.connection;
app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded())
const API_KEY = process.env.MONGO_URL;
const PORT=process.env.PORT
mongoose.connect(API_KEY, { useNewUrlParser: true, useUnifiedTopology: true });

db.once("open", () => {
    console.log("mongoose connected");
});

app.post("/postdata", async (req, res) => {
   
    try {
        const datas = req.body;
        console.log(datas.mail)
        const newUser = await modal.create(datas); // Save to MongoDB

        const mailoption = {
            from: {
                name: "Portfolio",
                address: "thatchanamoorthy73@gmail.com"
            },
            to: datas.mail,
            subject: "Thanks for viewing my portfolio",
            text: "Hi!",
            html: "<p>Thanks for submitting the form.</p>"
        };

        // 🔥 FIXED: No callback here
        const info = await transporter.sendMail(mailoption);
        console.log("Email sent: " + info.response);

        res.status(200).json({ mail: "mail sent" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to send email or save data" });
    }
});

app.get("/",(req,res)=>{
    res.json("message from server");

})

app.listen(PORT, () => {
    console.log("server started");
});
