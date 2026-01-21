"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = require("../modules/auth/auth.route");
const blog_route_1 = require("../modules/Blog/blog.route");
const project_router_1 = require("../modules/project/project.router");
const contact_router_1 = require("../modules/Contact/contact.router");
const router = (0, express_1.Router)();
router.use("/auth", auth_route_1.authRouter);
router.use("/blog", blog_route_1.blogRouter);
router.use("/project", project_router_1.projectRouter);
router.use("/contact", contact_router_1.contactRouter);
exports.default = router;
//# sourceMappingURL=index.js.map