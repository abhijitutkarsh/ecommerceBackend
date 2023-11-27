const express = require("express");
const router = express.Router();
const middleware = require("../middlewares/auth");
const auth = middleware.auth;
const path = require('path');
const app = express();

// app.use("/uploads",express.static("uploads"));

const productController = require("../controllers/Products");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
       const uploadPath = path.join(__dirname, '../uploads');
       cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
       cb(null, Date.now() + path.extname(file.originalname));
    }
 });
 

const upload = multer({ storage: storage });


router.post("/create-product",upload.array("images", 5), productController.createProduct);
router.get("/get-product",productController.getProduct);

module.exports = router;