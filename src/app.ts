import { config } from "dotenv";
config();
import express from "express";
import router from "./routes";

const buildServer = () => {
  const server = express();
  server.use(express.json());

  server.get("/", (req, res) => {
    res.status(200).json({
      message: "Success",
    });
  });

  server.use("/api/v1", router);

  return server;
};

export default buildServer;
