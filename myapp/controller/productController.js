const products=require('../Data/products.json');

exports.productList=(req,res)=>{

    res.status(200).json(products);
}