import express  from "express";

const app = express();

app.use(express.json())

app

app.listen(8800,()=>{
    console.log("connected!")
})