async function getData(request, h) {
  const myData = {
    firstName: "mario",
    lastNmae: "uhrin",
    status: "free"
  };
  return h.response(myData).code(200);
}

async function getDataWithParam(request, h) {
  const params = request.params.name;
  const response = {
    message: `my params value is ${params}`
  };
  if (Number(params)) {
    return h
      .response(`ERROR: params ${params} should be a STRING not a number !`)
      .code(400);
  }
  return h.response(response).code(200);
}

exports.controller = {
  getData,
  getDataWithParam
};
