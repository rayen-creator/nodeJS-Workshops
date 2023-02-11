const products=require('../Data/products.json');

exports.productList=(req,res)=>{

    res.status(200).json(products);
}

exports.getproductbyid=(req,res)=>{
    const product=products[req.params.id];
    if(!product){
        res.status(404).json({message:"Product not found"});
    }
    res.status(200).json(product);
}
exports.getTotalpricebyid=(req,res)=>{
    const product=products[req.params.id];
    const qt=req.params.qt;
    if(!product){
        res.status(404).json({message:"Product not found"});
    }
    res.status(200).json({
        "id" : req.params.id,
        "qt" : qt,
        "unit_price" : product.price,
        "totalprice":product.price*qt
    });
}

exports.getProductInStockByQt=(req,res)=>{
    const qt=req.params.qt;
    var product;
  for (let key in products){
    for (let key1 in products[key]){ 
        if(key1=="stock"){
            if(products[key][key1]>=qt){
            product=products[key];
            }
        }

    }
  }
  if (!product){
    res.status(404).json({message:"Product not found"});
  }
  res.status(200).json(product);

}

