// Require the framework and instantiate it
const fastify = require("fastify")({
  logger: true,
});

// Declare a route
//fastify.get("/", const handler = (request, reply) =>
// reply.send({ hello: "world" });

fastify.get("/", (request, reply) => {
  reply.send({ hello: "world" });
});

fastify.get("/api/healthchecker", (request, reply) => {
  reply.status(200).send({
    //reply.status(200).send({
    status: "success",
    message: "Build CRUD API with Node.js and Sequelize",
  });
});

fastify.all("*", (request, reply) => {
  reply.status(404).send({
    status: "fail",
   // message: "Route does not exist on this server",
  // message: `Route: ${request.raw.url} does not exist on this server`,
    message: `Route: ${request.raw.url} does   not exist on this server`,
  });
});
// Run the server!
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  //console.log("server is now listening on ${address}");
  fastify.log.info(`server listening on ${address}`);
});
