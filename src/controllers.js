async function getData(request, h) {
  // this data should be stored in database
  const myData = {
    firstName: "mario",
    lastNmae: "uhrin",
    comments: ["awesome", "super duper", "fantastic"]
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

async function sendData(request, h) {
  const data = request.payload;
  const fields = Object.keys(data);
  if (!data) {
    return h.response("Data payload is empty").code(404);
  }
  return h
    .response(
      `
    Youn send this fields: 
    ${fields} 
    to the server
    `
    )
    .code(200);
}

exports.controller = {
  getData,
  getDataWithParam,
  sendData
};
