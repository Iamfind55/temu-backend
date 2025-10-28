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
exports.AboutUsService = void 0;
const config_1 = require("../../../config");
const error_handler_1 = require("../../../utils/response/error.handler");
const success_handler_1 = require("../../../utils/response/success.handler");
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
class AboutUsService {
    static createAboutUs(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const AboutUsRepository = (0, typeorm_1.getRepository)(entity_1.AboutUs);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                if (!data.data) {
                    return (0, error_handler_1.handleError)("Validation Error", 400, null);
                }
                const newAboutUs = AboutUsRepository.create({
                    data: data.data,
                    created_by: staffDataFromToken === null || staffDataFromToken === void 0 ? void 0 : staffDataFromToken.id,
                });
                const savedAboutUs = yield AboutUsRepository.save(newAboutUs);
                return (0, success_handler_1.handleSuccess)(savedAboutUs);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static updateAboutUs(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const AboutUsRepository = (0, typeorm_1.getRepository)(entity_1.AboutUs);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const aboutUs = yield AboutUsRepository.find();
                if ((aboutUs === null || aboutUs === void 0 ? void 0 : aboutUs.length) <= 0) {
                    return yield this.createAboutUs({ data, req });
                }
                aboutUs[0].updated_by = staffDataFromToken === null || staffDataFromToken === void 0 ? void 0 : staffDataFromToken.id;
                AboutUsRepository.merge(aboutUs[0], data);
                const updatedAboutUs = yield AboutUsRepository.save(aboutUs);
                return (0, success_handler_1.handleSuccess)(updatedAboutUs);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static getAboutUs(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, }) {
            const AboutUsRepository = (0, typeorm_1.getRepository)(entity_1.AboutUs);
            try {
                const aboutUs = yield AboutUsRepository.find();
                if (aboutUs.length <= 0) {
                    return (0, error_handler_1.handleError)("AboutUs not found", 404, null);
                }
                return (0, success_handler_1.handleSuccess)(aboutUs[0]);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
}
exports.AboutUsService = AboutUsService;
