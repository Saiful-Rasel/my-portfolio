"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const _1 = require(".");
cloudinary_1.v2.config({
    cloud_name: _1.envVar.cloudinary_name,
    api_key: _1.envVar.cloudinary_key,
    api_secret: _1.envVar.cloudinary_secret,
    secure: true,
});
exports.default = cloudinary_1.v2;
//# sourceMappingURL=cloudinary.js.map