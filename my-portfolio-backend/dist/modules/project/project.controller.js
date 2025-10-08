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
exports.projectController = exports.updateProject = void 0;
const uploadImage_1 = require("../../utils/uploadImage");
const project_service_1 = require("./project.service");
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        let imageUrl = null;
        if (req.file) {
            imageUrl = yield (0, uploadImage_1.uploadImage)((_a = req.file) === null || _a === void 0 ? void 0 : _a.buffer);
        }
        let features = [];
        if (req.body.features) {
            features = req.body.features
                .split(" ")
                .map((feature) => feature.trim())
                .filter(Boolean);
        }
        const createProject = yield project_service_1.projectService.createProject(req.body, features, imageUrl !== null && imageUrl !== void 0 ? imageUrl : "");
        res.status(201).json({ success: true, createProject });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Blog creation failed" });
    }
});
const getProjectById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const singleProject = yield project_service_1.projectService.getProjectById(id);
        res.status(201).json({ success: true, singleProject });
    }
    catch (error) {
        console.error(error);
        res
            .status(500)
            .json({ success: false, message: "single blog found failed" });
    }
});
const allProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const allProject = yield project_service_1.projectService.allProject({ page, limit });
        res.status(201).json({ success: true, allProject });
    }
    catch (error) {
        console.error(error);
        res
            .status(500)
            .json({ success: false, message: "all project found failed" });
    }
});
const updateProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        let imageUrl = null;
        if (req.file) {
            imageUrl = yield (0, uploadImage_1.uploadImage)(req.file.buffer);
        }
        // Parse features (space or comma-separated)
        let features = [];
        if (req.body.features) {
            features = req.body.features
                .split(/[,\s]+/) // handles both commas and spaces
                .map((feature) => feature.trim())
                .filter(Boolean);
        }
        const updatedProject = yield project_service_1.projectService.updateProject(id, req.body, features, imageUrl);
        if (!updatedProject) {
            return res.status(404).json({ success: false, message: "Project not found" });
        }
        res.status(200).json({
            success: true,
            message: "Project updated successfully",
            updatedProject,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Project update failed" });
    }
});
exports.updateProject = updateProject;
const deleteProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deleteProject = project_service_1.projectService.deleteProject(id);
        res.status(201).json({ success: true });
    }
    catch (error) {
        res
            .status(500)
            .json({ success: false, message: "deleted single project faild" });
    }
});
exports.projectController = {
    createProject,
    getProjectById,
    allProject,
    updateProject: exports.updateProject,
    deleteProject
};
//# sourceMappingURL=project.controller.js.map