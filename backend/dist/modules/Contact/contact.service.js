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
exports.contactService = void 0;
const db_1 = require("../../config/db");
const createMessage = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.message.create({
        data: payload,
    });
    return result;
});
const getAllMessages = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.message.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    return result;
});
const replyToMessage = (id, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.message.update({
        where: { id },
        data: {
            reply,
            repliedAt: new Date(),
        },
    });
    return result;
});
exports.contactService = {
    createMessage,
    getAllMessages,
    replyToMessage,
};
//# sourceMappingURL=contact.service.js.map