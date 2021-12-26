import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
//importing the routes from the file:
import postRoutes from './routes/posts.js';
//using express middleware to connect this to our app 
const app = express();
app.use('/posts', postRoutes);


app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://arbiva:adi101010@cluster0.xh1u1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

//mongodb+srv://arbiva:adi101010@cluster0.xh1u1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);