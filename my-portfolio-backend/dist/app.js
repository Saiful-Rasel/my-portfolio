"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("./modules/auth/auth.route");
const project_router_1 = require("./modules/project/project.router");
const cors_1 = __importDefault(require("cors"));
const blog_route_1 = require("./modules/blog/blog.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:3000",
        "https://your-frontend-domain.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use("/api/v1/auth", auth_route_1.authRouter);
app.use("/api/v1/blog", blog_route_1.blogRouter);
app.use("/api/v1/project", project_router_1.projectRouter);
app.get("/", (req, res) => {
    res.send("hello world");
});
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found",
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map