import express  from "express";
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';


const app = express();

app.use(express.json())
app.use("/api/auth", postRoutes)
app.use("/api/use", postRoutes)
app.use("/api/posts", postRoutes)

/*app.get("/test", (req,res)=> {
    res.json("It works!")
})*/

app.listen(8800,()=>{
    console.log("connected!")
})