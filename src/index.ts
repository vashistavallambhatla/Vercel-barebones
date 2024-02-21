import express from "express";
import cors from "cors";
import {generate} from "./utils" 
import simpleGit from "simple-git";
import path from "path"
import {getAllFiles} from "./file"
import { uploadFile } from "./aws";
import { createClient } from "redis";
const publisher = createClient();

const app = express();
app.use(cors());
app.use(express.json())

const PORT = 3000;

publisher.connect();

app.post("/deploy", async (req,res)=>{
    const repoUrl = req.body.repoUrl;
    const id = generate();
    await simpleGit().clone(repoUrl,path.join(__dirname,`output/${id}`));
    const files = getAllFiles(path.join(__dirname,`output/${id}`));
    files.forEach(async file => {
        await uploadFile(file.slice(__dirname.length+1),file);
    })
    publisher.lPush("build-queue",id);
    res.send({id:id});
})

app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
})
