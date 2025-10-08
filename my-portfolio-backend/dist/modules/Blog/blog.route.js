"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRouter = void 0;
const express_1 = require("express");
const multer_1 = require("../../middleware/multer");
const blog_controller_1 = require("./blog.controller");
const router = (0, express_1.Router)();
router.post('/create', multer_1.upload.single("image"), blog_controller_1.blogController.createBlog);
router.get('/:id', blog_controller_1.blogController.getBlogById);
router.get('/', blog_controller_1.blogController.allBlog);
router.patch('/:id', multer_1.upload.single("image"), blog_controller_1.blogController.updateBlog);
router.delete('/:id', blog_controller_1.blogController.deleteBlog);
exports.blogRouter = router;
//# sourceMappingURL=blog.route.js.map