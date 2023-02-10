const controller=require('../controller/osController');

module.exports = (app) => {
    app.get("/os",controller.os_requirement);
    app.get("/os/cpus",controller.cpuList);
};