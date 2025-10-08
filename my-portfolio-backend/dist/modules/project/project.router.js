"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRouter = void 0;
const express_1 = require("express");
const multer_1 = require("../../middleware/multer");
const project_controller_1 = require("./project.controller");
const router = (0, express_1.Router)();
router.post('/create', multer_1.upload.single("thumbnail"), project_controller_1.projectController.createProject);
router.get('/:id', project_controller_1.projectController.getProjectById);
router.get('/', project_controller_1.projectController.allProject);
router.patch('/:id', multer_1.upload.single("thumbnail"), project_controller_1.projectController.updateProject);
router.delete('/:id', project_controller_1.projectController.deleteProject);
exports.projectRouter = router;
//# sourceMappingURL=project.router.js.map