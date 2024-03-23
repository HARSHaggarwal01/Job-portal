import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import connectDb from './config/db.js';
import routes from './routes/web.js';
import auth from './routes/auth.js';
import web from './routes/webView.js';
dotenv.config();

//Connect DB

connectDb();

const port = process.env.PORT || 4000;
const app = express();

//middleware
app.use(express.json());
app.use(cors()); //For connectivity into a two different port line node js with react
app.use(morgan("dev")); //give the current hit api name

app.use("/api/auth",auth);
app.use("/api/web",routes);
app.use("/",web);

app.listen(port,()=>{
    console.log(`Server Starting at port : ${port}`)
})