"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
const uploadImage = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary_1.default.uploader.upload_stream({ folder: "blogs" }, (error, result) => {
            if (error)
                return reject(error);
            resolve((result === null || result === void 0 ? void 0 : result.secure_url) || "");
        });
        stream.end(fileBuffer);
    });
};
exports.uploadImage = uploadImage;
//# sourceMappingURL=uploadImage.js.map