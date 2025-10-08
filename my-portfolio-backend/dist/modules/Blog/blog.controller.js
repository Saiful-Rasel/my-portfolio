"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogController = void 0;
const uploadImage_1 = require("../../utils/uploadImage");
const blog_service_1 = require("./blog.service");
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const fileBuffer = (_a = req.file) === null || _a === void 0 ? void 0 : _a.buffer;
        let image = "";
        if (req.file) {
            image = yield (0, uploadImage_1.uploadImage)(req.file.buffer);
        }
        let tags = [];
        if (req.body.tags) {
            tags = req.body.tags
                .split(" ")
                .map((tag) => tag.trim())
                .filter(Boolean);
        }
        const blog = yield blog_service_1.blogService.createBlog(req.body, tags, fileBuffer);
        res.status(201).json({ success: true, blog });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Blog creation failed" });
    }
});
const getBlogById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const singleBlog = yield blog_service_1.blogService.getBlogById(id);
        res.status(201).json({ success: true, singleBlog });
    }
    catch (error) {
        console.error(error);
        res
            .status(500)
            .json({ success: false, message: "single blog found failed" });
    }
});
const allBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const allBlog = yield blog_service_1.blogService.allBlog({ page, limit });
        res.status(201).json({ success: true, allBlog });
    }
    catch (error) {
        console.error(error);
        res
            .status(500)
            .json({ success: false, message: "all blog found failed" });
    }
});
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        let { title, content, slug, published, description } = req.body || {};
        let tagsArr = [];
        const fileBuffer = ((_a = req.file) === null || _a === void 0 ? void 0 : _a.buffer) || Buffer.from("");
        if ((_b = req.body) === null || _b === void 0 ? void 0 : _b.tags) {
            tagsArr = req.body.tags
                .split(" ")
                .map((tag) => tag.trim())
                .filter(Boolean);
        }
        const input = Object.assign({ title: title, content: content, slug: slug, published: published, description: description, tags: tagsArr }, (req.file && { image: req.file.buffer }));
        const blogUpdate = yield blog_service_1.blogService.updateBlog(req.params.id, input);
        res.status(201).json({ success: true, blogUpdate });
    }
    catch (error) {
        console.error(error);
        res
            .status(500)
            .json({ success: false, message: "single blog updated failed" });
    }
});
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deleteBlog = blog_service_1.blogService.deleteBlog(id);
        res.status(201).json({ success: true });
    }
    catch (error) {
        res
            .status(500)
            .json({ success: false, message: "deleted single Blog faild" });
    }
});
exports.blogController = {
    createBlog,
    getBlogById,
    allBlog,
    updateBlog,
    deleteBlog,
};
//# sourceMappingURL=blog.controller.js.map