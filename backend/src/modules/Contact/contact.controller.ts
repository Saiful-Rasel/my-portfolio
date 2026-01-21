import { Request, Response } from "express";
import { contactService } from "./contact.service";

const createMessage = async (req: Request, res: Response) => {
  try {
    const result = await contactService.createMessage(req.body);
    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Message sending failed",
    });
  }
};

const getAllMessages = async (req: Request, res: Response) => {
  try {
    const result = await contactService.getAllMessages();
    res.status(200).json({
      success: true,
      message: "Messages fetched successfully!",
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Fetching messages failed",
    });
  }
};

const replyToMessage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { reply } = req.body;

    if (!reply) {
      res.status(400).json({
        success: false,
        message: "Reply content is required",
      });
      return;
    }

    const result = await contactService.replyToMessage(id as string, reply);
    res.status(200).json({
      success: true,
      message: "Reply sent successfully!",
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Replying to message failed",
    });
  }
};

export const contactController = {
  createMessage,
  getAllMessages,
  replyToMessage,
};
