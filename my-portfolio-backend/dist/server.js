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
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config");
const http_1 = __importDefault(require("http"));
const db_1 = require("./config/db");
const seedAdmin_1 = require("./utils/seedAdmin");
let server = null;
function connectionDb() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield db_1.prisma.$connect();
            console.log("*****database connected Successfully****");
        }
        catch (error) {
            console.log("*** DB connection failed!");
            process.exit(1);
        }
    });
}
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connectionDb();
            server = http_1.default.createServer(app_1.default);
            server.listen(config_1.envVar.port, () => {
                console.log(`Example app listening on port ${config_1.envVar.port}`);
            });
        }
        catch (error) {
            process.exit(1);
        }
    });
}
function gracefulShutdown(signal) {
    return __awaiter(this, void 0, void 0, function* () {
        if (server) {
            server.close(() => __awaiter(this, void 0, void 0, function* () {
                process.exit(0);
            }));
        }
        else {
            process.exit(0);
        }
    });
}
function handleProcessEvents() {
    process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
    process.on("SIGINT", () => gracefulShutdown("SIGINT"));
    process.on("uncaughtException", (error) => {
        console.error(" Uncaught Exception:", error);
        gracefulShutdown("uncaughtException");
    });
    process.on("unhandledRejection", (reason) => {
        console.error(" Unhandled Rejection:", reason);
        gracefulShutdown("unhandledRejection");
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield startServer();
    yield (0, seedAdmin_1.seedAdmin)();
}))();
//# sourceMappingURL=server.js.map