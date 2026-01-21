"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envVar = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.envVar = {
    port: process.env.PORT,
    admin_email: process.env.ADMIN_EMAIL,
    admin_pass: process.env.ADMIN_PASS,
    jwt_secret: process.env.JWT_SECRET,
    cloudinary_name: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinary_secret: process.env.CLOUDINARY_API_SECRET,
    cloudinary_key: process.env.CLOUDINARY_API_KEY
};
//# sourceMappingURL=index.js.map