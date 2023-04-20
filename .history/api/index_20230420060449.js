import express  from "express";
import postRoutes from './routes/posts';


const app = express();

app.use(express.json())
app.use("/api/posts", post)

/*app.get("/test", (req,res)=> {
    res.json("It works!")
})*/

app.listen(8800,()=>{
    console.log("connected!")
})