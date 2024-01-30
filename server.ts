// import express from 'express'
// const server = express()
// const port = 1100;

// import * as dotenv from "dotenv";
// dotenv.config();


// import * as mongoose from "mongoose";
// // import mongoose  from 'mongoose';


// async function main() {
//     await mongoose.connect(process.env.MONGODB_PATH || "" );
//   }
//   main()
//     .then(() => {
//       console.log("DB is Connected...");
//     })
//     .catch((err) => {

//       console.log(err);
//     });
    
    



import express  from "express";
import dotenv from "dotenv";
import {DBUtil} from './db/dbUtil'
import userRoute from "./routes/user.routes";
import admin from "./routes/admin/adminindex.routes";
import user from "./routes/user/userindex.routes";
const server = express();

dotenv.config({
    path: './.env'
})

const port: Number | undefined = Number(process.env.PORT);
const dbUrl: string | undefined = process.env.MONGODB_URL;
const dbName: string | undefined = process.env.MONGODB_NAME;

server.use(express.json());

server.use('/api/user', userRoute)
server.use('/api/admin', admin);
server.use('/api/user', user);

if(port && dbUrl && dbName){
    server.listen(port, ()=>{
        if (dbUrl && dbName) {
            console.log(dbUrl);
            DBUtil.connectToDb(dbUrl, dbName).then((dbResponse) => {
                console.log(dbResponse);
            }).catch((error) => {
                console.error(error);
                process.exit(0); // stops the node js process
            });
        }   
        console.log(`Server is running on http://localhost:${port}`);
    })
}
