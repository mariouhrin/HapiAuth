"use strict";

const Hapi = require("hapi");

const server = Hapi.server({
  port: 3000,
  host: "localhost"
});

server.route({
  method: "GET",
  path: "/",
  handler: (request, h) => {
    return {
      firstName: "mario",
      lastNmae: "uhrin",
      status: "bitcoin billionare"
    };
  }
});

server.route({
  method: "GET",
  path: "/{name}",
  handler: (request, h) => {
    const param = request.params.name;
    return `Hello, ${param} !`;
  }
});

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
