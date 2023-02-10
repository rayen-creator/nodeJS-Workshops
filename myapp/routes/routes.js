const oscontroller=require('../controller/osController');
const productcontroller=require('../controller/productController');

module.exports = (app) => {
    app.get("/os",oscontroller.os_requirement);
    app.get("/os/cpus",oscontroller.cpuList);
    app.get("/os/cpus/:id",oscontroller.cpubyid)

    app.get("/products",productcontroller.productList);
};