import { ExpressServer } from "./server";
const serverless = require("serverless-http");

module.exports.handler = serverless(new ExpressServer().app);
