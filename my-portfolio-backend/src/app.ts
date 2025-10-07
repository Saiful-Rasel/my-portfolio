import express from "express"
import { authRouter } from "./modules/auth/auth.route"
import { blogRouter } from "./modules/Blog/blog.route"
import { projectRouter } from "./modules/project/project.router"
import cors from "cors"




const app = express()
app.use(cors())

app.use(express.json())
app.use("/api/v1/auth",authRouter)
app.use("/api/v1/blog",blogRouter)
app.use("/api/v1/project",projectRouter)

app.get('/',(req,res) => {
    res.send("hello world")
})

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

export default app;