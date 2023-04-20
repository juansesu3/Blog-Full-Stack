import express  from "express";

const app = express();

app.use(express.json())

app.get("/test", (req,res)=> {
    req
})

app.listen(8800,()=>{
    console.log("connected!")
})