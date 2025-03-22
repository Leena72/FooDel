// server code 
// initialized express to handle API roots
// connections to stipe and mongoes

import express,{Request, Response} from "express";
import cors from "cors"
import "dotenv/config";

const app = express(); // create server and assign to app
app.use(express.json()) // add middleware automatically that convert the body of any request we make to our API server to json 
app.use(cors())

// endpoint (when express server get request "/test", it will return json with message Hello!)
app.get("/test", async (req: Request, res: Response) =>{
res.json({message:"Hello!"})
})

// server listen on PORT No 7000and return an mmessage
app.listen(7000, ()=>{
    console.log("server started on localhost:7000")
})
