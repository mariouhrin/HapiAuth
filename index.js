"use strict";

const Hapi = require("hapi");

const { allRoutes } = require("./src/routes");

const server = Hapi.server({
  port: 3000,
  routes: {
    validate: {
      failAction: async (request, h, err) => {
        throw err;
      }
    }
  },
  host: "localhost"
});

async function start() {
  // add all routes definition into Hapi serve instance
  server.route(allRoutes);

  // Start server
  await server.start();
  return server;
}

// catch unhandled errors
process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

start()
  .then(server => {
    console.log(`Server running at: ${server.info.uri}`);
  })
  .catch(e => console.log(e.message));
