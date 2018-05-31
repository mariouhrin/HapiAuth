const Joi = require("joi");

exports.JoiTestPayload = Joi.object().keys({
  firstName: Joi.string()
    .min(3)
    .max(25)
    .required(),
  lastName: Joi.string()
    .min(3)
    .max(25)
    .required(),
  comments: Joi.array()
    .items(Joi.string().min(3))
    .min(1)
});
