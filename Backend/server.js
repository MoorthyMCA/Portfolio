const express = require("express");
const app = express();
const cors = require("cors");
const modal = require("./modal/modal.js"); // Correct import
const mongoose = require("mongoose");
const bodyparser=require("body-parser");





const db = mongoose.connection;
app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded())
mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true });

db.once("open", () => {
    console.log("mongoose connected");
});

app.post("/postdata", async (req, res) => {
   
   const data=req.body
   console.log(data)
   try{
    const PostData=await modal.create(data);
    if(PostData){
        res.json({message:"posted"})
    }


   }catch(err){
    console.log(err)

   }
})



app.listen(4001, () => {
    console.log("server started");
});
