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
exports.projectService = void 0;
const db_1 = require("../../config/db");
const createProject = (payload, features, imageUrl) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield db_1.prisma.project.create({
        data: {
            title: payload.title,
            description: payload.description,
            thumbnail: imageUrl,
            liveLink: payload.liveLink,
            repoLink: payload.repoLink,
            features: features,
        },
    });
    return blog;
});
const getProjectById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield db_1.prisma.project.findUnique({
        where: { id },
    });
    return project;
});
const allProject = (_a) => __awaiter(void 0, [_a], void 0, function* ({ limit = 1, page = 10, }) {
    const skip = (page - 1) * limit;
    const project = yield db_1.prisma.project.findMany({
        skip,
        take: limit,
        orderBy: {
            createdAt: "desc",
        },
    });
    return project;
});
const updateProject = (id, data, features, imageUrl) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const existingProject = yield db_1.prisma.project.findUnique({ where: { id } });
    if (!existingProject)
        return null;
    const updatedProject = yield db_1.prisma.project.update({
        where: { id },
        data: {
            title: (_a = data.title) !== null && _a !== void 0 ? _a : existingProject.title,
            description: (_b = data.description) !== null && _b !== void 0 ? _b : existingProject.description,
            liveLink: (_c = data.liveLink) !== null && _c !== void 0 ? _c : existingProject.liveLink,
            repoLink: (_d = data.repoLink) !== null && _d !== void 0 ? _d : existingProject.repoLink,
            features: features.length > 0 ? features : existingProject.features,
            thumbnail: imageUrl !== null && imageUrl !== void 0 ? imageUrl : existingProject.thumbnail,
        },
    });
    return updatedProject;
});
const deleteProject = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield db_1.prisma.project.delete({ where: { id } });
});
exports.projectService = {
    createProject,
    getProjectById,
    allProject,
    updateProject,
    deleteProject,
};
//# sourceMappingURL=project.service.js.map