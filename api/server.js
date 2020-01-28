const express = require("express");

const server = express();

const apiRouter = require("./api-router");
const configureMiddleware = require("./configure-middleware");

configureMiddleware(server);

server.use("/api", apiRouter);

module.exports = server;
