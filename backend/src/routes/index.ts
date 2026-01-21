import { Router } from "express";
import { authRouter } from "../modules/auth/auth.route";
import { blogRouter } from "../modules/Blog/blog.route";
import { projectRouter } from "../modules/project/project.router";
import { contactRouter } from "../modules/Contact/contact.router";

const router = Router();

router.use("/auth", authRouter);
router.use("/blog", blogRouter);
router.use("/project", projectRouter);
router.use("/contact", contactRouter);

export default router;
