const Product = require("../models/Product");


const createProduct = async(req,res)=>{
    try {
        let payload = req.body;
        // console.log(req.file)
        // console.log(payload.product)
        payload = {...payload, images: req.files}
        const data = await Product.create(payload);
        res.status(201).send({
            message : "Product is created",
            data : data
        })
    } catch (error) {
        res.status(400).send({
            error : error.message,
            stack : error.stack
        })
    }
}

const getProduct = async(req,res)=>{
    try {
        const data = await Product.find();

        const transformedData = data.map((item) => {
            const { _id, ...rest } = item.toObject(); // Convert Mongoose document to plain JavaScript object
            return { id: _id, ...rest };
        });
        
        res.status(200).send(transformedData)
    } catch (error) {
        res.status(400).send({
            error : error.message,
            stack : error.stack
        })
    }
}

const getProductById = async (req, res) => {
    try {
        const productId = req.body.productId; // Assuming you are sending the productId in the request parameters
        console.log("hello", productId)

        const product = await Product.findById(productId);
        console.log(product)

        if (!product) {
            return res.status(404).send({ error: 'Product not found' });
        }

        const { _id, ...rest } = product.toObject(); // Convert Mongoose document to plain JavaScript object
        const transformedData = { id: _id, ...rest };

        res.status(200).send(transformedData);
    } catch (error) {
        res.status(500).send({
            error: error.message,
            stack: error.stack,
        });
    }
};


module.exports = {
    createProduct,
    getProductById,
getProduct

}