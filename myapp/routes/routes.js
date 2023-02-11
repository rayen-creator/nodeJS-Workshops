const oscontroller=require('../controller/osController');
const productcontroller=require('../controller/productController');

module.exports = (app) => {
    //os routes
    app.get("/os",oscontroller.os_requirement);
    app.get("/os/cpus",oscontroller.cpuList);
    app.get("/os/cpus/:id",oscontroller.cpubyid)
    //product routes
    app.get("/products",productcontroller.productList);
    app.get("/products/:id",productcontroller.getproductbyid);
    app.get("/products/instock/:qt",productcontroller.getProductInStockByQt);
    app.get("/products/:id/:qt",productcontroller.getTotalpricebyid);

};