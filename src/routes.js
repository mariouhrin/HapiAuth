const { controller } = require("./controllers");

exports.allRoutes = [
  {
    method: "GET",
    path: "/",
    handler: controller.getData
  },
  {
    method: "GET",
    path: "/{name}",
    handler: controller.getDataWithParam
  }
];
