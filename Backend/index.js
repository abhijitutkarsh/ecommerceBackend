const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const multer = require('multer')
const path = require('path');



const app = express();
const campaignRoute = require("./routes/campaign");
const productRoute = require("./routes/product");
const userRoute = require("./routes/user");
const taskRoute = require("./routes/task");
const { createProduct } = require("./controllers/Products");
require("dotenv").config()
app.use(express.json());
app.use(cors());

// app.use("/uploads",express.static("uploads"));
// const upload = multer({ dest: 'uploads' })
// const storage = multer.diskStorage({
// 	destination: function (req, file, cb) {
// 		cb(null, './uploads')
// 	  },
// 	  filename: function (req, file, cb) {
// 		cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
// 	  }
// 	})
  
  // const upload = multer({ storage: storage })

// app.use("/",()=> console.log("Welcome"))
app.use("/uploads",express.static("uploads"));

app.use("/campaign",campaignRoute);
app.use("/product",productRoute);
app.use("/task",taskRoute);
app.use("/user",userRoute);
// const router = express.Router();

// router.post("/product/create-product",upload.single("pic"), createProduct);


app.listen(4000, (req,res) => {
  
    console.log("server is running 4000");
})




const url = process.env.MONGODB_URL || 'mongodb+srv://visionvalt:V4bsXG82qz8bWS1V@cluster0.ffosq5y.mongodb.net/?retryWrites=true&w=majority' ;
console.log("url",url);
mongoose.connect(url)
  .then(() => {
    console.log('db is connected');
  })
  .catch((err) => {
    console.log(err);
  });














