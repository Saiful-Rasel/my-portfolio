import express from "express";
import { authRouter } from "./modules/auth/auth.route";

import { projectRouter } from "./modules/project/project.router";
import cors from "cors";
import { blogRouter } from "./modules/blog/blog.route";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://your-frontend-domain.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use("/api/v1/auth", authRouter);

app.use("/api/v1/blog", blogRouter);
app.use("/api/v1/project", projectRouter);




app.get("/", (req, res) => {
  res.send("hello world");
});

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

export default app;
