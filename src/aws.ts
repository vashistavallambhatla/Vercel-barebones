import { S3 } from "aws-sdk";
import fs from "fs";
import { verify } from "jsonwebtoken";

const s3 = new S3({
    accessKeyId:"93598503f8a6f32e077e1289ceca7055",
    secretAccessKey:"4c46aafb8959bc0a4a03d75bb2e62a406b7324037c88cab193bfc9e389653a3e",
    endpoint:"https://a9a883d0405d1b2fa896006d378e8c30.r2.cloudflarestorage.com"
})

export const uploadFile = async (fileName:string,localFilePath:string) => {
    console.log("called");
    const fileContent = fs.readFileSync(localFilePath);
    const response =await s3.upload({
        Body:fileContent,
        Bucket:"vercel",
        Key:fileName,
    }).promise();
    console.log(response);
}