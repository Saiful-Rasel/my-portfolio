import { Router } from "express";
import { upload } from "../../middleware/multer";
import { projectController } from "./project.controller";


const router = Router()

router.post('/create',upload.single("thumbnail"),projectController.createProject)
router.get('/:id',projectController.getProjectById)
router.get('/',projectController.allProject)
router.patch('/:id',upload.single("thumbnail"),projectController.updateProject)
router.delete('/:id',projectController.deleteProject)

export const projectRouter = router