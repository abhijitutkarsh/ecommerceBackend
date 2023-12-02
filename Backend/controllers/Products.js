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

module.exports = {
    createProduct,
getProduct

}