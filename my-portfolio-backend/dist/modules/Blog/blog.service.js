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
exports.blogService = void 0;
const db_1 = require("../../config/db");
const slug_1 = require("../../utils/slug");
const uploadImage_1 = require("../../utils/uploadImage");
const createBlog = (payload, tags, fileBuffer) => __awaiter(void 0, void 0, void 0, function* () {
    let image = null;
    if (fileBuffer) {
        image = yield (0, uploadImage_1.uploadImage)(fileBuffer);
    }
    const blog = yield db_1.prisma.blog.create({
        data: {
            title: payload.title,
            content: payload.content,
            slug: (0, slug_1.generateSlug)(payload.title),
            image: image,
            authorId: payload.authorId,
            description: payload.description,
            tags: tags || [],
        },
    });
    return blog;
});
const getBlogById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield db_1.prisma.blog.findUnique({
        where: { id },
    });
    return blog;
});
const allBlog = (_a) => __awaiter(void 0, [_a], void 0, function* ({ limit = 1, page = 10, }) {
    const skip = (page - 1) * limit;
    const total = yield db_1.prisma.blog.count();
    const blog = yield db_1.prisma.blog.findMany({
        skip,
        take: limit,
        orderBy: {
            createdAt: "desc",
        },
        include: {
            author: {
                select: { id: true, name: true },
            },
        },
    });
    return {
        blog,
        total,
    };
});
const updateBlog = (id, input) => __awaiter(void 0, void 0, void 0, function* () {
    const updateData = Object.assign({}, input);
    if (input.image) {
        updateData.image = yield (0, uploadImage_1.uploadImage)(input.image);
    }
    if (input.title) {
        updateData.slug = (0, slug_1.generateSlug)(input.title);
    }
    const updatedBlog = yield db_1.prisma.blog.update({
        where: { id },
        data: updateData,
    });
    return updatedBlog;
});
const deleteBlog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield db_1.prisma.blog.delete({ where: { id } });
});
exports.blogService = {
    createBlog,
    getBlogById,
    allBlog,
    updateBlog,
    deleteBlog,
};
//# sourceMappingURL=blog.service.js.map