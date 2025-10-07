import { Router } from "express";
import { blogController } from "./blog.controller";
import { upload } from "../../middleware/multer";


const router = Router()

router.post('/create',upload.single("image"),blogController.createBlog)
router.get('/:id',blogController.getBlogById)
router.get('/',blogController.allBlog)
router.patch('/:id',upload.single("image"),blogController.updateBlog)
router.delete('/:id',blogController.deleteBlog)

export const blogRouter = router