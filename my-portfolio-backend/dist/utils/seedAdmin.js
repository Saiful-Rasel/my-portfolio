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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedAdmin = void 0;
const client_1 = require("@prisma/client");
const config_1 = require("../config");
const db_1 = require("../config/db");
const bcrypt_1 = __importDefault(require("bcrypt"));
const seedAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isAdminExist = yield db_1.prisma.user.findUnique({
            where: { email: config_1.envVar.admin_email },
        });
        if (isAdminExist) {
            console.log("**admin already Exist ***");
            return;
        }
        const hashPassword = yield bcrypt_1.default.hash(config_1.envVar.admin_pass, 10);
        const data = {
            name: "saiful rasel",
            email: config_1.envVar.admin_email,
            role: client_1.Role.ADMIN,
            password: hashPassword,
            isVerified: true,
            auth: "credential",
        };
        const createAdmin = yield db_1.prisma.user.create({ data });
        console.log(" Admin Created Successfuly!");
        console.log(createAdmin);
    }
    catch (error) {
        console.log(error);
    }
});
exports.seedAdmin = seedAdmin;
//# sourceMappingURL=seedAdmin.js.map