import express from "express";
import { contactController } from "./contact.controller";

const router = express.Router();

router.post("/", contactController.createMessage);
router.get("/", contactController.getAllMessages);
router.patch("/:id/reply", contactController.replyToMessage);

export const contactRouter = router;
