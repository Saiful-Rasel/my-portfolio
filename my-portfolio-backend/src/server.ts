import app from "./app";
import { envVar } from "./config";
import http, { Server } from "http";
import { prisma } from "./config/db";
import { seedAdmin } from "./utils/seedAdmin";

let server: Server | null = null;

async function connectionDb() {
  try {
    await prisma.$connect();
    console.log("*****database connected Successfully****");
  } catch (error) {
    console.log("*** DB connection failed!");
    process.exit(1);
  }
}

async function startServer() {
  try {
    await connectionDb();
    server = http.createServer(app);
    server.listen(envVar.port, () => {
      console.log(`Example app listening on port ${envVar.port}`);
    });
  } catch (error) {
    process.exit(1)
  }
}


async function gracefulShutdown(signal: string) {


  if (server) {
    server.close(async () => {
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
}


function handleProcessEvents() {
  process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
  process.on("SIGINT", () => gracefulShutdown("SIGINT"));

  process.on("uncaughtException", (error) => {
    console.error(" Uncaught Exception:", error);
    gracefulShutdown("uncaughtException");
  });

  process.on("unhandledRejection", (reason) => {
    console.error(" Unhandled Rejection:", reason);
    gracefulShutdown("unhandledRejection");
  });
}





(async()=>{
  await startServer()
  await seedAdmin()
})();
