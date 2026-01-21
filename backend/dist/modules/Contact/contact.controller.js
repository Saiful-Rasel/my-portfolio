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
exports.contactController = void 0;
const contact_service_1 = require("./contact.service");
const createMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield contact_service_1.contactService.createMessage(req.body);
        res.status(201).json({
            success: true,
            message: "Message sent successfully!",
            data: result,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Message sending failed",
        });
    }
});
const getAllMessages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield contact_service_1.contactService.getAllMessages();
        res.status(200).json({
            success: true,
            message: "Messages fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Fetching messages failed",
        });
    }
});
const replyToMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const result = yield contact_service_1.contactService.replyToMessage(id, reply);
        res.status(200).json({
            success: true,
            message: "Reply sent successfully!",
            data: result,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Replying to message failed",
        });
    }
});
exports.contactController = {
    createMessage,
    getAllMessages,
    replyToMessage,
};
//# sourceMappingURL=contact.controller.js.map