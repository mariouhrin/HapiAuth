const Joi = require("joi");

const { controller } = require("./controllers");
const { JoiTestPayload } = require("./validation");

exports.allRoutes = [
  {
    method: "GET",
    path: "/",
    handler: controller.getData
  },
  {
    method: "GET",
    path: "/{name}",
    options: {
      validate: {
        params: {
          name: Joi.string().required()
        }
      }
    },
    handler: controller.getDataWithParam
  },
  {
    method: "POST",
    path: "/data",
    options: {
      validate: {
        payload: JoiTestPayload
      }
    },
    handler: controller.sendData
  }
];
